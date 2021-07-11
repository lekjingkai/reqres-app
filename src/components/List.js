import React from "react";
import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "../styles/List.css";
import ResourceCards from "./ResourceCards";

const List = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(true);

  const fetchData = async (list, pageNo, userResource) => {
    try {
      const response = await fetch(`https://reqres.in/api/${list}?page=${pageNo}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setMaxPage(data.total_pages);
      setCurrentPage(data.page);
      setData(data.data);
      setUser(userResource);
    } catch (err) {
      alert(err);
    }
  };

  const fetchSingleData = async (type, id) => {
    try {
      const response = await fetch(`https://reqres.in/api/${type}/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (err) {
      alert(err);
    }
  };

  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (user === true) {
      fetchData("users", currentPage, user);
    } else {
      fetchData("unknown", currentPage, user);
    }
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    //onload the initial fetchData
    fetchData("users", "1", true, "");
  }, []);

  function delay() {
    setData([]);
    setTimeout(() => {
      fetchData("users", "1", true);
    }, 3000);
  }

  return (
    <div>
      <h1>View List of Users/Resources</h1>

      <div>
        <button className="list-btn" onClick={() => fetchData("users", "1", true)}>
          View Users List
        </button>
        <button className="list-btn" onClick={() => fetchData("unknown", "1", false)}>
          View Resources List
        </button>
      </div>
      <div>
        <button className="list-btn" onClick={() => fetchSingleData("users", "23")}>
          Test Single User Not Found
        </button>
        <button className="list-btn" onClick={() => fetchSingleData("users", "23")}>
          Test Single Resource Not Found
        </button>
        <button className="list-btn" onClick={delay}>
          Test Delayed Response
        </button>
      </div>
      {/* <p>{data}</p> */}
      {data && data.length > 0 ? (
        user ? (
          <div className="list-container">
            <div className="data-container">
              {data.map((item) => (
                <ProfileCard
                  key={item.id}
                  id={item.id}
                  email={item.email}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  avatar={item.avatar}
                  onclick={() => fetchSingleData("user", item.id)}
                />
              ))}
            </div>
            <div>
              <button className="list-btn" onClick={prevPage}>
                Prev Page
              </button>
              Page {currentPage} of {maxPage}
              <button className="list-btn" onClick={nextPage}>
                Next Page
              </button>
            </div>
          </div>
        ) : (
          <div className="list-container">
            <div className="data-container">
              {data.map((item) => (
                <ResourceCards
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  year={item.year}
                  color={item.color}
                  pantone_value={item.pantone_value}
                  onclick={() => fetchSingleData("unknown", item.id)}
                />
              ))}
            </div>
            <div>
              <button className="list-btn" onClick={prevPage}>
                Prev Page
              </button>
              Page {currentPage} of {maxPage}
              <button className="list-btn" onClick={nextPage}>
                Next Page
              </button>
            </div>
          </div>
        )
      ) : (
        <p>No data to show!</p>
      )}
    </div>
  );
};

export default List;
