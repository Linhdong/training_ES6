const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let html = '';

let renderButton = () => {
    
    for(let index=0; index < colorList.length; index++){
        let color = colorList[index];
        html += `
                <button class="color-button ${color}" onClick=changeColor('${color}')></button>
                `
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

window.changeColor = (color) => {
    let html1 = '';
    html1 = `<div id="house" class="house ${color}">
                <div class="house-base">
                    <div class="house-base-detail"></div>
                    <div class="house-door-wrapper">
                        <div class="house-door">
                            <div class="house-door-window"></div>
                            <div class="house-door-detail"></div>
                        </div>
                    </div>
                    <div class="house-window-wrapper">
                        <div class="house-window house-window-left"></div>
                        <div class="house-window house-window-right"></div>
                    </div>
                </div>
                <div class="house-sandwich"></div>
                <div class="house-upper">
                    <div class="house-upper-detail"></div>
                    <div class="house-upper-shadow"></div>
                    <div class="house-window"></div>
                    <div class="house-window-wrapper">
                        <div class="house-window house-window-left"></div>
                        <div class="house-window house-window-right"></div>
                    </div>
                </div>
                <div class="house-roof">
                    <div class="house-roof-side house-roof-side-left"></div>
                    <div class="house-roof-side house-roof-side-right"></div>
                    <div class="house-roof-detail"></div>
                </div>
            </div>`
    document.querySelector('.container').innerHTML = html1;
}

window.onload = () => {
    renderButton();
}