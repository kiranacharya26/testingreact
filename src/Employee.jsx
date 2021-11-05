import React from "react";

const Employee = ({ fname, Lname, age }) => {
  return (
    <div>
      <h1>
        My name is {fname} {Lname} and iam {age}
      </h1>
    </div>
  );
};

export default Employee;
