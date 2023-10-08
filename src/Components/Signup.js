import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div
        style={{ background: "#27AE60" }}
        className="wrapper d-flex justify-content-center align-items-center  vh-100"
      >
        <div className="bg-white p-3 rounded w-25 shadow-lg">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              {/* <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              /> */}
              {/* <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Password
              </label> */}
            </div>
            <div className="d-flex flex-column justify-content-evenly">
              <div className="d-flex justify-content-evenly pb-3">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button type="submit" className="btn btn-primary">
                <a className="text-white text-decoration-none" href="">Login With Google</a>
                </button>
              </div>
              <button type="submit" className="btn btn-primary">
               <a className="text-white text-decoration-none" href="/Components/Login"> Already Have Account?</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;