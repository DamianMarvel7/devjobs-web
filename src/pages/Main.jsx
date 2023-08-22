import React from "react";
import Search from "../components/Search";
import JobHeaderList from "../components/JobHeaderList";

const Main = () => {
  return (
    <div className="main container">
      <Search />
      <JobHeaderList />
    </div>
  );
};

export default Main;
