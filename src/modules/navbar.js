const navbar = document.querySelector('.navbar');

const displayNavbar = () => {
  navbar.innerHTML += `
    <li><a href="#"><div class="logo-circle">SciFi Logo</div></a></li>
    <li class='showItem'><a href="#" class='navItem'></a></li>
    <li><a href="#">People</a></li>
    <li><a href="#">Network</a></li>
  `;
};

export default displayNavbar;