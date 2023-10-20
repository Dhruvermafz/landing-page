import React, { useState } from "react";
import { Button, TextField, Link } from "@mui/material";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom"; // Assuming "withRouter" is your custom history hook
import "../css/Register.css";

const axios = require("axios");

const Register = () => {
  const history = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const register = () => {
    axios
      .post("http://localhost:4000/register", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        swal({
          text: res.data.title,
          icon: "success",
          type: "success",
        });
        history.push("/");
      })
      .catch((err) => {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error",
        });
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <div>
        <h2>Register</h2>
      </div>

      <div>
        <TextField
          id="standard-basic"
          type="text"
          autoComplete="off"
          name="username"
          value={state.username}
          onChange={onChange}
          placeholder="User Name"
          required
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          type="password"
          autoComplete="off"
          name="password"
          value={state.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          type="password"
          autoComplete="off"
          name="confirm_password"
          value={state.confirm_password}
          onChange={onChange}
          placeholder="Confirm Password"
          required
        />
        <br />
        <br />
        <Button
          className="button_style"
          variant="contained"
          color="primary"
          size="small"
          disabled={state.username === "" || state.password === ""}
          onClick={register}
        >
          Register
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          component="button"
          style={{ fontFamily: "inherit", fontSize: "inherit" }}
          onClick={() => {
            history.push("/");
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
