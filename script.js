let hamburger = document.querySelector('#bars');
let cancelX = document.querySelector('#cancel');
let menuList = document.querySelector('#menuList');

console.log('Elements:', hamburger, cancelX, menuList);


hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active");
    hamburger.classList.toggle("hidden"); // Add a class to hide the hamburger
    cancelX.classList.toggle("show"); // Add a class to show the X icon
  });
  
  cancelX.addEventListener("click", () => {
    menuList.classList.remove("active");
    hamburger.classList.remove("hidden"); // Remove the class to show the hamburger
    cancelX.classList.remove("show"); // Remove the class to hide the X icon
  });
  