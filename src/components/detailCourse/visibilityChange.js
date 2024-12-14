const originalTitle = document.title;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "¡No te vayas! 😢";
  } else {
    document.title = originalTitle;
  }
});
