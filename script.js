function updateTimeBlock() {
    let timeBlock = document.getElementById("timeBlock");
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeBlock.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTimeBlock, 1000);

const backToTopButton = document.getElementById("back-to-top")

backToTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = function () { myFunction() };

const navbar = document.getElementById("navbar")
const sticky = navbar.offsetTop;

console.log(sticky)

function myFunction() {
    if (window.pageYOffset === 0) {
        navbar.classList.remove("sticky")
        backToTopButton.style.display = "none"
    } else {
        navbar.classList.add("sticky")
        backToTopButton.style.display = "flex"
    }
}

const colorFourButton = document.getElementById("color-four");

colorFourButton.addEventListener("click", function () {
    document.body.classList.remove("color-one")
    document.body.classList.remove("color-two")
    document.body.classList.remove("color-three")
    document.body.classList.add("color-four")
});

const colorThreeButton = document.getElementById("color-three");

colorThreeButton.addEventListener("click", function () {
    document.body.classList.remove("color-one")
    document.body.classList.remove("color-two")
    document.body.classList.add("color-three")
    document.body.classList.remove("color-four")
});

const colorTwoButton = document.getElementById("color-two");

colorTwoButton.addEventListener("click", function () {
    document.body.classList.remove("color-one")
    document.body.classList.add("color-two")
    document.body.classList.remove("color-three")
    document.body.classList.remove("color-four")
});

const colorOneButton = document.getElementById("color-one");

colorOneButton.addEventListener("click", function () {
    document.body.classList.add("color-one")
    document.body.classList.remove("color-two")
    document.body.classList.remove("color-three")
    document.body.classList.remove("color-four")
});

const burgerButton = document.getElementById("burger")
const floatingNav = document.getElementById("floatingnav")
const mainButton = document.getElementById("mainBtn")
const aboutButton = document.getElementById("aboutBtn")
const faqButton = document.getElementById("faqBtn")
const contactButton = document.getElementById("contactBtn")

burgerButton.addEventListener("click", function () {
    if (floatingNav.style.transform === "translate(-50%, -50%)") {
        floatingNav.style.transform = "translate(-50%, -500%)"
        burgerButton.style.transform = "rotate(180deg)"
    } else {
        floatingNav.style.transform = "translate(-50%, -50%)"
        burgerButton.style.transform = "rotate(90deg)"
    }
})

mainButton.addEventListener("click", function () {
    floatingNav.style.transform = "translate(-50%, -500%)"
    burgerButton.style.transform = "rotate(180deg)"
})

aboutButton.addEventListener("click", function () {
    floatingNav.style.transform = "translate(-50%, -500%)"
    burgerButton.style.transform = "rotate(180deg)"
})

faqButton.addEventListener("click", function () {
    floatingNav.style.transform = "translate(-50%, -500%)"
    burgerButton.style.transform = "rotate(180deg)"
})

contactButton.addEventListener("click", function () {
    floatingNav.style.transform = "translate(-50%, -500%)"
    burgerButton.style.transform = "rotate(180deg)"
})

const sourceDiv = document.getElementById("colors");
const targetDiv = document.getElementById("floatingnav");
const navbarDiv = document.getElementById("navbar")
let isDivMoved = false;

function moveDivBasedOnScreenSize() {
    if (window.innerWidth < 768) {
        if (!isDivMoved) {
            // Remove the sourceDiv from its current parent
            sourceDiv.parentNode.removeChild(sourceDiv);

            // Append the sourceDiv to the targetDiv
            targetDiv.appendChild(sourceDiv);

            isDivMoved = true;
        }
    } else {
        if (isDivMoved) {
            // Remove the sourceDiv from the targetDiv
            targetDiv.removeChild(sourceDiv);

            // Append the sourceDiv back to its original parent
            navbarDiv.parentNode.insertBefore(sourceDiv, navbarDiv.nextSibling);

            isDivMoved = false;
        }
    }
}

// Initially call the function to perform the check
moveDivBasedOnScreenSize();

// Listen for window resize events and recheck on resize
window.addEventListener("resize", moveDivBasedOnScreenSize);