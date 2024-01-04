const container = document.querySelector(".container");

const divs = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10",
 "div11", "div12", "div13", "div14", "div15", "div16"];

const innerDivs = ["innerDiv1", "innerDiv2", "innerDiv3", "innerDiv4", "innerDiv5", "innerDiv6",
 "innerDiv7", "innerDiv8", "innerDiv9", "innerDiv10", "innerDiv11", "innerDiv12", "innerDiv13", 
 "innerDiv14", "innerDiv15", "innerDiv16"]

 const divClass = ["class1", "class2", "class3", "class4", "class5", "class6", "class7", "class8",
 "class9", "class10", "class11", "class12", "class13", "class14", "class15", "class16"]

for(let i = 0; i <= 15; i++)
{
    divs[i] = document.createElement("div"); 
    container.appendChild(divs[i]);

    for(let n = 0; n <= 15; n++)
    {
        innerDivs[n] = document.createElement("div");
        innerDivs[n].setAttribute('style', 'border-color:black; border-style: solid; width: 20px; height: 20px;')
        divs[i].appendChild(innerDivs[n]);

        innerDivs[n].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "grey";
        })

    }
}
