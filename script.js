// Core interactive behavior for portfolio UI.
(() => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const progress = document.getElementById('scrollProgress');

  // Mobile navigation toggle.
  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      if (menuToggle) menuToggle.textContent = '☰';
    });
  });

  // Scroll progress indicator.
  const updateScrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressValue = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progress.style.width = `${progressValue}%`;
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Typing effect for hero skill keywords.
  const typingTarget = document.getElementById('typingText');
  const words = ['Java', 'Python', 'Full Stack', 'Machine Learning', 'Scalable Products'];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    if (!typingTarget) return;

    const currentWord = words[wordIndex];
    const shownText = currentWord.slice(0, charIndex);
    typingTarget.textContent = shownText;

    if (!deleting && charIndex < currentWord.length) {
      charIndex += 1;
      setTimeout(type, 95);
      return;
    }

    if (!deleting && charIndex === currentWord.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 45);
      return;
    }

    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 240);
  };

  type();

  // Reveal animation on scroll.
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  // Animate skill bars once section appears.
  const barItems = document.querySelectorAll('.bar i');
  const barsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        bar.style.width = `${bar.getAttribute('data-width')}%`;
        barsObserver.unobserve(bar);
      });
    },
    { threshold: 0.5 }
  );

  barItems.forEach((bar) => barsObserver.observe(bar));

  // Expandable project architecture views.
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const button = card.querySelector('.expand-btn');
    button?.addEventListener('click', () => {
      card.classList.toggle('open');
      const expanded = card.classList.contains('open');
      button.textContent = expanded ? 'Hide Architecture' : 'View Architecture';
    });

    // Interactive architecture highlight on hover.
    const flowBoxes = card.querySelectorAll('.flow-box');
    flowBoxes.forEach((box) => {
      box.addEventListener('mouseenter', () => {
        flowBoxes.forEach((item) => (item.style.opacity = '0.55'));
        box.style.opacity = '1';
        box.style.borderColor = 'rgba(6, 182, 212, 0.85)';
      });

      box.addEventListener('mouseleave', () => {
        flowBoxes.forEach((item) => {
          item.style.opacity = '1';
          item.style.borderColor = 'rgba(59, 130, 246, 0.45)';
        });
      });
    });
  });

  // Contact form front-end behavior.
  const contactForm = document.querySelector('.contact-form');
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button[type="submit"]');
    if (!button) return;

    const originalText = button.textContent;
    button.textContent = 'Message Sent ✓';
    button.disabled = true;

    setTimeout(() => {
      contactForm.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 1800);
  });
})();
