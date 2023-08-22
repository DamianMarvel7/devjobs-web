import React, { useContext, useState } from "react";
import iconFilter from "../assets/mobile/icon-filter.svg";
import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import { JobContext } from "../context/JobContext";

const Search = () => {
  const { filterByTitle, filterByContract, filterByLocation, filterJobs } =
    useContext(JobContext);
  const [inputTitle, setInputTitle] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleTitleChange = (event) => {
    const newInputValue = event.target.value;
    setInputTitle(newInputValue);
    // filterByTitle(newInputValue);
    const contractType = isChecked ? "Full Time" : "";

    filterJobs(newInputValue, inputLocation, contractType);
  };

  const handleLocationChange = (event) => {
    const newInputValue = event.target.value;
    setInputLocation(newInputValue);
    // filterByLocation(newInputValue);
    const contractType = isChecked ? "Full Time" : "";
    filterJobs(inputTitle, newInputValue, contractType);
  };

  const handleContractChange = () => {
    setIsChecked(!isChecked);
    const contractType = !isChecked ? "Full Time" : "";
    // filterByContract(contractType);
    filterJobs(inputTitle, inputLocation, contractType);
  };

  const handleFilter = () => {
    const searchMobileEl = document.querySelector(".search-mobile");
    const contractType = isChecked ? "Full Time" : "";
    filterJobs(inputTitle, inputLocation, contractType);

    searchMobileEl.classList.toggle("opened");
  };
  return (
    <div>
      <div className="search" id="search1">
        <div className="search__content grid container">
          <div className="search__input flex">
            <input
              type="text"
              className="input1"
              placeholder="Filter by title..."
              value={inputTitle}
              onChange={handleTitleChange}
            />
            <img src={iconFilter} alt="" onClick={handleFilter} />
          </div>
          <div className="search__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect width="48" height="48" rx="5" fill="#5964E0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.3533 26.549H28.2603L33.9529 32.2531L32.2531 33.9529L26.549 28.2603V27.359L26.2353 27.0453C24.9405 28.1576 23.2578 28.8307 21.4153 28.8307C17.3198 28.8307 14 25.5109 14 21.4153C14 17.3198 17.3198 14 21.4153 14C25.5109 14 28.8306 17.3198 28.8306 21.4153C28.8306 23.2578 28.1576 24.9405 27.0396 26.2353L27.3533 26.549ZM16.2817 21.4153C16.2817 24.2503 18.5804 26.549 21.4153 26.549C24.2503 26.549 26.549 24.2503 26.549 21.4153C26.549 18.5804 24.2503 16.2817 21.4153 16.2817C18.5804 16.2817 16.2817 18.5804 16.2817 21.4153Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="search" id="search2">
        <div className="search__content2 grid container">
          <div className="search__input2 flex">
            <img src={iconSearch} alt="" />
            <input
              type="text"
              className="input1"
              placeholder="Filter by title..."
              value={inputTitle}
              onChange={handleTitleChange}
            />
          </div>
          <div className="search__location flex container">
            <img src={iconLocation} alt="" />
            <input
              type="text"
              className="input1"
              placeholder="Filter by location..."
              value={inputLocation}
              onChange={handleLocationChange}
            />
          </div>
          <div className="search__filter flex">
            <div className="filter-input flex">
              <input
                type="checkbox"
                name=""
                id="fulltime"
                checked={isChecked}
                onChange={handleContractChange}
              />
              <label htmlFor="fulltime">Full Time</label>
            </div>
            <button className="btn btn1">Search</button>
          </div>
        </div>
      </div>
      <div className="search-mobile container">
        <div className="search__location flex container">
          <img src={iconLocation} alt="" />
          <input
            type="text"
            className="input1"
            placeholder="Filter by location..."
            value={inputLocation}
            onChange={handleLocationChange}
          />
        </div>
        <div className="filter-input flex">
          <input
            type="checkbox"
            name=""
            id="fulltime"
            checked={isChecked}
            onChange={handleContractChange}
          />
          <label htmlFor="fulltime">Full Time Only</label>
        </div>
        <button className="btn btn1 bold" onClick={handleFilter}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
