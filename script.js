let page1Content = document.querySelector("#page1-content");

let cursor = document.querySelector("#cursor");

page1Content.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.clientX + 'px';
    cursor.style.top = dets.clientY + 'px';
});
