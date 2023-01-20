import React from "react";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [formField, setFormField] = React.useState();
  const submitFormHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formField);
  return (
    <form className="form text-center" onSubmit={submitFormHandler}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        className="border-2 border-slate-900 rounded me-2"
        onChange={(e) => submitFormHandler(e)}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="text"
        name="age"
        className="border-2 border-slate-900 rounded"
        onChange={(e) => submitFormHandler(e)}
      />
      <br />
      <button className="border-2 border-slate-900 rounded m-2" type="submit">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
