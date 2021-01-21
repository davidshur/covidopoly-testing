import './Display.css';

interface DisplayProps {
  count: number;
}

function Display(props: DisplayProps) {
  return (
    <h1>
      COUNT: {props.count}
    </h1>
  );
}

export default Display;