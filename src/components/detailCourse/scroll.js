window.onscroll = function () {
    const header = document.querySelector(".header");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };