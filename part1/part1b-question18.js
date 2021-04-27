function time() {
    let d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(time, 1000);