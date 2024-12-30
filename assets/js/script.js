function dark_enable() {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
    if (document.querySelector("body").classList.contains("dark"))
        document.getElementById("lg-dk-mode").innerHTML = `<i class="fa-solid fa-toggle-on dark"></i>`;
    else
        document.getElementById("lg-dk-mode").innerHTML = `<i class="fa-solid fa-toggle-off light"></i>`;
}

let date = new Date();
let temp = document.createElement("p");
document.querySelector("#date").innerHTML = `${date.toLocaleString('default', { weekday: 'long' })} | ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
let cont = document.getElementsByTagName("li");
if (date.getHours() > 1)
    cont[0].innerHTML = `${date.getHours()} Hours`;
else
    cont[0].innerHTML = `${date.getHours()} Hour`;
if (date.getMinutes() > 1)
    cont[2].innerHTML = `${date.getMinutes()} Minutes`;
else
    cont[2].innerHTML = `${date.getMinutes()} Minute`;
if (date.getSeconds() > 1)
    cont[4].innerHTML = `${date.getSeconds()} Seconds`;
else
    cont[4].innerHTML = `${date.getSeconds()} Second`;

setInterval(() => {
    date = new Date();
    if (date.getHours() > 1)
        cont[0].innerHTML = `${date.getHours()} Hours`;
    else
        cont[0].innerHTML = `${date.getHours()} Hour`;
    if (date.getMinutes() > 1)
        cont[2].innerHTML = `${date.getMinutes()} Minutes`;
    else
        cont[2].innerHTML = `${date.getMinutes()} Minute`;
    if (date.getSeconds() > 1)
        cont[4].innerHTML = `${date.getSeconds()} Seconds`;
    else
        cont[4].innerHTML = `${date.getSeconds()} Second`;
}, 1000);