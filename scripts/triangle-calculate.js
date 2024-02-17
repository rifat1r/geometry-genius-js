/**
 * objective: get base and height of a triangle.Calculate the area by using the area formulaand then display the area
 * step 1:get base value of the triangle
 * step 2:added an id in the base input field
 * step 3:use getElementbyId to access the input field
 * step 4:get value from the input field.(value is string now  )
 * step 5:convert the value to a number.Use parseFloat
*/


function calculateTriangleArea(){

    //get triangle base value
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    //area
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height =parseFloat(triangleHeightText);
    console.log(height);

    //area output
    const area = 0.5*base*height;
    console.log('Area of the triangle is:',area);

    //display the triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}