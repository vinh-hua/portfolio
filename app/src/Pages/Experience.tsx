import { Showcase } from "../Components/Showcase";

export function Experience() {
  return (
    <>
      <h1>Experience</h1>
      <Showcase
        title={"Software Engineer"}
        location={"Microsoft"}
        description={"blah blah blah"}
      />
      <Showcase
        title={"Software Engineer Intern"}
        location={"Microsoft"}
        description={"blah blah blah"}
      />
      <Showcase
        title={"Undergrad Research Assistant"}
        location={"UW Information School"}
        description={"blah blah blah"}
      />
      <h1>Projects</h1>
      <Showcase
        title={"Frontend Developer"}
        location={"CivicQA"}
        description={"blah blah blah"}
      />
    </>
  );
}
