import React from "react";
import "../styles/Home.css";
import MainCard from "./MainCard";
import MethodCard from "./MethodCard";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1>Reqres Home</h1>
        <h2>What would you like to do?</h2>
      </div>
      <div className="main-content">
        <MainCard link="/list" title="View List Of Users/Resources">
          <MethodCard method="GET" description="LIST USERS" />
          <MethodCard method="GET" description="LIST <RESOURCE>" />
          <MethodCard method="GET" description="SINGLE USER" />
          <MethodCard method="GET" description="SINGLE USER NOT FOUND" />
          <MethodCard method="GET" description="SINGLE <RESOURCE>" />
          <MethodCard method="GET" description="SINGLE <RESOURCE> NOT FOUND" />
          <MethodCard method="GET" description="DELAYED RESPONSE" />
        </MainCard>
        <MainCard link="/crud" title="Create/Update/Delete">
          <MethodCard method="POST" description="CREATE" />
          <MethodCard method="PUT" description="UPDATE" />
          <MethodCard method="PATCH" description="UPDATE" />
          <MethodCard method="DELETE" description="DELETE" />
        </MainCard>
        <MainCard link="/login" title="Login">
          <MethodCard method="POST" description="LOGIN - SUCCESSFUL" />
          <MethodCard method="POST" description="LOGIN - UNSUCCESSFUL" />
        </MainCard>
        <MainCard link="/register" title="Register">
          <MethodCard method="POST" description="REGISTER - SUCCESSFUL" />
          <MethodCard method="POST" description="REGISTER - UNSUCCESSFUL" />
        </MainCard>
      </div>
    </div>
  );
};

export default Home;
