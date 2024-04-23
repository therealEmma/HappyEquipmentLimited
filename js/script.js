//Slide Show of products
var slideIndex = 1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("products");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  slideIndex += n;
  var slides = document.getElementsByClassName("products");
  if (slideIndex > slides.length) {slideIndex = 1}
  else if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

//Drop down button

const dropDownButtons = document.querySelectorAll('.dropbtn');
    
dropDownButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('hidden');
        
        // Hide other dropdowns if any are open
        const otherDropdowns = document.querySelectorAll('.dropdown-content');
        otherDropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdownContent) {
                otherDropdown.classList.add('hidden');
            }
        });
    });
});


// // Detect scroll event
// window.addEventListener('scroll', function() {
//   // Check if element is in view
//   var elements = document.querySelectorAll('.aos-animate');
//   elements.forEach(function(element) {
//       if (isElementInViewport(element)) {
//           // Reset AOS animation state
//           element.classList.remove('aos-init', 'aos-animate');
//           element.setAttribute('data-aos', 'fade-up'); // Set your desired AOS animation
//           element.classList.add('aos-init');
//           setTimeout(function() {
//               element.classList.add('aos-animate');
//           }, 50); // Adjust this delay as needed
//       }
//   });
// });

// // Function to check if an element is in the viewport
// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }




//Smooth Scrolling //
// const section = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href');
//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//           const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
//           window.scrollTo({
//               top: targetOffset,
//               behavior: 'smooth'
//           });
//       }
//   });
// });



// Set initial slide index for the second slideshow
let slideIndex2 = 0;

// Function to show slides for the second slideshow
function showSlides2() {
    // Get all slides for the second slideshow
    const slides2 = document.querySelectorAll('.client-text');

    // Hide all slides for the second slideshow
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = 'none';
    }

    // Increment slide index for the second slideshow
    slideIndex2++;

    // Reset slide index for the second slideshow if end is reached
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }

    // Display the current slide for the second slideshow
    slides2[slideIndex2].style.display = 'block';

    // Call the function recursively after a delay for the second slideshow
    setTimeout(showSlides2, 5000); // Change slide every 5 seconds (5000 milliseconds)
}

// Call the showSlides2 function to start the second slideshow
showSlides2();




//MEnu links for mobile//
const MobileMenuOpen = document.getElementById('MobileMenuOpen');
const MobileMenuClose = document.getElementById('MobileMenuClose');
const MenuLinks = document.getElementById('Menu-links');

MobileMenuOpen.addEventListener('click', function(){
  MenuLinks.classList.toggle('hidden');
  MobileMenuClose.classList.toggle('hidden');
  MobileMenuOpen.classList.toggle('hidden');
});

MobileMenuClose.addEventListener('click', function(){
  MenuLinks.classList.toggle('hidden');
  MobileMenuOpen.classList.toggle('hidden');
  MobileMenuClose.classList.toggle('hidden');
})


// Set initial properties
gsap.set("#section1", { opacity: 0, x: -50 });
gsap.set("#section2", { opacity: 0, x: 100 });
gsap.set("#section3", { opacity: 0, y: 50 });
gsap.set("#section4", { opacity: 0, x: -50 });
gsap.set("#section5", { opacity: 0, x: -50 });

// Animate the element
gsap.to("#section1", {
  opacity: 1,
  x: 0,
  duration: 2,
  ease: "power1.out", // You can change the easing function as needed
});

gsap.to("#section2", {
  opacity: 1,
  x: 0,
  duration: 2,
  ease: "power1.out", // You can change the easing function as needed
});


gsap.to("#section3", {
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "power1.out", // You can change the easing function as needed
});


gsap.to("#section4", {
  opacity: 1,
  x: 0,
  duration: 2,
  ease: "power1.out", // You can change the easing function as needed
});

