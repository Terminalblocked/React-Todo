import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1>SM TODO</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Trash</a>
        </li>
      </ul>
      <div className="log-in-out">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </header>
  );
}

export default Header;
