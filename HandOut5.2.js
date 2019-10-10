var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
var hwkPts = parseFloat($("hwk_pts").value);
var mtScore = parseFloat($("mid_pts").value);
var finalScore = parseFloat($("fin_pts").value);
var finalGradeMessage = "";
var totalPts = parseFloat(hwkPts+mtScore+finalScore);
var gradeStructure = $("grade_option").value;
if(gradeStructure == 1)
{if(totalPts>=80)
{finalGradeMessage = "Pass";}
else {finalGradeMessage = "Fail";}}

else{
  if(gradeStructure==2){
  if(totalPts>=90){finalGradeMessage = "A";}
  else if(
    totalPts>=80){finalGradeMessage = "B";}
  else if(
      totalPts>=70){finalGradeMessage = "C";}
  else if(
        totalPts>=60){finalGradeMessage = "D";}
  else(
          finalGradeMessage = "F"
        ) ;

}}
 
$("final_grade").value = finalGradeMessage;

 
}


window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hwk_pts").focus(); //puts the cursor on the first DOM text input box
};
 