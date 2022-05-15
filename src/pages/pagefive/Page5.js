import React from "react";

const Page5 = () => {
  return (
    <div
      className="full"
      style={{ width: "100%", height: "100vh", padding: "1rem" }}
    >
      <iframe
        style={{ width: "100%", height: "100%" }}
        width="100%"
        height="720"
        src="https://www.youtube.com/embed/0G6RqQSDnUA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Page5;
