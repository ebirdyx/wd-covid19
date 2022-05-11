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
            <ul class="dropdown">
              <li>
                <a href="/">Item 1 </a>
              </li>
              <li>
                <a href="/">Item 2</a>
              </li>
              <li>
                <a href="/">Item 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Vacine</a>
          </li>
          <li class="">
            <a href="/">Statistics</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
