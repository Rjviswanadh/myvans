import React, { Component } from "react";
import Cookies from "js-cookie";
//import { useNavigate } from "react-router-dom";
import Home from "../Home";

class LoginForm extends Component {
  state = {
    username: "",
    passowrd: "",
  };

  /*  sendJwt = (token) => {
    console.log(token);
    // const history = useNavigate();
    Cookies.set("Token", token, { expires: 30 });
  }; */

  sendErrorMsg = (m) => {
    console.log(m);
  };
  changeUsername = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
    });
  };
  changePassword = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  submitLoginForm = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const pageurl = "http://localhost:5001/login";
    const userDetails = { username, password };
    console.log(userDetails);
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const userRes = await fetch(pageurl, options);
    console.log(userRes);
    const userResult = await userRes.json();
    console.log(userResult);
    if (userRes.ok === true) {
      Cookies.set("Token", userResult.jwtToken, { expires: 30 });
      <Home />;
    } else {
      this.sendErrorMsg(userResult.errorMsg);
    }
  };
  /* const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  } */
  render() {
    return (
      <div>
        <div>
          <form
            onSubmit={this.submitLoginForm}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <div className="d-flex flex-column align-items-start">
              <label htmlFor="username">username</label>
              <input id="username" onChange={this.changeUsername} type="text" />
            </div>
            <div className="d-flex flex-column align-items-start">
              <label htmlFor="password">password</label>
              <input onChange={this.changePassword} id="password" type="text" />
            </div>
            <div>
              <button
                type="submit"
                className="m-3 btn btn-primary d-flex flex-column align-items-start"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;

/* const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const changeUsername = (e) => {
    e.preventDefault();
    setusername(e.target.value);
  };
  const changePassword = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  };

  const sendJwt = (token) => {
    console.log(token);
    Cookies.set("Token", token, { expires: 30 });

  };

  const sendErrorMsg = (m) => {
    console.log(m);
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const pageurl = "http://localhost:5001/login";
    const userDetails = { username, password };
    console.log(userDetails);
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const userRes = await fetch(pageurl, options);
    console.log(userRes);
    const userResult = await userRes.json();
    console.log(userResult);
    if (userRes.ok === true) {
      sendJwt(userResult.jwtToken);
    } else {
      sendErrorMsg(userResult.errorMsg);
    } 
  };
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        <form
          onSubmit={submitLoginForm}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="username">username</label>
            <input id="username" onChange={changeUsername} type="text" />
          </div>
          <div className="d-flex flex-column align-items-start">
            <label htmlFor="password">password</label>
            <input onChange={changePassword} id="password" type="text" />
          </div>
          <div>
            <button
              type="submit"
              className="m-3 btn btn-primary d-flex flex-column align-items-start"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm; */
