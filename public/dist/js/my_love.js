const yourDate = new Date("2022-10-10T00:00:00"),
    music = ['ido', 'noinaycoanh', 'nguoiamphu'];

document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    function olock() {
        var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    } olock();
    var timer = setInterval(function(){olock()}, 1000);
    document.querySelector("audio").setAttribute("src", `/dist/music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

    // document.getElementsByTagName("body")[0].insertAdjacentHTML(
    //     "beforeend",
    //     "<div id='mask'></div>"
    // );

    // img scale interval
    var img = document.querySelector("img"),
        scale = 1;

    setInterval(function(){
        // scale += 1
        img.style.transform = `scale(${scale})`;

    },1000)

}, false);
