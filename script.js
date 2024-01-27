function subscribe() {
    var email = document.getElementById('emailInput').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email  && emailRegex.test(email)) {
        document.getElementById('success').style.display = 'block';
        setTimeout(function() {
            success.style.display = 'none';
        }, 3000);
    }
}

document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function (element) {
  element.addEventListener('click', function (e) {
      var parentDropdown = this.closest('.dropdown-submenu');
      if (parentDropdown) {
          e.preventDefault();
          parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
      }
  });
});

let swiperCards = new Swiper(".tutor_cards", {
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      700:{
        slidesPerView: 2,
      }
    }
});
  
function updateButtonContent() {
  // Get the width of the screen
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Define the breakpoint for mobile
  const mobileBreakpoint = 768;

  // Select the button element
  const button = document.querySelector('.cus_input-container button');

  // Check if the screen width is less than the mobile breakpoint
  if (screenWidth < mobileBreakpoint) {
    // Change the button content to use the bell icon
    button.innerHTML = '<i class="fas fa-bell"></i>';
  } else {
    // Restore the original button content
    button.innerHTML = '<i class="fas fa-bell px-2"></i>Subscribe';
  }
}

// Call the function on page load and resize events
window.onload = window.onresize = updateButtonContent;

// Select the element you want to wrap and unwrap
// var toggleSections = document.querySelectorAll('.toggle-section');

//     // Create buttons container
//     var buttonsContainer = document.createElement('div');
//     buttonsContainer.classList.add('msab-buttons');

//     // Append the buttons container to the body
//     document.body.appendChild(buttonsContainer);

//     // Create buttons for each toggle section
//     toggleSections.forEach(function(section, index) {
//       var button = document.createElement('button');
//       button.innerHTML = '<i class="fas fa-caret-up"></i>';
//       button.classList.add('msab-button');
//       button.addEventListener('click', function() {
//         toggleContent(section);
//       });
//       buttonsContainer.appendChild(button);
//     });

//     function toggleContent(section) {
//       section.classList.toggle('toggle-content');
//     }