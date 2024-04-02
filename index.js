  function validateForm(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "" || password == ""){
    alert("Email/Password must be filled out");
  }
  console.log(email,password);
}


var hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile')
hamburger.addEventListener('click', () => {
  if(mobileMenu.style.display == 'block'){
    mobileMenu.style.display = 'none'
  
  }else {
    mobileMenu.style.display = 'block'
  }
  
});

var acc = document.getElementsByClassName("question__heading");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click" , () => {
        faq.classList.toggle("active");
    });
});

