let body = document.body;

let div1 = document.createElement("div");
div1.innerHTML = "Jackdaws love my big sphinx of quartz.";
div1.style.color = "tomato";

let div2 = document.createElement("div");
div2.innerHTML = "bottom text";
div2.style.color = "mediumaquamarine";

body.appendChild(div1);
body.appendChild(div2);