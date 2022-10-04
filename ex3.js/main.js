let inputS = document.querySelector("input[type='submit']");
document.forms[0].onsubmit = function (el) {
  el.preventDefault();
};
inputS.onclick = function () {
  let nbrEle = document.querySelector("[name='elements']").value;
    let input = document.querySelector("select.input").value;
    let chlrn= document.querySelectorAll(".results .box");

    chlrn.forEach(function (ele) {
      ele.remove();
    });
  for (let i = 0; i < nbrEle; i++) {
 
      let createElement = document.createElement(input);
    
    let eleText = document.createTextNode(
      `${document.querySelector("[name='texts']").value}`
    );
    document.body.querySelector(".results").appendChild(createElement);
    createElement.appendChild(eleText);
    createElement.setAttribute("class", "box");
    createElement.setAttribute("title", "Element");
    createElement.setAttribute("id", `id${i + 1}`);
  }
};