import './Row.css';

interface DrawerProps {
  children: React.ReactNode
}

function Drawer(props: DrawerProps) {
  return (
    <div className="row">
      {props.children}
    </div>
  );
}

export default Drawer;