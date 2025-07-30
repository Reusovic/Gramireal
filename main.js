const textInput = document.getElementById('text-input');
    const wordCountEl = document.getElementById('word-count');
    const checkButton = document.getElementById('check-button');
    const resultsSection = document.getElementById('results-section');
    const correctedTextEl = document.getElementById('corrected-text');
    const suggestionsListEl = document.getElementById('suggestions-list');

    textInput.addEventListener('input', () => {
      const text = textInput.value.trim();
      const words = text.split(/\s+/).filter(word => word.length > 0);
      wordCountEl.textContent = `${words.length} Words`;
    });

    checkButton.addEventListener('click', () => {
      const originalText = textInput.value;
      if (!originalText.trim()) {
        alert("Please enter some text to check.");
        return;
      }
         resultsSection.classList.remove('hidden');
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Hamburger menu logic
  // Existing variables
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const hamburgerOverlay = document.getElementById('hamburger-overlay');
  const hamburgerBg = document.getElementById('hamburger-bg');
  let isHamburgerOpen = false;

  function openHamburgerMenu() {
  hamburgerOverlay.style.transform = "translateX(0%)";
  hamburgerOverlay.style.opacity = "1";
  hamburgerOverlay.style.pointerEvents = "auto";
  // Remove animation if needed:
  //   hamburgerBtn.classList.add('hamburger-open');
  hamburgerBg.classList.remove('hidden');
  document.body.classList.add('no-scroll'); //   Disable scrolling
   }
function closeHamburgerMenu() {
  hamburgerOverlay.style.transform = "translateX(100%)";
  hamburgerOverlay.style.opacity = "0";
  hamburgerOverlay.style.pointerEvents = "none";
  // hamburgerBtn.classList.remove('hamburger-open');
  hamburgerBg.classList.add('hidden');
  document.body.classList.remove('no-scroll'); //  Enable scrolling back
  isHamburgerOpen = false;
   }
   
  hamburgerBtn.addEventListener('click', function () {
    isHamburgerOpen = !isHamburgerOpen;
    isHamburgerOpen ? openHamburgerMenu() : closeHamburgerMenu();
  });

  // Close hamburger when clicking outside
  hamburgerBg.addEventListener('click', () => {
    if (isHamburgerOpen) {
      closeHamburgerMenu();
    }
  });
  
 // Scroll behavior 
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const scrollThreshold = 10; // Minimum scroll delta before toggling

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (Math.abs(currentScroll - lastScrollTop) <= scrollThreshold) {
    return; // ignore small scrolls
  }

  if (currentScroll > lastScrollTop && currentScroll > 80) {
    // Scrolling down
    navbar.classList.add('hidden-navbar');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden-navbar');
  }

  lastScrollTop = currentScroll;
});