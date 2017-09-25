import React from "react";

/*
Gonna need to pass it some values
Maybe 'props' with title and color as values? maybe?
*/
const MyTitle = props => {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

//remember to export it
export default MyTitle;
