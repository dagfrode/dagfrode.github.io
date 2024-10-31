function isOctober31st() {
  var date = new Date();
  return date.getMonth() === 9 && date.getDate() === 31;
}

function minion() {
  document.body.style.setProperty("--main-green-dark", "#fce029");
  document.body.style.setProperty("--main-pink", "#0a75bc");
  document.body.style.setProperty("--main-white", "#0a75bc");
}

function evilMinion() {
  document.body.style.setProperty("--main-green-dark", "#361b5a");
  document.body.style.setProperty("--main-pink", "#bb9fe2");
  document.body.style.setProperty("--main-white", "#bb9fe2");
}

function toggleMinion(){
  setTimeout(minion, 2000);
  setTimeout(evilMinion, 5000);

}



document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.altKey && event.key === 'm') {
      
      // Call your function here
      toggleMinion();
  }
});