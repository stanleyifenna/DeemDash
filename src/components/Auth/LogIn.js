import React from "react";
import "./LogIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

function LogIn() {
  let history = useHistory();

  return (
    <div className="login-background">
      <form class="row g-3 needs-validation" novalidate className="login-Card">
        <div class="col-md-10">
          <label for="validationCustom02" class="form-label"></label>
          <input
            type="email"
            class="form-control email-input in-input"
            id="validationCustom02"
            placeholder="Email"
            required
          />
        </div>

        <div class="col-md-10">
          <label for="validationCustom02" class="form-label"></label>
          <input
            type="password"
            class="form-control in-input"
            id="validationCustom02"
            placeholder="password"
            required
          />
        </div>

        <br />

        <div class="col-12">
          <button
            onClick={() => {
              history.push("/");
            }}
            class="btn btn-primary"
            type="login"
          >
            login
          </button>
        </div>

        <br />

        <div class="col-15">forgot password?</div>

        <br />

        <div class="col-15">
          New user?
          <Link to="/SignUp">
            <span className="create-account">Create account</span>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
