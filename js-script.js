function descNavbarClick() {
  let buttonClickOnNavBar = document.getElementsByClassName("desc-navbar-button");
  for (let i = 0; i < buttonClickOnNavBar.length; i++) {
    buttonClickOnNavBar[i].addEventListener("click", function() {
    isClicked[i] = true;
      if (isClicked[i] ) {
        this.style.color = "black";
        this.style.fontWeight = 800;
      }
      isClicked[i] = false;
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }    
    //return isClicked;
    });
  }
  return isClicked;
}

descNavbarClick(clicked, clickOnNavBar);