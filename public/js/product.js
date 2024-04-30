

const dropDown = document.querySelectorAll('.dropbtn');
let timeoutId;

dropDown.forEach(item => {
  item.addEventListener('mouseenter', function(){
    clearTimeout(timeoutId); // Clear any existing timeout
    const dropdowncontent = item.nextElementSibling;
    dropdowncontent.classList.remove('hidden');
  });

  item.addEventListener('mouseleave', function(){
    const dropdowncontent = item.nextElementSibling;
    timeoutId = setTimeout(() => {
      dropdowncontent.classList.add('hidden');
    }, 2000); // Adjust the delay (in milliseconds) as needed
  });
});




//Menu links//
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
