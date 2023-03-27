import React from "react";

interface Props {
  currentTime: Date;
}

const CurrentTime: React.FC<Props> = ({ currentTime }) => {
  return (
    <li>
      <p className="text-center">{currentTime.toLocaleTimeString()}</p>
    </li>
  );
};

export default CurrentTime;
