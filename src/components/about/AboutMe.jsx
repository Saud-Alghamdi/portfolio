import React from "react";

export default function About() {
  return (
    <section
      className="py-5 sm:py-10 mt-5 sm:mt-10 "
      id="about-me"
    >
      <div className="text-center">
        <h3 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light ">About Me:</h3>
        <p
          className="r mt-10 text-md md:text-xl"
          style={{ lineHeight: "2.5" }}
        >
          I'm a Full Stack Web Developer, with profiency in:
          <br />
          React, TypeScript, Node.js/Express, PHP/Laravel, and various databases.
          <br />
          I'm a fast learner and can learn and adapt to any technology required.
        </p>
      </div>
    </section>
  );
}
