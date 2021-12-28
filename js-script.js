//faq-accordion-card expands on click

function descNavbarClick() {
  let buttonClickOnNavBar = document.getElementsByClassName("desc-navbar-button");
  let dnbColor = "black";
  let dnbFw = 800;
  for (let i = 0; i < buttonClickOnNavBar.length; i++) {
    buttonClickOnNavBar[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.removeAttribute("style");
      } else {
        content.style.display = "block";
        this.style.color = dnbColor;
        this.style.fontWeight = dnbFw;
      }    
    });
  }
}

descNavbarClick();
