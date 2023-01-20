import { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

function App() {
  const [userList, SetUserList] = useState([]);
  const saveUserDataHandler = (userData) => {
    SetUserList((prev) => [...prev, userData]);
  };

  return (
    <>
      <AddUser onCaptureData={saveUserDataHandler} />
      <UserList list={userList} />
    </>
  );
}

export default App;
