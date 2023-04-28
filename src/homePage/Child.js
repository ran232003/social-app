import React from "react";

const Child = (props) => {
  const { index, item } = props;
  const handleclick = () => {
    props.handleclick(index);
  };
  return <li onClick={handleclick}>{item}</li>;
};

export default Child;
