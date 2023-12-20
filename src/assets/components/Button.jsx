import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button value={name} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
