function descNavbarClick() {
  let buttonClick = document.getElementsByClassName("desc-navbar-button");
  
  for (let i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }    
    });
  }
}

descNavbarClick();



/*You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.

  No more than 2GB. All files in your account must fit your allotted storage space.

  Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.

  Yes! Send us a message and we’ll process your request no questions asked.

  Chat and email support is available 24/7. Phone lines are open during normal business hours.*/