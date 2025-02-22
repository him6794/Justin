// 1. 打字機動畫
const text = "Justin";
let index = 0;

function type() {
    if (index < text.length) {
        document.querySelector(".typing").textContent += text[index];
        index++;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", type);

// 2. 動態背景（Particles.js）
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 1 },
        line_linked: { enable: true, opacity: 0.3 }
    }
});
