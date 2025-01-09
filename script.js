function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
locoScroll();
// this is for the cursor to follow the mouse movement on the div 
function cursorAnimation() {

    let page1Content = document.querySelector("#page1-content");

    let cursor = document.querySelector("#cursor");

    page1Content.addEventListener('mousemove', (dets) => {
        // cursor.style.left = dets.clientX + 'px';
        // cursor.style.top = dets.clientY + 'px';

        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            duration: 0.1
        });
    });

    page1Content.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        });
    });

    page1Content.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        });
    });
}
cursorAnimation();

function page2Animation(){
    gsap.from(".elem h1",{
        y:500,
        stagger:0.2,
        duration:1.5,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 45%",
            // markers:true,
            scrub:1,
        }
    })
}
page2Animation();

