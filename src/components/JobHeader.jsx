import React from "react";
import coffeeroasters from "../assets/logos/coffeeroasters.svg";
import { Link, useParams } from "react-router-dom";
// import a from "../a";

const JobHeader = ({ job }) => {
  return (
    <Link to={`${job.id}`}>
      <div className="job-header container">
        <div
          className="logo-wrapper"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img src={`./src/${job.logo}`} alt="" />
        </div>
        <div className="job-header__content">
          <div
            className="job-header__desc flow"
            style={{ "--flow-spacer": "10px" }}
          >
            <p className="job-type flex">
              <span>{job.postedAt} </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#6E8098" />
              </svg>
              <span>{job.contract}</span>
            </p>
            <p className="job-title h3">{job.position}</p>
            <p>{job.company}</p>
          </div>
          <div className="job-header__location">
            <p className="h4">{job.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobHeader;
