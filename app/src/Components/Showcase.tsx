export type ShowcaseProps = {
  title: string;
  location: string;
  description: string;
};

export function Showcase(props: ShowcaseProps) {
  return (
    <div className="showcase">
      <h1>{props.title}</h1>
      <h2>{props.location}</h2>
      <p>{props.description}</p>
    </div>
  );
}
