import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  handleClick: any;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default Button;