const element = document.getElementById("main");
element.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "<h1> Roger is the champion </h1>";
document.body.append(newHeader);