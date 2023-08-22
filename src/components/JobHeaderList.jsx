// import React, { useContext } from "react";
// import JobHeader from "./JobHeader";
// import { JobContext } from "../context/JobContext";

// const JobHeaderList = () => {
//   const { jobs } = useContext(JobContext);
//   console.log(jobs.length);
//   return (
//     <div className="job-header__list grid">
//       {jobs.map((job) => (
//         <JobHeader key={job.id} job={job} />
//       ))}
//     </div>
//   );
// };

// export default JobHeaderList;

import React, { useContext, useState } from "react";
import JobHeader from "./JobHeader";
import { JobContext } from "../context/JobContext";

const JobHeaderList = () => {
  const { jobs } = useContext(JobContext);
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const visibleJobs = jobs.slice(0, visibleCount);

  return (
    <div className="job-header__list grid">
      {visibleJobs.map((job) => (
        <JobHeader key={job.id} job={job} />
      ))}
      {visibleCount < jobs.length && (
        <button className="btn btn1" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default JobHeaderList;
