import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../lottie/groovyWalk.json";

const App = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;