import React from "react";

//want to use it from another file
import MyTitle from "./MyTitle";

const MyFirstComponent = () => {
  return (
    <div>
      <MyTitle title="Lie to Me" color="rebeccapurple" description="ooooo" />
      <MyTitle title="Breaking Bad" color="red" description="ooooo" />
      <MyTitle title="MacGuyer" color="mediuaqumarine" description="ooooo" />
    </div>
  );
};

//gotta export this guy too!!!
export default MyFirstComponent;
