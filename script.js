// Get the menu toggle button and the menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Add event listener for click
menuToggle.addEventListener('click', function() {
    // Toggle 'active' class to change button shape
    this.classList.toggle('active');

    // Toggle background color
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.background = this.classList.contains('active') ? '#009688' : '#333';
    });

    // Toggle menu visibility
    menu.classList.toggle('show-menu');
});

const whatsappButton = document.querySelector("#register");

whatsappButton.addEventListener("click", () => {
  const phoneNumber = '2786109599';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  window.open(whatsappUrl, '_blank');
});

const showModal = () => {
    // Show the modal
    const myModal = new bootstrap.Modal(document.getElementById('developmentModal'));
    myModal.show();
  };