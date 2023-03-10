class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <div class="navbar">
        <div class="logo">
        <a>Azakkızı</a>
    </div>
    <div class="menu">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="certificates.html">Certificates</a></li>
            <li><a href="connects.html">Connects</a></li>
        </ul>
    </div>
    <div class="contact-info">
       <ul>
           <li><a class="phone-no">+90 (538) 240 74 00 </a></li>
           <li><a class="sep"> / </a></li>
           <li><a class="email">betus.azak.95@gmail.com </a></li>
       </ul>
       
   </div>
   </div>
   `
    }
}
customElements.define('my-navbar', MyNavbar)