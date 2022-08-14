// (() => {
//     const menuOpenBtn = document.querySelector('[data-menu-open]');
//     const menuCloseBtn = document.querySelector('[data-menu-close]');

//     const mobileMenu = document.querySelector('[data-menu]');
//     // const body = document.querySelector('body');

//     menuOpenBtn.addEventListener('click', openModal);
//     menuCloseBtn.addEventListener('click', openModal);

//     function openModal() {
//         mobileMenu.classList.toggle('is-open');
//         // body.classList.toggle('no-scroll');
//     }
// })();

(() => {
    const menuBtnRef = document.querySelector("[data-menu-open]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");

        document.body.classList.toggle('mobile-menu-open');
    });
})();