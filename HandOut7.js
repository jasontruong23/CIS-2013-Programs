/**
 * @author saa631
 */
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};


//this function performs all the square, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatTS;
	var floatTriangeArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	

//calculate the rectangle area and perimeter
	floatRectArea = floatRectWidth * floatRectHeight;
	floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;

//calculate the triangle area using Heron's formula (don't remember it? look it up...) and perimeter	
	floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
	floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
	floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;

//calculate the circle area and circumference using convenient Math Object methods	
	floatCircleArea = Math.PI * Math.pow(floatRadius,2);
	floatCircleCircum = 2 * Math.PI * floatRadius;  
	
	alert ("The Rectangle area is " + floatRectArea.toFixed(2) + " and the perimeter is " + floatRectPerim.toFixed(2) + "\n\n" +
		"The Triangle area is " + floatTriangleArea.toFixed(2) + " and the perimeter is " + floatTrianglePerim.toFixed(2) + "\n\n" +
		"The Circle area is " + floatCircleArea.toFixed(2) + " and the circumference is " + floatCircleCircum.toFixed(2));

};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

var calcCircleArea = function(){
  var floatRadius = parseFloat($("radius").value);
  var floatArea = parseFloat(Math.PI*floatRadius*floatRadius).toFixed(2);
  alert ("The Circle area is " + floatArea);
}

var calcTriangleArea = function(){
  var side1 = parseFloat($("tri_side1").value);
  var side2 = parseFloat($("tri_side2").value);
  var side3 = parseFloat($("tri_side3").value);
  var TS = parseFloat((side1+side2+side3)/2);
  var Area = Math.sqrt((TS*(TS-side1)*(TS-side2)*(TS-side3)));
  Area = parseFloat(Area).toFixed(2);
  alert ("The Triangle Area is " + Area);
}

var calcTrianglePerimeter = function(){
  var Side1 = parseFloat($("tri_side1").value);
  var Side2 = parseFloat($("tri_side2").value);
  var Side3 = parseFloat($("tri_side3").value);
  var perimeter = parseFloat(Side1+Side2+Side3).toFixed(2);
  alert ("The Triangle Perimeter is " + perimeter);
}

var calcRectangleArea = function(){
  var Width = parseFloat($("rect_width").value);
	var Height = parseFloat($("rect_height").value);	
  var FloatArea = parseFloat(Width*Height).toFixed(2);
  alert ("The Rectangle Area is " + FloatArea);
}

var calcRectanglePerimeter = function(){
  var Width = parseFloat($("rect_width").value);
	var Height = parseFloat($("rect_height").value);
  var perimeter = parseFloat(2*(Width+Height)).toFixed(2);
  alert("The Rectangle Perimeter is " + perimeter);
}
/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}


window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea; //runs the calcCircleArea function when clicked
    $("calc_tri_area").onclick = calcTriangleArea; //runs the calcTriangleArea function when clicked
    $("calc_tri_perim").onclick = calcTrianglePerimeter; //runs the calcTrianglePerimeter function when clicked
    $("calc_rect_area").onclick = calcRectangleArea; //runs the calcRectangleArea function when clicked
    $("calc_rect_perim").onclick = calcRectanglePerimeter; //runs thee calcRectangleArea function when clicked


};                
