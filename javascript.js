const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");


const handleClick = (e) => {
    e.preventDefault();
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    if (e.target.closest('a').id === "icon1") {
      p1.style.display = "block";
    }
    else if (e.target.closest('a').id === "icon2") {
      p2.style.display = "block";
    }
    else if (e.target.closest('a').id === "icon3") {
      p3.style.display = "block";
    }
};

icon1.addEventListener("click", handleClick);
icon2.addEventListener("click", handleClick);
icon3.addEventListener("click", handleClick);