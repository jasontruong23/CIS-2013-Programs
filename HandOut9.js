var $ = function (id) 
{
    return document.getElementById(id);
};
 //Main program function that accepts user input for the total number of the
 //Fibonacci series to show and the then runs a loop to create the output
var generate = function () 
{
    var i, j, k, stringOutput;
    
    i=0;
    j=1;
    stringOutput= i + " " + j; //All of the outputs will start with 0 and 1
	var intCount = parseInt($("total_fib").value);
	
	//validate that intCount is a number
	if (isNaN(intCount)||intCount<1||intCount>100) //This is where it validates what the user input and tells them to re enter a value
    {
        $("total_fib").value= "";
        $("output").value= "Please enter a valid input";
        alert("Has to be a number between 1 and 100");
    }
    else
    {
        while(intCount>2)
        {
            k=i+j;
            i=j;
            j=k;
            intCount--;
            stringOutput= stringOutput + " " + k ;
        }
        $("output").value=stringOutput;
    }
    
	i=0;
	j=1;
	
	stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

} ;


window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
} ; 