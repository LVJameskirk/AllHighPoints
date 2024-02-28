var modal = document.getElementById('myModal');
var mapImg = document.getElementById('mapImg');
var mapPointImg = document.getElementById('mapPointImg');
var pointImg = document.getElementById('pointImg');
var routeImg = document.getElementById('routeImg');
var routeImg2 = document.getElementById('routeImg2');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

mapImg.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

mapPointImg.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

pointImg.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

routeImg.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

routeImg2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}