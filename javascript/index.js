"use strict";

/*Nav Login Register Open Popup*/
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector("#login-popup").classList.add("active");
});

document.querySelector(".show-register").addEventListener("click", function(){
    document.querySelector("#register-popup").classList.add("active");
});

/*Nav Login Register Close Popup*/
document.querySelector("#register-popup .close-button").addEventListener("click", function(){
    document.querySelector("#register-popup").classList.remove("active");
});

document.querySelector("#login-popup .close-button").addEventListener("click", function(){
    document.querySelector("#login-popup").classList.remove("active");
});

/*Bottom Sign-up Popup*/
document.querySelector(".sign-up .show-register").addEventListener("click", function(){
    document.querySelector("#register-popup").classList.add("active");
});

document.querySelector("#register-popup .close-button").addEventListener("click", function(){
    document.querySelector("#register-popup").classList.remove("active");
});

/*Hero Text Sign-up Popup*/
document.querySelector("#hero .hero-text .show-register").addEventListener("click", function(){
    document.querySelector("#register-popup").classList.add("active");
});

document.querySelector("#register-popup .close-button").addEventListener("click", function(){
    document.querySelector("#register-popup").classList.remove("active");
});

document.querySelector(".flex-container #services #twitter-tasks").addEventListener("click", function(){
    document.querySelector("#twt-popup").classList.add("active");
});

document.querySelector("#twt-popup .close-button").addEventListener("click", function(){
    document.querySelector("#twt-popup").classList.remove("active");
});

function loginSubmit() {
        const loginForm = document.querySelector('.popup #login');
        const data = new FormData(loginForm);
        const object = {};
        data.forEach(function(value,key) {
            console.log(key);
            console.log(data);
            object[key] = value;
        })
        const json = JSON.stringify(object);
        console.log(json)

        fetch("https://sv-api.learncs.io/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: json
        })

        .then(response => {
            if (!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        .then(data => {
            console.log("Success");
            console.log(data);
            window.location = "tasks.html"
        })
        .catch(error => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("JSON error from API");
                    console.log(error.statusText);
                })
            } else {
                console.log("Fetch error");
                console.log(error);
            }
        })
    }



    function registerSubmit() {
        const registerForm = document.querySelector('.popup #register');
        const data = new FormData(registerForm);
        console.log(data);
        const object = {};
        data.forEach(function(value,key) {
            object[key] = value;
        })
        const json = JSON.stringify(object);
        console.log(json)

        fetch("https://sv-api.learncs.io/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })

        .then(response => {
            if (!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        .then(data => {
            console.log("Success");
            console.log(data);
            window.location = "tasks.html"
        })
        .catch(error => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("JSON error from API");
                    console.log(error.statusText);
                })
            } else {
                console.log("Fetch error");
                console.log(error);
            }
        })
    }
    
    function taskSubmit() {
        const taskForm = document.querySelector('.popup #twt-form');
        const data = new FormData(taskForm);
        const object = {};
        data.forEach(function(value,key) {
            if (key === "frequency") {
                console.log(Number(value));
                object[key] = Number(value);
            } else if (key === "enabled"){
                if (value === "on") {
                    object[key] = 1;
                } else {
                    object[key] = 0;
                }
            } else {
                object[key] = value;
            }
        })
        const json = JSON.stringify(object);
        console.log(json);

        fetch("https://sv-api.learncs.io/task", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })

        .then(response => {
            if (!response.ok) {
                return Promise.reject(response);
            }
            return response.json();
        })
        .then(data => {
            console.log("Success");
            console.log(data);
            window.location = "tasks.html"
        })
        .catch(error => {
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("JSON error from API");
                    console.log(error.statusText);
                })
            } else {
                console.log("Fetch error");
                console.log(error);
            }
        })
    }