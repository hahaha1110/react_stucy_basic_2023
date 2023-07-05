import "./Header.css";
const Header = ({ today }) => {
  return (
    <div className="Header">
      <h1>오늘은📆</h1>
      <h3>{today}</h3>
    </div>
  );
};

export default Header;
