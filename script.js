const heartsContainer = document.querySelector(".hearts");
const card = document.querySelector(".card");


// =================================
// 💗 1000 LITTLE HEARTS - RIGHT SIDE
// =================================

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

const HEART_COUNT = 1000;

let backgroundHearts = [];

function resizeHeartCanvas() {

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    backgroundHearts = [];

    for (let i = 0; i < HEART_COUNT; i++) {

        backgroundHearts.push({
            x: window.innerWidth / 2 +
               Math.random() * (window.innerWidth / 2),

            y: Math.random() * window.innerHeight,

            size: 5 + Math.random() * 8,

            opacity: 0.25 + Math.random() * 0.4,

            type: Math.random() > 0.5 ? "♥" : "♡"
        });
    }

    drawBackgroundHearts();
}

function drawBackgroundHearts() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (const heart of backgroundHearts) {

        ctx.globalAlpha = heart.opacity;

        ctx.fillStyle = "#ff1744";

        ctx.font = heart.size + "px Arial";

        ctx.fillText(
            heart.type,
            heart.x,
            heart.y
        );
    }

    ctx.globalAlpha = 1;
}

resizeHeartCanvas();

window.addEventListener(
    "resize",
    resizeHeartCanvas
);


// =================================
// 🌸 FLOWERS ONLY IN EMPTY CARD AREAS
// =================================

const flowerPositions = [

    [5, 8],
    [15, 5],
    [28, 7],
    [42, 5],
    [58, 7],
    [72, 5],
    [88, 8],

    [3, 25],
    [5, 42],
    [4, 60],
    [6, 78],
    [10, 90],

    [95, 25],
    [94, 43],
    [96, 62],
    [94, 80],
    [88, 91],

    [20, 92],
    [35, 94],
    [52, 92],
    [68, 94],
    [80, 91]
];

const flowerTypes = [
    "🌸",
    "🌷",
    "🌼",
    "🌺"
];

flowerPositions.forEach((position, index) => {

    const flower = document.createElement("span");

    flower.innerHTML =
        flowerTypes[index % flowerTypes.length];

    flower.style.position = "absolute";

    flower.style.left =
        position[0] + "%";

    flower.style.top =
        position[1] + "%";

    flower.style.fontSize =
        (8 + Math.random() * 6) + "px";

    flower.style.opacity =
        0.25 + Math.random() * 0.2;

    flower.style.pointerEvents = "none";

    flower.style.zIndex = "0";

    card.appendChild(flower);
});


// =================================
// 💕 FLOATING HEARTS
// =================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left =
        (50 + Math.random() * 50) + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(() => {
    for (let i = 0; i < 4; i++) {
        createHeart();
    }
}, 200);


// =================================
// 💖 SECRET MESSAGE
// =================================

function showMessage() {

    document.getElementById("secretMessage").innerHTML =
        "I love you, Bhumi ❤️ You mean everything to me. 💕";
}


// =================================
// 🌸 800 FLOWERS AROUND PHOTO FRAME
// =================================

const photoFrame =
    document.querySelector(".photo-frame");

const photoFlowers = [
    "🌸",
    "🌷",
    "🌼",
    "🌺",
    "💮"
];

for (let i = 0; i < 800; i++) {

    const flower = document.createElement("span");

    flower.innerHTML =
        photoFlowers[
            Math.floor(
                Math.random() * photoFlowers.length
            )
        ];

    flower.style.position = "absolute";

    const angle =
        Math.random() * Math.PI * 2;

    const radius =
        145 + Math.random() * 35;

    const x =
        50 +
        Math.cos(angle) * radius / 2.8;

    const y =
        50 +
        Math.sin(angle) * radius / 2.8;

    flower.style.left = x + "%";

    flower.style.top = y + "%";

    flower.style.fontSize =
        (4 + Math.random() * 8) + "px";

    flower.style.opacity =
        0.25 + Math.random() * 0.45;

    flower.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    flower.style.pointerEvents = "none";

    flower.style.zIndex = "4";

    photoFrame.appendChild(flower);
}


// =================================
// 🌸 SMALL FLOWERS ON WHITE AREA
// =================================

const whiteAreaFlowers = [
    "🌸",
    "🌷",
    "🌼",
    "🌺"
];

for (let i = 0; i < 100; i++) {

    const flower = document.createElement("span");

    flower.innerHTML =
        whiteAreaFlowers[
            Math.floor(
                Math.random() *
                whiteAreaFlowers.length
            )
        ];

    flower.style.position = "absolute";

    const side =
        Math.floor(Math.random() * 4);

    if (side === 0) {

        flower.style.left =
            (5 + Math.random() * 90) + "%";

        flower.style.top =
            (2 + Math.random() * 10) + "%";

    } else if (side === 1) {

        flower.style.left =
            (3 + Math.random() * 8) + "%";

        flower.style.top =
            (15 + Math.random() * 70) + "%";

    } else if (side === 2) {

        flower.style.left =
            (89 + Math.random() * 8) + "%";

        flower.style.top =
            (15 + Math.random() * 70) + "%";

    } else {

        flower.style.left =
            (8 + Math.random() * 84) + "%";

        flower.style.top =
            (88 + Math.random() * 8) + "%";
    }

    flower.style.fontSize =
        (8 + Math.random() * 5) + "px";

    flower.style.opacity =
        0.25 + Math.random() * 0.2;

    flower.style.pointerEvents = "none";

    flower.style.zIndex = "1";

    card.appendChild(flower);
}


// =================================
// 🌸 7000 TINY FLOWERS - LEFT SIDE
// 🌸 SLOW FLOAT + SOFT SHIMMER
// =================================

const flowerCanvas =
    document.getElementById("flowerCanvas");

const flowerCtx =
    flowerCanvas.getContext("2d");

let flowers = [];

const FLOWER_COUNT = 1000;


// Create flowers
function createFlowers() {

    flowers = [];

    for (let i = 0; i < FLOWER_COUNT; i++) {

        flowers.push({

            // LEFT HALF ONLY
            x:
                Math.random() *
                (window.innerWidth / 2),

            y:
                Math.random() *
                window.innerHeight,

            size:
                Math.random() * 3 + 1,

            rotation:
                Math.random() *
                Math.PI * 2,

            opacity:
                Math.random() * 0.45 + 0.15,

            type:
                Math.floor(Math.random() * 3),

            speed:
                0.02 +
                Math.random() * 0.06,

            sway:
                Math.random() * Math.PI * 2,

            swaySpeed:
                0.0005 +
                Math.random() * 0.001
        });
    }
}


// Resize canvas
function resizeFlowerCanvas() {

    const dpr =
        Math.min(
            window.devicePixelRatio || 1,
            1.5
        );

    flowerCanvas.width =
        window.innerWidth * dpr;

    flowerCanvas.height =
        window.innerHeight * dpr;

    flowerCanvas.style.width =
        window.innerWidth + "px";

    flowerCanvas.style.height =
        window.innerHeight + "px";

    flowerCtx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

    createFlowers();
}


// Draw animated flowers
function drawFlowers(time) {

    flowerCtx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    flowerCtx.textAlign = "center";
    flowerCtx.textBaseline = "middle";

    const symbols = [
        "✿",
        "✾",
        "❀"
    ];

    for (const flower of flowers) {

        // Slow upward movement
        flower.y -= flower.speed;

        // Gentle side-to-side movement
        flower.sway += flower.swaySpeed;

        const floatingX =
            flower.x +
            Math.sin(flower.sway) * 3;

        // If flower goes above screen,
        // bring it back from bottom
        if (flower.y < -10) {

            flower.y =
                window.innerHeight + 10;

            flower.x =
                Math.random() *
                (window.innerWidth / 2);
        }

        // Soft shimmer
        const shimmer =
            0.75 +
            Math.sin(
                time * 0.0015 +
                flower.x
            ) * 0.25;

        flowerCtx.save();

        flowerCtx.translate(
            floatingX,
            flower.y
        );

        flowerCtx.rotate(
            flower.rotation +
            Math.sin(time * 0.0005 + flower.x) * 0.12
        );

        flowerCtx.globalAlpha =
            flower.opacity * shimmer;

        flowerCtx.fillStyle =
            "#c47bb0";

        flowerCtx.font =
            (flower.size * 3) +
            "px Arial";

        flowerCtx.fillText(
            symbols[flower.type],
            0,
            0
        );

        flowerCtx.restore();
    }

    flowerCtx.globalAlpha = 1;

    requestAnimationFrame(drawFlowers);
}


// Start flowers
resizeFlowerCanvas();

window.addEventListener(
    "resize",
    resizeFlowerCanvas
);

requestAnimationFrame(drawFlowers);