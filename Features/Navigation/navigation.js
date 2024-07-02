class MyNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <ul>
            <li><a href="./index.html"><img src="./Assets/icons/home.svg" alt="home" class="noOverlay"></a></li>
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