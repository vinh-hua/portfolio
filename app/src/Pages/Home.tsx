import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div>
        <h1>hi, i'm vivian!</h1>
        <p>frontend software engineer</p>
        <p>
          blah blah blah, you can learn more about my hobbies and background{" "}
          <Link to="/about">here</Link>
        </p>
        <p>
          blah blah blah, you can learn more about my work experience{" "}
          <Link to="/portfolio">here</Link>
        </p>
        <h2>contact me</h2>
        <p>links</p>
      </div>
    </>
  );
}
