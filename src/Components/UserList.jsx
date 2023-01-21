import React from "react";
import AddUser from "./AddUser";
import classes from "./AddUser.module.css";

const UserList = ({ list }) => {
  return (
    <>
      {list.map((user, index) => (
        <div
          key={index}
          className={`${classes.card} text-center m-2 bg-blue-500`}
        >
          User name is {user.name}. User age is {user.age}
        </div>
      ))}
    </>
  );
};

export default UserList;
