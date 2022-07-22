import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { API } from "../api/api";

import Form from "./Form";

const AddMark = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    image: "",
    tamil: "",
    eng: "",
    sci: "",
    soc: "",
    math: "",
  });
  const navigate = useNavigate();
  const onAdd = (newStudent) => {
    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/"));
  };
  return (
    <div>
      <Form type={"Add"} studentDetails={studentDetails} onSubmit={onAdd} />
    </div>
  );
};

export default AddMark;