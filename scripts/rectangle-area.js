function calculateTriangleArea (){
    //get length of the rectangle
     const lengthInput =document.getElementById('rectangle-length');
     const lengthText = lengthInput.value;
     const length =parseFloat(lengthText)
     console.log(length);

     //get width
     const widthInput = document.getElementById('rectangle-width');
     const widthText = widthInput.value;
     const width = parseFloat(widthText);
     console.log(width);

     //calculate rectangle area

      const area = length*width;
      console.log('Area of the rectangle: ',area);

      //display rectangle area
      const rectangleSpan =document.getElementById('rectangle-area');
      rectangleSpan.innerText = area;
}