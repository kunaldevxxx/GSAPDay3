gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
})
gsap.from("#page3 #box",{
    scale:0,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        markers:true,
        scrub:5
    }
})