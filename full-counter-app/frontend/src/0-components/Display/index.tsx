interface DisplayProps {
  count: number;
}

function Display(props: DisplayProps) {
  return (
    <h1>
      Count: {props.count}
    </h1>
  );
}

export default Display;