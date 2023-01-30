const button = document.getElementById("startButton");
function mouseOver()
{
    button.style.transform = "scale(1.1)";
}
function mouseOut()
{
    button.style.transform = "scale(1)";
}
button.addEventListener("mouseover", mouseOver);
button.addEventListener("mouseout", mouseOut);
