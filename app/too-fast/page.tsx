import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Whoa, Slow Down There
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Slow down, speedster! We’ve detected unusually high activity from your
        IP. To keep things running smoothly, we’ve temporarily limited access.
        🍵Take a short break and try again in a few minutes.
      </p>
    </main>
  );
};

export default Page;
