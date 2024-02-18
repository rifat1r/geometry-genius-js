function calculateEllipseArea(){
    const majorRadius =getInputValueById('ellipse-a');
    const minorRadius = getInputValueById('ellipse-b');
    const area = 3.14 *majorRadius*minorRadius;  
    setInnerTextById('ellipse-area',area)
}