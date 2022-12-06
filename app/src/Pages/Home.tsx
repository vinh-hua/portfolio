import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div>
        <h1>Hi, I am Vinh!</h1>
        <p>
          I am a frontend developer! You can learn more about my work and
          project experiences <Link to="/portfolio/work">here</Link>.
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
