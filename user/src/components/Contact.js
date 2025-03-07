import React, { useState } from "react";
import { addtechnicalissue } from "../API/service";

import { toast } from "react-toastify";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const [issue, setIssue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (event, field) => {
    setIssue({ ...issue, [field]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    addtechnicalissue(issue)
      .then((msg) => {
        toast.success("Issue Reported Successfully");

        setFormStatus("send");
        setIssue({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mt-5" style={{ width: "50%", color: "white" }}>
      <h2 className="mb-3">Technical Issue Page</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            autoComplete="off"
            onChange={(e) => {
              onChangeHandler(e, "name");
            }}
            value={issue.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            autoComplete="off"
            onChange={(e) => {
              onChangeHandler(e, "email");
            }}
            value={issue.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            required
            placeholder="write your issue here"
            rows={8}
            onChange={(e) => {
              onChangeHandler(e, "message");
            }}
            value={issue.message}
          />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default Contact;
