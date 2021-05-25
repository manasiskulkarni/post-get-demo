import React from "react";
import DetailsCss from "./Details.module.css";

const details = (props) => {

  return Object.values(props.list).map((list, i) => {
    return (
      <div key={list + i} className={DetailsCss.Details}>
        <p>Name: {list.name} </p>
        <p>Phone No: {list.phno} </p>
        <p>Email: {list.email} </p>
        <p>Gender {list.gender} </p>
        <p>Age: {list.age} </p>
        <p>Password: {list.password} </p>
      </div>
    );
  });
};

export default details;
