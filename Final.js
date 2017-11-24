var $ = function(id) {return document.getElementById(id);}
var myWindow = function()
{

    resumeName = $("name").value;
	resumeAddress = $("homeAddress").value;
	resumePhone = $("phoneNumber").value;
	resumeEmail = $("eMail").value;
	resumePersonal = $("personal").value;
	resumeCareer = $("career").value;
	resumeEducation = $("education").value;
	resumeEmployment = $("employment").value;
	resumeEmployment2 = $("employment2").value;
    myText = ("<html>\n<head>\n<title>Resume</title>\n</head>\n<body>\n");
    myText += ("<header>" + "Resume" + "</header>");
	myText += ("<br>");
	myText += (resumeName);
	myText += ("<br>");
	myText += (resumeAddress);
	myText += (" / ");
	myText += (resumePhone);
	myText += ("<br>");
	myText += (resumeEmail);
	myText += ("<br>");
	myText += ("=====================================================");
	myText += ("<br>");
	myText += ("Personal Information: " +  resumePersonal);
	myText += ("<br>");
	myText += ("Career Objectives: " + resumeCareer);
	myText += ("<br>");
	myText += ("Educational Background: " + resumeEducation);
	myText += ("<br>");
	myText += ("Recent Employment: " + resumeEmployment);
	myText += ("<br>");
	myText += ("Recent Employment: " + resumeEmployment2);
    myText += ("</body>\n</html>");

    resumeWindow = window.open('about:blank','myPop','width=1000,height=600,left=400,top=400');
    resumeWindow.document.write(myText);
}
function HeaderInformation () 
	{
 	 	
  		 window.document.getElementById("myName").innerHTML = "<h2>Ahmad Omar</h2>";
  		 window.document.getElementById("myCourseSection").innerHTML = "<h3>WEB 115 Section 4101</h3>";
  		 
		 window.document.getElementsByTagName("h1")[0].style.textAlign = "center";
		
		 window.document.getElementsByTagName("h2")[0].style.color = "red";
		 window.document.getElementsByTagName("h2")[0].style.fontFamily = "Tahoma";
		 window.document.getElementsByTagName("h2")[0].style.textAlign = "center";
		 
		 window.document.getElementsByTagName("h3")[0].style.color = "red";
		 window.document.getElementsByTagName("h3")[0].style.fontFamily = "Garmond";
		 window.document.getElementsByTagName("h3")[0].style.textAlign = "center";
		 window.document.getElementsByTagName("h3")[0].style.fontStyle = "italic";
	}
function checkEmail () 
{
	var id = "eMail";
	var message = "Invaild E-Mail please insert E-Mail Ex:happy1@gmail.com";
	var eMail = window.document.getElementById(id).value;
  
    if (isEmail(eMail)) 
	{ 
	
		displayError(id, "pass"); 

	} 
	else 
	{ 
		
		displayError(id, "fail", message); 
	
	}
	

function isEmail (eMail) 
	{
		if (eMail.length == 0) return false;
		var parts = eMail.split("@");
		if (parts.length != 2) return false;
		if (parts[0].length > 64) return false;
		if (parts[1].length > 255) return false;
	
		var address =
			"(^[\\w!#$%&'*+/=?^`{|}~-]+(\\." + "[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
		var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
		var localPart = new RegExp( address + "|" + quotedText );
		if ( !parts[0].match(localPart) ) {return false; }
	 
	
		return true;
	
	}
}
function displayError (id, status, message) {
  var errorId = id + "Message";
 
  if (status == "fail") 
	{
		alert(message);
	} 
	else 
	{
		
	}
}
function phoneCheck ()
{
	var id = phoneNumber;
	var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
	var message = "Invaild phone number Ex 555-555-5555";
	
	if (phoneNumber == id)
	{
		displayError(id, "pass"); 
	}
	else 
	{
		alert(message); 
	}
}
function resetForm() {
  window.location.reload();
}



	
  window.onload = function()
  {		
   HeaderInformation();
   $("myButton").onclick = myWindow;
   $("myButton2").onclick = resetForm;
   window.document.getElementById("eMail").onblur = checkEmail; 
   window.document.getElementById("phoneNumber").onblur = phoneCheck;
  }