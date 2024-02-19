function showMessageBox() {
  let div1 = document.getElementById("message");
  let div2 = document.getElementById("contact-button-inner");
  if (window.getComputedStyle(div1).display === "none") {
    div1.style.display = "block";
    div2.innerHTML = "Send Massage";
  } else {
    div1.style.display = "none";
    div2.innerHTML = "Write Massage";
  }
}

function showNavbar() {
  let div1 = document.getElementById("showMobilemenu");
  let iconElement = document.getElementById("icon1");
  if (window.getComputedStyle(div1).display === "none") {
    div1.style.display = "block";
    iconElement.classList.toggle('fa-xmark');
    iconElement.classList.toggle('fa-list-ul');
   
  } else {
    div1.style.display = "none";
    iconElement.classList.toggle('fa-xmark');
    iconElement.classList.toggle('fa-list-ul');
  }
}
