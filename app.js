window.addEventListener("load", function() {
    var seconds = document.getElementById("seconds").value;
    var  button = document.getElementById("button");
    var intervalo = seconds*1000;
    button.addEventListener("click", function() {
        setInterval(randomColor,intervalo);
    });
    function randomColor(){
        document.body.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    }
});