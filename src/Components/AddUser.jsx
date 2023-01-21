import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Modal from "./UI/Modal";

const AddUser = (props) => {
  const [formField, setFormField] = useState({
    name: "",
    age: "",
  });
  const [errorMessage, setErrorMsg] = useState();

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      formField.name.trim().length === 0 ||
      formField.age.trim().length === 0
    ) {
      setErrorMsg({
        errorTitle: "Field is Empty",
        errorMsg: "Enter correct details here",
      });
      return;
    }
    if (+formField.age < 1) {
      setErrorMsg({
        errorTitle: "Enter vaild age",
        errorMsg: `age is not vaild ${formField.age}`,
      });
      return;
    }
    props.onCaptureData(formField);
  };
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {errorMessage && (
        <Modal errorMessage={errorMessage} setErrorMsg={setErrorMsg} />
      )}

      <form
        className={`form text-center bg-yellow-500 p-4 m-2 rounded`}
        onSubmit={submitFormHandler}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="border-2 border-slate-900 rounded me-2"
          onChange={(e) => formChangeHandler(e)}
        />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          name="age"
          className="border-2 border-slate-900 rounded"
          onChange={(e) => formChangeHandler(e)}
        />
        <br />
        <button className="border-2 border-slate-900 rounded m-2" type="submit">
          Add User
        </button>
      </form>
    </>
  );
};

export default AddUser;
