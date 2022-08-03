let tinhDiemTB = (...restParams) => {
    let dtb = 0;
    switch (restParams.length){
        case 3:{
            dtb = ( Number(restParams[0]) + Number(restParams[1]) + Number(restParams[2])) / 3;
        }; break;
        case 4:{
            dtb = ( Number(restParams[0]) + Number(restParams[1]) + Number(restParams[2]) + Number(restParams[3])) / 4;
        }; break;
    }

    return dtb;
}

document.querySelector('#btnKhoi1').onclick = function() {
    let arrInput = [];
    let arrScore = document.querySelectorAll('.row .col-6 span input');
    for(let input of arrScore){
        let {id, value} = input; //destruring object
        arrInput[id] = value; //dynamic key 
    }
    //Bóc tách từng giá trị của phần tử có trong object ra 
    let { inpToan, inpLy, inpHoa } = arrInput;
    let result = tinhDiemTB(inpToan, inpLy, inpHoa);
    document.querySelector('#tbKhoi1').innerHTML = result.toFixed(2);
}

document.querySelector('#btnKhoi2').onclick = function() {
    let arrInput = [];
    let arrScore = document.querySelectorAll('.row .col-6 span input');
    for(let input of arrScore){
        let {id, value} = input; //destruring object
        arrInput[id] = value; //dynamic key 
    }
     //Bóc tách từng giá trị của phần tử có trong object ra 
    let { inpVan, inpSu, inpDia, inpEnglish } = arrInput;
    let result = tinhDiemTB(inpVan, inpSu, inpDia, inpEnglish);
    document.querySelector('#tbKhoi2').innerHTML = result.toFixed(2);
}