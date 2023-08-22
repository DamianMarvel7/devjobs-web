import React, { createContext, useState, useEffect } from "react";
import jobData from "../data.json";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [jobs, setJobs] = useState(jobData);
  const [filteredJobs, setFilteredJobs] = useState(jobs); // State for filtered jobs

  const filterByTitle = (keyword) => {
    if (keyword.trim() === "") {
      resetFilter();
    } else {
      const filteredJob = jobs.filter((job) => {
        return job.position.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredJobs(filteredJob);
    }
  };

  const filterByLocation = (keyword) => {
    if (keyword.trim() === "") {
      resetFilter();
    } else {
      const filteredJob = jobs.filter((job) => {
        return job.location.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredJobs(filteredJob);
    }
  };

  const filterByContract = (jobContract) => {
    if (jobContract == "") {
      resetFilter();
    } else {
      const filteredJob = jobs.filter((job) => {
        return job.contract === jobContract;
      });
      setFilteredJobs(filteredJob);
    }
  };

  const filterJobs = (inputTitle, inputLocation, contract) => {
    let filteredJob = jobs;

    if (inputTitle.trim() === "") {
      resetFilter();
    } else {
      filteredJob = jobs.filter((job) => {
        return job.position.toLowerCase().includes(inputTitle.toLowerCase());
      });
    }

    if (inputLocation.trim() === "") {
      resetFilter();
    } else {
      filteredJob = filteredJob.filter((job) => {
        return job.location.toLowerCase().includes(inputLocation.toLowerCase());
      });
    }

    if (contract == "") {
      resetFilter();
    } else {
      filteredJob = filteredJob.filter((job) => {
        return job.contract === contract;
      });
    }

    setFilteredJobs(filteredJob);
  };

  const resetFilter = () => {
    setFilteredJobs(jobs);
  };

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <JobContext.Provider
      value={{
        jobs: filteredJobs,
        filterByTitle,
        filterByContract,
        filterByLocation,
        filterJobs,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
