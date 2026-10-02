function unlock() {
  const pin = document.getElementById("pin").value;

  if (pin === "1708") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("message").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Wrong PIN. Try again.";
  }
}
