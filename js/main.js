var myVar;
function load() {
  myVar = setTimeout(showpage,4000);
}
function showpage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("body").style.display = "block";
}