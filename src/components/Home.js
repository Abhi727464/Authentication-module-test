import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { StateContext } from "../Context/AuthProvider";

const Home = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(StateContext);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [redAlert, setRedAlert] = useState(false);
  const [greenAlert, setGreenAlert] = useState(false);

  const navigate = useNavigate();

  const checkName = (e) => {
    setName(e.target.value);
    if (name.length === 0) {
      setValidName(false);
    } 
    else {
      setValidName(true);
    }
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (email.length ===0) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    if (password.length===0) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  const checkConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (confirmPassword.length===0) {
      setValidConfirmPassword(false);
    } else {
      setValidConfirmPassword(true);
    }
  };

  const onSubmit = () => {
    if (!validName || !validEmail || validPassword !== validConfirmPassword) {
      console.log("Invalid");
      setRedAlert(true);
      setGreenAlert(false);
      if (!validName) {
        // alert("Enter valid name");
      } else if (!validEmail) {
        // alert("Enter valid email");
      } else if (password !== confirmPassword) {
        alert("Password did not matched");
      }
    } else {
      setRedAlert(false);
      setGreenAlert(true);
      window.localStorage.setItem("localName", name);
      window.localStorage.setItem("localEmail", email);
      window.localStorage.setItem("localPassword", password);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/profile");
      }, 500);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("localName")) {
      setTimeout(() => {
        navigate("/profile");
      }, 500);
    }
  }, []);

  return (
    <>
    <div className="h-full w-[90%] ml-20 flex justify-between">
      <div className="mt-10 basis-1/3">
        <h1 className="text-5xl text-center font-black">Sign Up</h1>
        <div className="mt-5 bg-white shadow-2xl rounded px-8 pt-6 pb-8">
          <div className="mt-1">
            <input
              placeholder="Full Name"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
              value={name}
              onChange={checkName}
            />
          </div>

          <div className=" border border-transparent border-b-white mt-1">
            <input
              placeholder="Email"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              value={email}
              onChange={checkEmail}
            />
          </div>

          <div className=" border border-transparent border-b-white mt-1">
            <input
              placeholder="Password"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              value={password}
              onChange={checkPassword}
            />
          </div>

          <div className=" border border-transparent border-b-white mt-1">
            <input
              placeholder="Confirm Password"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
              value={confirmPassword}
              onChange={checkConfirmPassword}
            />
          </div>

          <div className="py-5">
            <h2 className={`text-red-800 ${!redAlert ? "hidden" : "flex"}`}>
              Error: All the fields are mandatory
            </h2>
            <h2
              className={`text-green-700  ${!greenAlert ? "hidden" : "flex"}`}
            >
              Successfully Signed Up!
            </h2>
          </div>

          <button
            onClick={onSubmit}
            className="shadow bg-purple-500 text-white w-28 rounded-sm p-2"
          >
            Signup
          </button>
        </div>
      </div>
      <div className=" basis-1/2 mt-20 ml-10">
        <img src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?w=900&t=st=1669919131~exp=1669919731~hmac=f8de26fb4fcf0ca2ad1b6e2cb0bca021aace95780edee73cb322ef9cc7352a34" alt="" />
    </div>
    </div>
    
    </>
  );
};

export default Home;
