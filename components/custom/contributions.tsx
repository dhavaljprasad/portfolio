"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type GitHubData = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

export const GithubContributions = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-2">
      <h2 className="text-xl font-semibold text-text-primary">
        GitHub Contributions
      </h2>
      <div className="w-full overflow-hidden">
        <GithubContributionsGraph />
      </div>
    </div>
  );
};

export const GithubContributionsGraph = () => {
  const [contributions, setContributions] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchGithubData = async () => {
    try {
      const response = await axios.get("/api/github-contributions");
      setContributions(response.data);
    } catch (error) {
      console.error("Error fetching GitHub contributions:", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  if (loading) {
    return <div className="text-sm text-gray-400">Loading...</div>;
  }

  if (isError || !contributions) {
    return <div className="text-sm text-red-500">Failed to load</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      {/* Graph Wrapper */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-1 w-max mx-auto">
          {contributions.weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.contributionDays.map((day, j) => (
                <div
                  key={j}
                  title={`${day.date} : ${day.contributionCount} contributions`}
                  className={`
                  rounded-xs
                  ${getColorClass(day.contributionCount)}
                  
                  /* Responsive sizing */
                  w-[10px] h-[10px]        /* mobile */
                  sm:w-[12px] sm:h-[12px]
                  md:w-[14px] md:h-[14px]
                  
                  transition-transform hover:scale-110
                `}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-end px-1">
        <span className="text-text-primary text-xs sm:text-sm font-semibold">
          Total Commits:{" "}
          <span>{contributions.totalContributions} in last year</span>
        </span>
      </div>
    </div>
  );
};

export const getColorClass = (count: number) => {
  if (count === 0) return "bg-background-secondary";
  if (count <= 2) return "bg-teal-900";
  if (count <= 5) return "bg-teal-700";
  if (count <= 10) return "bg-teal-500";
  return "bg-teal-300";
};
