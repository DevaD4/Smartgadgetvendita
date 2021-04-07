const slider1 = document.getElementById("glide1");

if(slider1)
new Glide(slider1, {
    type:'carousel',
    startAt: 0,
    perView: 5,
    hoverpause: false,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoint: {
        1200: {
            perView: 3,
        },
        768: {
            perView: 2,
        },
    },
}).mount();