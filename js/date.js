function today(date) {
    let day = ("0" + date.getDate()).slice(-2),
        month = ("0" + (date.getMonth() + 1)).slice(-2);
    return date.getFullYear() + "-" + month + "-" + day;
}

function generate() {
    const input = document.querySelector("input").value.split("-"),
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month, ordinalSymbol;

    for (let i = 1; i <= months.length; i++) {
        if (parseInt(input[1]) == i) month = months[i - 1];
    }

    if (input[2] <= 3 || input[2] > 20) {
        if (input[2].substring(input[2].length - 1) == 1) ordinalSymbol = "st";
        else if (input[2].substring(input[2].length - 1) == 2) ordinalSymbol = "nd";
        else ordinalSymbol = "rd";
    } else ordinalSymbol = 'th';

    document.querySelector("#output").innerHTML = `${month} ${parseInt(input[2]) + "<sup>" + ordinalSymbol + "</sup>, "} ${input[0]} `;
}

document.addEventListener("DOMContentLoaded", () => {
    let currentDate = new Date();
    document.querySelector("input").value = today(currentDate);
});

document.querySelector("input").addEventListener("change", generate);
document.querySelector("#btn-date").addEventListener("click", generate);