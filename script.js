console.log("Yoga Website Loaded");

/*Smooth Scrolling Navigation */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: "smooth"
                });
    });
});

/* Validation */

const button = document.querySelector(".subscribe-box button");

button.addEventListener("click", () => {

    let email = document.querySelector(".subscribe-box input").value;

    if(email === ""){
        alert("Please enter your email");
    }
    else{
        alert("Thank you for subscribing!");
    }
});

/* Back to top */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});