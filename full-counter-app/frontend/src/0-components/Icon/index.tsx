import './Icon.css';

interface IconProps {
  children: React.ReactNode
}

function Icon(props: IconProps) {
  return (
    <span className="material-icons">
      {props.children}
    </span>
  );
}

export default Icon;