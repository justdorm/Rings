
function create_eye() {
    let eye = document.createElement("img");
    eye.src = "Images/eye.png";
    eye.classList.add("object");
    eye.setAttribute("data-rellax-speed", random_range(-2, 10))
    document.body.appendChild(eye);
    eye.style.position = "absolute";
    eye.style.width = random_range(30, 600);
    eye.style.top = random_range(5, 200)+"%";
    eye.style.left = random_range(10, 70)+"%";
    eye.setAttribute("data-rellax-zindex", Math.floor(random_range(-10, 10)));
}

function create_lips() {
    let lips = document.createElement("img");
    lips.src = "Images/lips.png";
    lips.classList.add("object");
    lips.setAttribute("data-rellax-speed", random_range(0, 10));
    document.body.appendChild(lips);
    lips.style.position = "absolute";
    lips.style.width = random_range(30, 500);
    lips.style.top = random_range(5, 200)+"%";
    lips.style.left = random_range(10, 70)+"%";
    lips.setAttribute("data-rellax-zindex", random_range(-10, 10));
}

function random_range(lower, upper) {
    let output = ((Math.random() * (upper-lower)) + lower);
    return output
}
for (i = 0; i < 10; i++) {
    create_eye()
}
for (i = 0; i < 10; i++) {
    create_lips()
}

var rellax = new Rellax('.object');