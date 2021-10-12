import React, { useState } from "react";
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const items = { firstname, lastname, phoneno, password };
    console.warn(items);
    try {
      let result = await fetch(
        "https://deempay.jianjang.com/merchant/user/register",
        {
          method: "POST",
          body: JSON.stringify(items),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      result = await result.json();
      console.warn("result", result);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className="container-fluid signup-background">
      <div class="row">
        <div class="col-md-6">
          <div>
            <img src="images/icon48.png" alt="logo" className="logo" />
            <span className="signupDeempay">DeemPay</span>
          </div>
          <br />
          <span className="setAccount">Set up your account.</span>
          <div className="noTime">Get up & running in no time</div>
        </div>

        <div class="col-md-6 col-down">
          <div className="card">
            <form
              class="g-3 needs-validation "
              novalidate
              className="signupCard"
            >
              <div className="form-group">
                <label for="validationCustom04" class="form-label">
                  Country
                </label>
                <select
                  className="form-select in-input"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled placeholder="">
                    select country
                  </option>
                  <option>Nigeria</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
              </div>
              <br />

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="form-control in-input"
                  placeholder="full name"
                  required
                />
              </div>

              <br />

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="form-control in-input"
                  placeholder="last name"
                  required
                />
              </div>

              <br />

              <div className="form-group">
                <label for="validationCustom03" class="form-label">
                  Phone
                </label>
                <input
                  type="phone"
                  value={phoneno}
                  onChange={(e) => setPhoneno(e.target.value)}
                  className="form-control in-input"
                  placeholder="Email"
                  required
                />
              </div>
              <br />

              <div className="form-group">
                <label for="validationCustom02" class="form-label label-input">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control in-input"
                  id="validationCustom02"
                  placeholder="password"
                  required
                />
              </div>

              <br />

              <div className="col-15">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>

              <br />

              <Link to="/OnBoarding">
                <div className="form-group">
                  <button
                    onClick={signUp}
                    className="btn btn-primary in-input"
                    type="submit"
                  >
                    Create account
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;


