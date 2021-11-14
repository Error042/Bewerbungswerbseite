
const btn = document.querySelector(".fancy-burger");

btn.addEventListener('click', () => {
    btn.querySelectorAll('span').forEach((span) => span.classList.toggle('open'))
})

const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1'},
    { path: '#blob2'},
    { repeat: 999, duration: 3000, yoyo: true}
)
    tween.start()