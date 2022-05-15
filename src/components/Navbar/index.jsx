import './index.css';

function Navbar() {
  return (
    <nav class="navbar">
      <div className="navbar-logo">
        <img src="/images/Logo.png" alt="" srcset="" className="logo-nav" />
        <div class="logo">Covid-19 Health Advice</div>
      </div>
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
