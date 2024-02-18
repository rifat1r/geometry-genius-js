function CalculatePentagonArea(){
    const perimeter = getElementById('pentagon-p');
    console.log(perimeter);
    const apothem = getElementById('pentagon-a');
    console.log(apothem);
    const area = 0.5*perimeter*apothem;
    console.log('Area of the pentagon:', area);
    setInnerTextById('pentagon-area',area)
}

function getElementById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element= document.getElementById(elementId);
    element.innerText = area;

}
