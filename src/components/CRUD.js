import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Login.css";
import { useState } from "react";

const CRUD = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetchData();
  }

  const fetchData = async (method, userID) => {
    const details = {
      name: name,
      job: job,
    };

    try {
      const response = await fetch(`https://reqres.in/api/users${userID}`, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (err) {
      alert(err);
    }
  };

  const deleteData = async (method, userID) => {
    try {
      await fetch(`https://reqres.in/api/users${userID}`, {
        method: method,
      })
        .then((response) => response.text())
        .then((data) => alert("Delete Success" + data));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="loginContainer">
      <Form onSubmit={handleSubmit}>
        <h1>Create/Update/Delete</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Job</Form.Label>
          <Form.Control type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} required />
        </Form.Group>

        <Button className="btn" variant="primary" type="button" onClick={() => fetchData("POST", "")}>
          Create
        </Button>

        <Button className="btn" variant="primary" type="button" onClick={() => fetchData("PUT", "/2")}>
          Update - PUT
        </Button>

        <Button className="btn" variant="primary" type="button" onClick={() => fetchData("PATCH", "/2")}>
          Update - PATCH
        </Button>

        <Button className="btn" variant="primary" type="button" onClick={() => deleteData("DELETE", "/2")}>
          Delete
        </Button>
      </Form>
      <p>
        Data to copy: <br />
        morpheus <br />
        leader / zion resident
      </p>
    </div>
  );
};

export default CRUD;
