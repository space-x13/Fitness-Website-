const scrollRevealOPtion = {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
}

//header
ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOPtion,
    delay:500,
})
ScrollReveal().reveal(".header__container h2",{
    ...scrollRevealOPtion,
    delay:1000,
})
ScrollReveal().reveal(".header__container .btn",{
    ...scrollRevealOPtion,
    delay:1500,
})
ScrollReveal().reveal(".header__container img",{
    ...scrollRevealOPtion,
    origin: "right",
})

// hero
ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOPtion,
    interval: 500,
})

// classes
ScrollReveal().reveal(".classes__image", {
    duration: 1000,
    interval: 500,
})

//membership 
ScrollReveal().reveal(".membership", {
    ...scrollRevealOPtion,
    interval: 500,
})

// stories| about
ScrollReveal().reveal(".stories__card",{
    ...scrollRevealOPtion,
    interval: 500,
})

//posts | blogs
ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOPtion,
    interval: 500,
})

// photos | galleries
ScrollReveal().reveal(".photos__card", {
    ...scrollRevealOPtion,
    duration: 1000,
    interval: 500,
})

// hamburger menu
const menuBtn = document.querySelector(".hamburger");
const navBtn = document.querySelector(".nav_links");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navBtn.classList.toggle("active");
})
