import './index.css';

function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo">Covid-19 Health Advice</div>
      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">
          &#9776;
        </label>
        <div class="menu">
          <li class="services">
            <a href="/">Wash Your Hands</a>
          </li>
          <li>
            <a href="/vaccine">Vaccine</a>
          </li>
          <li>
            <a href="/stats">Statistics</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
