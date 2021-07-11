import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetchData();
  }

  const fetchData = async () => {
    const loginDetails = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginDetails),
      });

      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="loginContainer">
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Button className="btn" variant="primary" type="submit">
          Submit
        </Button>
        <Link to="/Login" className="btn btn-secondary">
          Login
        </Link>
      </Form>
      <p>
        Data to copy: <br />
        eve.holt@reqres.in <br />
        pistol
      </p>
    </div>
  );
};

export default Register;
