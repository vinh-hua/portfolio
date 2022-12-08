import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div>
        <h1>Hi, I'm Vinh!</h1>
        <p>
          I enjoy working closely with people and working towards a better
          world.
        </p>
        <p>
          I have worked as a UX Engineer at Microsoft, I was an undergrad
          researcher for the UW Information School, and have worked on several
          frontend & client-side projects.
        </p>
        <p>
          Currently, I am working as a barista at a local bakery and spending my
          remaining free time volunteering & organizing in the community.
        </p>
        <p>
          I am looking to return to frontend development for work! You can learn
          more about my work and project experiences{" "}
          <Link to="/portfolio/work">here</Link>.
        </p>
        <p>
          {" "}
          If you want to get to know what I've been up to recently, you can
          visit the about page <Link to="/portfolio/about">here</Link>.
        </p>
      </div>
    </>
  );
}
