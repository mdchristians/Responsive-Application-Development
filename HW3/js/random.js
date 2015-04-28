// Global array for js
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createButton() {
	var btn = document.createElement("input");
    
    //Assign different attributes to the element. 
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Display All");
    btn.setAttribute("onclick", "launcher()");
	var foo=document.getElementById("fooBar");
	foo.appendChild(btn);
}

function displayItems()
{
	// Find Random Numbers in special array
	var arr = []
	while (arr.length < 6)
	{
		var rnum = Math.ceil(Math.random()*10)
		var found = false;
		for (var i=0;i<arr.length;i++)
		{
			if (arr[i] == rnum)
			{
				found=true;
				break
			}
		}
		if(!found)arr[arr.length]=rnum;
	}

	// Display Results
	document.getElementById("rand1").innerHTML = arr;
	document.getElementById("rand2").innerHTML = arr;
	document.getElementById("rand3").innerHTML = arr;
}

function displayMaxMinPow()
{
	// Find the Min with a loop
	var min = 1;
	var j = Math.length;
	for (var i = 1; i < j; i++) 
	{
		if (myArray[i] < min) 
		{
			min = myArray[i];
		}
	}

	// Find the Max ( actually faster than math.max()! )
	var max = 1;
	var j = myArray.length;
	for (var i = 1; i < j; i++) 
	{
		if (myArray[i] > max) 
		{
			max = myArray[i];
		}
	}
	
	// Simple pow calculation using the output of the other loops
	pow = max*min;
	
	// Display Results
	document.getElementById("max1").innerHTML = max;
	document.getElementById("max2").innerHTML = max;
	document.getElementById("min1").innerHTML = min;
	document.getElementById("min2").innerHTML = min;
	document.getElementById("pow1").innerHTML = pow;
	document.getElementById("pow2").innerHTML = pow;

}

function displayMaxMinPowUsingMath() {
	var max = Math.max.apply(Math, myArray);
	var min = Math.min.apply(Math, myArray);
	var pow = Math.pow(max, min);

	// Display Results
	document.getElementById("max3").innerHTML = max;
	document.getElementById("min3").innerHTML = min;
	document.getElementById("pow3").innerHTML = pow;
}

function launcher() {
    displayItems();
	displayMaxMinPow();
	displayMaxMinPowUsingMath();
}