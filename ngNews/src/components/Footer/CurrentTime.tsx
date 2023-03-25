import React from "react";

interface Props {
  currentTime: Date;
}

const CurrentTime: React.FC<Props> = ({ currentTime }) => {
  return (
    <li>
      <p>Current time: {currentTime.toLocaleTimeString()}</p>
    </li>
  );
};

export default CurrentTime;
