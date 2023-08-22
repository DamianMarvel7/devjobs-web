import React from "react";
import { useParams } from "react-router-dom";
import jobData from "../data.json";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobData[id - 1];

  return (
    <div className="job-details">
      <div className="container">
        <div className="job-header job-header2 container">
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
              <p className="job-type h3">{job.company}</p>
              <p className="job-title">{`${job.company}.com`}</p>
            </div>
            <div className="job-header__location">
              <button className="btn btn2 bold">Company Site</button>
            </div>
          </div>
        </div>
        <div className="job-details__content container">
          <div className="job-header">
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
                <p className="h4">{job.location}</p>
              </div>
              <div className="job-header__location">
                <button className="btn btn1">Apply Now</button>
              </div>
            </div>
          </div>
          <div className="job-details__text flow">
            <p>{job.description}</p>
            <p className="h3">Requirements</p>
            <p>{job.requirements.content}</p>
            <ul>
              {job.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="h3">What You Will Do</p>
            <p>{job.role.content}</p>
            <ol>
              {job.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <div>
          <div className="job-title hidden">
            <p className="h3">{job.position}</p>
            <p>{job.company}</p>
          </div>
          <button className="btn btn1">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
