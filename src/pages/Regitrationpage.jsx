import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Endpoint from "../components/api/Endpoint";

function Regitrationpage() {
  const [requestResponse, setresponse] = useState({
    textmessage: "",
    alertclass: "",
  });

  const initialValues = {
    firstname: "",
    email: "",
    mobile: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post(Endpoint.REGISTER_URL, values)
      .then(
        (response) => {
          setresponse({
            textmessage: response.data.message,
            alertclass: "alert alert-success",
          });
        },
        (error) => {
          setresponse({
            textmessage: error.response.data.message,
            alertclass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name is required"),
    email: Yup.string().required("email name is required").email(),
    mobile: Yup.string().required("mobile name is required"),
    password: Yup.string()
      .required("password name is required")
      .min(6, "password must 6 digit long"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
          <div class={requestResponse.alertclass} role="alert">
           {requestResponse.textmessage}
          </div>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <small className="text-danger">
                    {formik.errors.firstname}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input
                  name="mobile"
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className="text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                disabled={!formik.isValid}
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              Already Register ? <Link to="/login">Click here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Regitrationpage;
