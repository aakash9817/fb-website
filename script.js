var settingMenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");

function settingMenuToggle(){
    settingMenu.classList.toggle("setting-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == 'light'){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == 'light'){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == 'dark'){
darkBtn.classList.add("dark-btn-on");
document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}

let time = document.getElementById("current-time");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000);

let time1 = document.getElementById("current-time-1");

setInterval(() => {
    let d = new Date();
    time1.innerHTML = d.toLocaleTimeString();
},1000);

let time2 = document.getElementById("current-time-2");

setInterval(() => {
    let d = new Date();
    time2.innerHTML = d.toLocaleTimeString();
},1000);