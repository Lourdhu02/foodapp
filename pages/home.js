document.getElementById('menuIcon').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
});

const cardContainer = document.getElementById('cardContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let isDragging = false;
let startX;
let scrollLeft;

cardContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

cardContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

cardContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - cardContainer.offsetLeft;
    const walk = (x - startX) * 3; 
    cardContainer.scrollLeft = scrollLeft - walk;
});

prevButton.addEventListener('click', () => {
    cardContainer.scrollLeft -= 100;
});

nextButton.addEventListener('click', () => {
    cardContainer.scrollLeft += 100; 
});

let cartCount = 0;


function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

const addToCartButtons = document.querySelectorAll('.order-button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    cartCount++;
    
    updateCartCount();
   
  });
});