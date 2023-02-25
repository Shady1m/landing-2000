





// Select the navigation bar ul element
const navbarList = document.querySelector('#navbar__list');

// Create a DocumentFragment to improve performance
const fragment = document.createDocumentFragment();

// Loop through the sections to build the navigation menu dynamically
document.querySelectorAll('section').forEach((section) => {
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.textContent = section.getAttribute('data-nav');
  navLink.setAttribute('href', `#${section.id}`);
  navLink.classList.add('menu__link');
  navLink.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = navLink.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({behavior: 'smooth'});
  });
  navItem.appendChild(navLink);
  fragment.appendChild(navItem);
});

// Add the DocumentFragment to the navigation bar ul element
navbarList.appendChild(fragment);

// Function to add active state to sections
function sectionActiveState() {
  // Get all section elements on the page
  const sections = document.querySelectorAll('section');

  // Listen for scroll events on the window
  window.addEventListener('scroll', () => {
    // Loop through each section element
    sections.forEach(section => {
      // Get the bounding rectangle of the section element
      const rect = section.getBoundingClientRect();
      // Check if the top of the section is within the viewport
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        // If it is, add the "your-active-class" to the section
        section.classList.add('your-active-class');

        // Highlight the corresponding navigation menu item
        const links = navbarList.querySelectorAll('a');
        if (links.length > 0) {
          links.forEach((link) => {
            link.classList.remove('active__link');
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('active__link');
            }
          });
        }

      } else {
        // If it isn't, remove the "your-active-class" from the section
        section.classList.remove('your-active-class');
      }
    });
  });
}

// Call the sectionActiveState function
sectionActiveState();









