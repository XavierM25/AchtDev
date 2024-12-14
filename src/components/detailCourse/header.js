document.addEventListener("DOMContentLoaded", function () {
    // Scrolling Tabs
    const dynamicButton = document.querySelector("#scrolling-button-dynamic");
    const leftBtn = document.querySelector("#scrolling-button-left");
    const content = document.querySelector(".scrolling-tabs");
    let isButtonFixed = false;
  
    dynamicButton.addEventListener("click", () => {
      content.scrollLeft += 200;
  
      if (!isButtonFixed) {
        dynamicButton.classList.add("fixed");
        isButtonFixed = true;
      }
    });
  
    leftBtn.addEventListener("click", () => {
      content.scrollLeft -= 800;
    });
  
    content.addEventListener("scroll", () => {
      if (content.scrollLeft === 0 && isButtonFixed) {
        dynamicButton.classList.remove("fixed");
        isButtonFixed = false;
      }
    });
  
    // Animar los tabs
    const radios = document.querySelectorAll('input[name="radio"]');
    const tabs = document.querySelectorAll(".scrolling-tab, .scrolling-tab-active");
  
    function changeActiveTab() {
      tabs.forEach((tab) => {
        tab.classList.remove("scrolling-tab-active");
        tab.classList.add("scrolling-tab");
      });
  
      const selectedRadio = document.querySelector('input[name="radio"]:checked');
      const activeTab = document.querySelector(`label[for="${selectedRadio.id}"]`);
  
      activeTab.classList.remove("scrolling-tab");
      activeTab.classList.add("scrolling-tab-active");
    }
  
    radios.forEach((radio) => {
      radio.addEventListener("change", changeActiveTab);
    });
  
    changeActiveTab();
  
    // Toggle menú desplegable
    const arrowBtn = document.getElementById("arrow-btn");
    const subMenu = document.getElementById("subMenu");
  
    arrowBtn.addEventListener("click", () => {
      subMenu.classList.toggle("open-menu");
    });
  });
  
  // Check answers
  function checkAnswers() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const feedback1 = document.getElementById("feedback1");
    if (q1) {
      if (q1.value === "correct") {
        feedback1.textContent = "¡Excelente! JavaScript es un lenguaje de programación.";
        feedback1.classList.add("correct");
      } else {
        feedback1.textContent = "Creo que esa no es la respuesta, puedes revisar la clase de nuevo.";
        feedback1.classList.add("incorrect");
      }
      feedback1.style.display = "block";
    }
  
    const q2 = document.querySelector('input[name="q2"]:checked');
    const feedback2 = document.getElementById("feedback2");
    if (q2) {
      if (q2.value === "correct") {
        feedback2.textContent = "¡Excelente! La sintaxis correcta es `function myFunction()`.";
        feedback2.classList.add("correct");
      } else {
        feedback2.textContent = "Parece que esa no es la respuesta correcta. ¡Revisa la clase!";
        feedback2.classList.add("incorrect");
      }
      feedback2.style.display = "block";
    }
  }
  
  // Toolbar de notebook
  function formatText(command, value = null) {
    document.execCommand(command, false, value);
  }
  