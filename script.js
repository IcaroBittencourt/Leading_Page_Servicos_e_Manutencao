// SCRIPT-DO-SLIDE-01

var radio = document.querySelector(".manual-btn");

var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 15000);

function proximaImg() {
  cont++;
  if (cont > 4) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}


// FIM-DO-SCRIPT-DO-SLIDE-01



// SCRIPT-DO-SLIDE-02

document.addEventListener("DOMContentLoaded", function () {
  
  const slider = document.querySelector('.slider-content');
  
 
  const prevBtn = slider.querySelector('.prev-btn-01');
  const nextBtn = slider.querySelector('.next-btn-01');

  
  const radioButtons = slider.querySelectorAll('input[name="btn-radio"]');
  const slideBoxes = slider.querySelectorAll('.slide-box');
  const totalSlides = slideBoxes.length;
  let currentIndex = 0;

  
  function updateSliderPosition() {
      
      slideBoxes.forEach((slide, index) => {
          slide.style.transform = `translateX(${(index - currentIndex) * 1}%)`;
      });
      
      
      radioButtons.forEach((radio, index) => {
          radio.checked = (index === currentIndex);
      });
  }

  
  function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSliderPosition();
  }

  
  function showPrevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSliderPosition();
  }

  
  setInterval(showNextSlide, 15000);

  
  nextBtn.addEventListener('click', showNextSlide);
  prevBtn.addEventListener('click', showPrevSlide);

  
  radioButtons.forEach((radio, index) => {
      radio.addEventListener('change', () => {
          if (radio.checked) {
              currentIndex = index;
              updateSliderPosition();
          }
      });
  });

  
  updateSliderPosition();
});



// FIM-DO-SCRIPT-DO-SLIDE-01








// SCRIPT-DO-btn-home

document.getElementById("btn-home").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.reload();
});

// FIM-DO-SCRIPT-DO-btn-home

/* SCRIPT-DO-btn-home-mobile

document
  .getElementById("btn-home-mobile")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
  });

 FIM-DO-SCRIPT-DO-btn-home-mobile
*/

//SCRIPT-DO-MENU-HAMBURGUER

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown-content"); 
const menuItems = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    setTimeout(() => {
      dropdown.style.display = 'none';
    }, 400);
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    
    const isDropdownButton = item.getAttribute("data-toggle") === "dropdown";
    
    if (!isDropdownButton) {
      navLinks.classList.remove("active"); 
      hamburger.classList.remove("active");

      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        setTimeout(() => {
          dropdown.style.display = 'none';
        }, 400); 
      }
    }
  });
});


dropdown.addEventListener('click', function() {
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    setTimeout(() => {
      dropdown.style.display = 'none';
    }, 400); 
  }
});

//FIM-DO-SCRIPT-DO-MENU-HAMBURGUER


//Dropdown-BTN

document.addEventListener('DOMContentLoaded', function() {
  const homeButton = document.querySelector('#btn-home-mobile');
  const dropdown = homeButton.nextElementSibling;
  const dropdownItems = dropdown.querySelectorAll('.dropdown-item');

  homeButton.addEventListener('click', function(e) {
      e.preventDefault();

      if (navLinks.classList.contains('active')) {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
              setTimeout(() => {
                  dropdown.style.display = 'none';
              }, 400); 
          } else {
              dropdown.style.display = 'block'; 
              setTimeout(() => {
                  dropdown.classList.add('show');
              }, 10); 
          }
      }
  });

   
  dropdown.addEventListener('click', function(e) {
      if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
          setTimeout(() => {
              dropdown.style.display = 'none';
          }, 400); 
      }
  });


  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          dropdown.classList.remove('show');
          setTimeout(() => {
              dropdown.style.display = 'none';
          }, 400); 
      });
  });
});


//FIM-DO-Dropdown-BTN







// SCRIPT-DO-CARD-SLIDE-01

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slides-wrapper');

  sliders.forEach(slider => {
      const prevBtn = slider.querySelector('.prev-btn');
      const nextBtn = slider.querySelector('.next-btn');
      const slidesContainer = slider.querySelector('.slider-container');
      const slides = slider.querySelectorAll('.slide');
      const totalSlides = slides.length;
      let currentIndex = 0;  // Inicia no primeiro slide

      function updateSliderPosition() {
          const offset = -currentIndex * 100;
          slidesContainer.style.transform = `translateX(${offset}%)`;
      }

      function showNextSlide() {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSliderPosition();
      }

      function showPrevSlide() {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateSliderPosition();
      }

      // Evento de clique para os botões de navegação
      nextBtn.addEventListener('click', showNextSlide);
      prevBtn.addEventListener('click', showPrevSlide);

      // Define um intervalo para o carrossel girar automaticamente
      setInterval(showNextSlide, 15000);
  });
});




// FIM-DO-SCRIPT-DO-CARD-SLIDE-01






//SCRIPT-DOS-VISITANTEST

function updateViewerCount() {
  var currentCount = parseInt($(".viewer_count").text());
  var randomChange = Math.floor(13 * Math.random()) + -6;
  var newCount = currentCount + randomChange;

  if (newCount > 60) {
      newCount = currentCount + (randomChange = -Math.abs(randomChange));
  } else if (newCount < 20) {
      newCount = currentCount + (randomChange = Math.abs(randomChange));
  }

  $(".viewer_count").text(newCount);
}

$(document).ready(function () {
  var initialCount = Math.floor(41 * Math.random()) + 20;
  $(".viewer_count").text(initialCount);
  setInterval(updateViewerCount, 15000);
});


//FIM-DO-SCRIPT-DOS-VISITANTEST
