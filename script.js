// this is for the cursor to follow the mouse movement on the div 

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
    });
});

page1Content.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
        scale: 0,
    });
});



