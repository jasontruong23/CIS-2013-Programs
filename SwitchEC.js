// Set the student's grade
var floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Mid Term Points(0-30):"));

floatFinPts = parseFloat(prompt("Please enter Final Points(0-30):"));

floatTotalPts = parseFloat(floatHwPts+floatMidPts+floatFinPts);

switch (true) {
    // If score is 90 or greater
    case floatTotalPts >= 90:
        stringFinalGrade=("A");
        break;
    // If score is 80 or greater
    case floatTotalPts >= 80:
        stringFinalGrade=("B");
        break;
    // If score is 70 or greater
    case floatTotalPts >= 70:
        stringFinalGrade=("C");
        break;
    // If score is 60 or greater
    case floatTotalPts >= 60:
        stringFinalGrade=("D");
        break;
    // Anything 59 or below is failing
    default:
        stringFinalGrade=("F");
}
alert("Your final grade is: " +stringFinalGrade);

