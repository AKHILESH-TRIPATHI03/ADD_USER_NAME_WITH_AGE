import React from "react";
import Card from "../U/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card cssclass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} yeras-old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
