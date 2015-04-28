// For prompt.html

function concatenate() {
	var conc1 = prompt("Enter a Value", "0");
	var conc2 = prompt("Enter a Value", "0");
	var concSum = conc1 + conc2;
	window.alert("Your answer is: " + concSum);
}


function calculate() {
	var calc1 = parseInt(prompt("Enter a Value", "0"));
	var calc2 = parseInt(prompt("Enter a Value", "0"));
	calcSum = calc1 + calc2;
    document.getElementById("number").innerHTML = "Your answer is: " + calcSum;
}





// For promptLoop.html

function loopConcatenate() {
	var concSum = "";
	var input;
	for (var i = 0; i <= 2; i++) {
		input = prompt("Enter a value!");
		concSum = concSum + input + " ";
	}

	window.alert("Your answer is: " + concSum);
}

function loopCalculate() {
	var i = 0;
	var sum = 0;

	// do this. while...
    do {
		var input = parseInt(prompt("Enter a Value", "0"));
        sum = sum + input;
        i++;
    }

	// do that, while...
    while(i <= 2);
	document.getElementById("number").innerText = "Your answer is: " + sum;

}



// For conditional.html

function showSkillsIf() {

	var ddl = document.getElementById('ddlJob');
	var item = ddl.options[ddl.selectedIndex].value;

	if (item == 1) {
    	document.getElementById("desc").innerText = "Description: Computer programmers write, test, debug, and maintain the detailed instructions, called computer programs, that computers must follow to perform their functions.";
	}
	else if (item == 2) {
    	document.getElementById("desc").innerText = "Description: Your job might consist of tasks like pulling data out of MySQL databases, becoming a master at Excel pivot tables, and producing basic data visualizations (e.g., line and bar charts).";
	}
	else if (item == 3) {
    	document.getElementById("desc").innerText = "Description: Responsible for designing methods to store, analyze, utilize, and organize data. Sets up computer databases after identifying user needs. Migrate data from old systems to new system.";
	}
	else if (item == 4) {
    	document.getElementById("desc").innerText = "Description: This software engineer sample job description can assist in your creating a job application that will attract job candidates who are qualified for the job.";
	}
}

function showSkillsSwitch() {
switch (document.getElementById('ddlJob').value) {
    case "1": 
        document.getElementById("desc").innerText = "Description: Computer programmers write, test, debug, and maintain the detailed instructions, called computer programs, that computers must follow to perform their functions.";  
        break;   
    case "2": 
        document.getElementById("desc").innerText = "Description: Your job might consist of tasks like pulling data out of MySQL databases, becoming a master at Excel pivot tables, and producing basic data visualizations (e.g., line and bar charts).";
        break;
    case "3": 
        document.getElementById("desc").innerText = "Description: Responsible for designing methods to store, analyze, utilize, and organize data. Sets up computer databases after identifying user needs. Migrate data from old systems to new system.";   
        break;   
    case "4": 
        document.getElementById("desc").innerText = "Description: This software engineer sample job description can assist in your creating a job application that will attract job candidates who are qualified for the job."; 
        break;
	}
}



