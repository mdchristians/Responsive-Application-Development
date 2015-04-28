<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">

</script>

<html lang="en-us">
<head runat="server">
    <title>FMIS 3295 Homework Assignments</title>
    <meta name="author" content="Matt Christians">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">

    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.5.0/build/reset/reset-min.css">
	<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
	<link rel="stylesheet" href="css/MenuMatic.css" type="text/css" media="screen">
	<!--[if lt IE 7]>
		<link rel="stylesheet" href="css/MenuMatic-ie6.css" type="text/css" media="screen">
	<![endif]-->

    <!-- Load the Mootools Framework -->
	<script src="http://www.google.com/jsapi"></script>
    <script>google.load("mootools", "1.2.1");</script>	
	
	<!-- Load the MenuMatic Class -->
	<script src="js/MenuMatic_0.68.3.js"></script>
	
	<!-- Create a MenuMatic Instance -->
	<script>
	    window.addEvent('domready', function () {
	        var myMenu = new MenuMatic();
	    });		
	</script>
</head>
<body>
<div id="container" >
   		
   	<a id="logo" href="http://umd-fmis.d.umn.edu/radteam16/">Logo</a>
   		
    <!--$$$$ Instruction #1: Use appropriate labels and URLs for the menu items-->

	<!-- BEGIN Menu -->
	<ul id="nav">

        <!--No URL for this hyperlink-->
		<li><a href="#" target="_blank">Homework</a>
		
			<ul>

				<li><a href="#" target="_blank">Homework 1</a>
					<ul>
						<li><a href="http://umd-fmis.d.umn.edu/radteam16/rwd/test.aspx" target="_blank">Problem 1 (not really)</a></li>
						<li><a href="HW1/hw1p2.html" target="_blank">Problem 2</a></li>
						<li><a href="HW1/hw1p3.html" target="_blank">Problem 3</a></li>
					</ul>
				</li>
                <li>
                    <a href="#" target="_blank">Homework 2</a>
                    <ul>
                        <li><a href="HW2/prompt.html" target="_blank">Problem 1</a></li>
                        <li><a href="HW2/promptLoop.html" target="_blank">Problem 2</a></li>
                        <li><a href="HW2/conditional.html" target="_blank">Problem 3</a></li>
                        <li><a href="HW2/calculator.html" target="_blank">Problem 4</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" target="_blank">Homework 3</a>
                    <ul>
                        <li><a href="HW3/random.html" target="_blank">Problem 1</a></li>
                        <li><a href="HW3/crud.html" target="_blank">Problem 2</a></li>
                        <li><a href="HW3/mylist.html" target="_blank">Problem 3 { EC }</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" target="_blank">Homework 4</a>
                    <ul>
                        <li><a href="#" target="_blank">Problem 1</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" target="_blank">Homework 5</a>
                    <ul>
                        <li><a href="HW5/index.html" target="_blank">Cities, MyLocation, and Tracking</a></li>
                    </ul>
                </li>
			</ul>
		</li>
	</ul>
	
	<!-- END Menu -->
        
    <!--$$$$ Instruction #2: Replace "Jane Doe" with your name-->
	<div id="content">	   	 
		<h1>Matt Christians: Homework Assignments</h1>
		<p class="colorChange">FMIS 3295 Introduction to Responsive App Development.</p>
            <p>Responsive web design is about creating websites and  
            web apps which automatically adjust themselves to provide
            an optimal viewing experience across a wide range of devices.              
        </p>
    </div>
    		  
</div>

<!--$$$$ Instruction #3: Leave the following footer intact-->

<div id="footer" > <!-- Keep this footer -->
    <a href="#" target="_blank" title="MenuMatic home page" onclick="return false;">MenuMatic</a> 
    by Jason J. Jaeger at 
    <a href="#" target="_blank" title="greengeckodesign" onclick="return false;">greengeckodesign.com</a>
</div>
</body>
</html>
