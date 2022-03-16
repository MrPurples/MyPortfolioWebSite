const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function scrollToContent(event, contentId) {
  event.preventDefault();
  document.getElementById(contentId).scrollIntoView({
    inline: 'nearest',
    block: 'center',
    behavior: 'smooth',
  });
  navbarLinks.classList.remove('active');
} 

