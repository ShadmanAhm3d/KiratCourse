function populateDiv() {
  const a = document.getElementById("firstinput").value
  const b = document.getElementById("secondinput").value;
  const finalSum = document.getElementById("finalSum");
  // finalSum.innerHTML = parseInt(a)+parseInt(b);
  fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
}


