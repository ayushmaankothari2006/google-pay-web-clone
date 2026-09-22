// Google Pay Desktop Dashboard Interactions

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sidebar navigation active item switching
  const navItems = document.querySelectorAll('#sidebarNav .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // 2. Carousel indicator switching
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // 3. Hero banner previous / next arrows
  const prevBtn = document.querySelector('.banner-arrows .arrow-circle-btn[title="Previous"]');
  const nextBtn = document.querySelector('.banner-arrows .arrow-circle-btn[title="Next"]');

  if (prevBtn && nextBtn && dots.length > 0) {
    const cycleDot = (forward = true) => {
      let activeIndex = Array.from(dots).findIndex(d => d.classList.contains('active'));
      dots[activeIndex].classList.remove('active');
      if (forward) {
        activeIndex = (activeIndex + 1) % dots.length;
      } else {
        activeIndex = (activeIndex - 1 + dots.length) % dots.length;
      }
      dots[activeIndex].classList.add('active');
    };

    nextBtn.addEventListener('click', () => cycleDot(true));
    prevBtn.addEventListener('click', () => cycleDot(false));
  }

  // 4. Subtle click ripple/feedback on interactive elements
  const interactiveCards = document.querySelectorAll('.quick-action-card, .money-row-item, .item-node');
  interactiveCards.forEach(card => {
    card.addEventListener('mousedown', () => {
      card.style.transform = 'scale(0.985)';
    });
    card.addEventListener('mouseup', () => {
      card.style.transform = '';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // 5. Country selector interactive dropdown feedback
  const countrySelector = document.querySelector('.country-selector');
  if (countrySelector) {
    countrySelector.addEventListener('click', () => {
      countrySelector.style.opacity = '0.7';
      setTimeout(() => {
        countrySelector.style.opacity = '1';
      }, 150);
    });
  }
});
