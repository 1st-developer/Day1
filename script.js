var tl = gsap.timeline()
tl.from(".text h1",{
    y: 40,
    duration: 1,
    delay:.1,
    opacity:0
})

tl.from("header",{
    y: -40,
    duration: 1,
    delay:1,
    opacity:0
})

tl.from("nav .logo, nav a",{
    y: -50,
    duration: 1,
    delay:1,
    opacity:0,
    stagger:0.2
})

tl.from(".main",{
    x: -40,
    duration: 1,
    delay:.1,
    opacity:0
})

tl.from(".button",{
    y: -40,
    duration: 1,
    delay:.1,
    opacity:0,
    stagger:.3
})