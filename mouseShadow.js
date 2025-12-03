const shadow = document.querySelector(".mouse-shadow");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX - 110;
    const y = e.clientY - 110;

    shadow.style.transform = `translate(${x}px, ${y}px)`;
});
