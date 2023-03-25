import React from "react";

const FooterText: React.FC = () => {
  return (
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a
        href="https://www.linkedin.com/in/marek-urbaniec-5ba12a200/"
        className="hover:underline"
      >
        NgNews by Marek Urbaniec
      </a>
      . All Rights Reserved.
    </span>
  );
};

export default FooterText;
