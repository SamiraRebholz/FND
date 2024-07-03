class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <ul>
            <li><a href="./index.html"><img src="./Assets/icons/home.svg" alt="home" class="noOverlay"></a></li>
            <li><a><img src="./Assets/icons/menu.svg" alt="menu" class="noOverlay hidden menu"></a></li>
            <li><a href="./symptoms.html">Diagnostik & Symptome</a></li>
            <li><a href="">Pathophysiologie</a></li>
            <li><a href="">Epidemiologie</a></li>
            <li><a href="">Behandlung</a></li>
            <li><a href="./sources.html">Quellen</a></li>
            <li><img src="./Assets/icons/settings.svg" class="noOverlay"></li>
          </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('my-navbar', MyNavbar);

  /*wenn der nutzer 5% der seite gescrollt hat, soll die navbar die klasse .scrolled bekommen*/
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav>ul").classList.add("scrolled");
    } else {
      document.querySelector("nav>ul").classList.remove("scrolled");
    }
  }
  window.onscroll = function() {scrollFunction()};

  document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu');
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal navModal" style="display:none;">
      <ul>
        <li><a><img src="./Assets/icons/closeWhite.svg" alt="close" class="noOverlay close"></a></li>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./symptoms.html">Diagnostik & Symptome</a></li>
        <li><a href="">Pathophysiologie</a></li>
        <li><a href="">Epidemiologie</a></li>
        <li><a href="">Behandlung</a></li>
        <li><a href="./sources.html">Quellen</a></li>
      </ul>
    </div>
  `;
  document.body.appendChild(modal);
  const modalDisplay = modal.querySelector('.modal');
  const closeIcon = modal.querySelector('.close');

  menuIcon.addEventListener('click', () => {
    modalDisplay.style.display = 'block';
  });
  closeIcon.addEventListener('click', () => {
    modalDisplay.style.display = 'none';
  });

  modalDisplay.addEventListener('click', (e) => {
    if (e.target === modalDisplay) {
      modalDisplay.style.display = 'none';
    }
  });
});