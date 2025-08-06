document.addEventListener('DOMContentLoaded', () => {
  const btnMonthly = document.getElementById('btn-monthly');
  const btnAnnual = document.getElementById('btn-annual');
  const prices = document.querySelectorAll('.plan-price');
  const periods = document.querySelectorAll('.plan-period');
  const descriptions = document.querySelectorAll('.plan-description');
  const btnsGetStarted = document.querySelectorAll('.btn-get-started');

  const setActive = (isAnnual) => {
    prices.forEach((price) => {
      const newPrice = isAnnual ? price.dataset.annual : price.dataset.monthly;
      price.classList.remove('price-show');
      price.classList.add('price-hide');
      setTimeout(() => {
        price.textContent = `$${newPrice}`;
        price.classList.remove('price-hide');
        price.classList.add('price-show');
      }, 150);
    });

    periods.forEach((period) => {
      period.textContent = isAnnual ? 'per year' : 'per month';
    });

    if (isAnnual) {
      btnAnnual.classList.add('bg-gray-900', 'text-white', 'font-semibold');
      btnMonthly.classList.remove('bg-gray-900', 'text-white', 'font-semibold');
    } else {
      btnMonthly.classList.add('bg-gray-900', 'text-white', 'font-semibold');
      btnAnnual.classList.remove('bg-gray-900', 'text-white', 'font-semibold');
    }

    descriptions.forEach(desc => {
      desc.textContent = isAnnual ? desc.dataset.annual : desc.dataset.monthly;
    });

    btnsGetStarted.forEach(btn => {
      btn.textContent = isAnnual ? btn.dataset.annual : btn.dataset.monthly;
    });
  };

  if (btnMonthly && btnAnnual) {
    btnMonthly.addEventListener('click', () => setActive(false));
    btnAnnual.addEventListener('click', () => setActive(true));
    }

    const btnMenu = document.getElementById("btn-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (btnMenu && mobileMenu) {

        const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");

    btnMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle("show-menu");
    btnMenu.setAttribute("aria-expanded", isOpen);

    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
    });

    document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !btnMenu.contains(e.target)) {
        mobileMenu.classList.remove("show-menu");
        btnMenu.setAttribute("aria-expanded", "false");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
    }
    });

    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        mobileMenu.classList.remove("show-menu");
        btnMenu.setAttribute("aria-expanded", "false");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
    }
    });

  }
});
