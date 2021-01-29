//Should print out the time every second...Complete it

function time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(time, 1000);