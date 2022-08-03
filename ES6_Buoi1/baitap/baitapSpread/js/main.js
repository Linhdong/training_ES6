let renderSpan= (arrString) => {
    let html = '';
    for(let key in arrString){
        html += `
                    <span>${arrString[key]}</span>
                `
    }
    document.querySelector('.heading').innerHTML = html;
}


window.onload = () => {
    let strHeading = document.querySelector(".heading").innerHTML;
    let arrString = [...strHeading];
    renderSpan(arrString);
}