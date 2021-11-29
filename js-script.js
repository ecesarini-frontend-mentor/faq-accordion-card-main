function descNavbarClick() {
  let buttonClickOnNavBar = document.getElementsByClassName("desc-navbar-button");
  
  for (let i = 0; i < buttonClickOnNavBar.length; i++) {
    buttonClickOnNavBar[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
        // content.firstChild
      }    
    });
  }
}

descNavbarClick();