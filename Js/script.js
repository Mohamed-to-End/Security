AOS.init({
    duration: 3000,
    once: true,
  });
  let y = window.scrollY
  let buttonup = document.getElementsByClassName("buttonup")[0];
  window.addEventListener("scroll",() =>{
    if (window.scrollY > 0) {
      buttonup.style.display = "block";
    } else {
      buttonup.style.display = "none";
    }
    y = window.scrollY
  })
  buttonup.addEventListener("click",() => {
    window.scrollTo(0,0)
  })