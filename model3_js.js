function slide(a,n)
{
	document.getElementsByClassName("div_label")[n].value=a;
}

function slideout(a,n)
{
	document.getElementsByClassName("div_label")[n].value=a;
}

function bgcolor(c,bn)
{
var pb=bn-1;
if(bn>pb)
{
document.getElementsByClassName("slide_btn")[bn].style.background=c;
document.getElementsByClassName("slide_btn")[pb].style.background="transparent";
}	
else
{
pb=bn+1;
document.getElementsByClassName("slide_btn")[bn].style.background="transparent";
document.getElementsByClassName("slide_btn")[pb].style.background=c;
}
}

function performance()
{
	document.getElementById("bat").innerHTML="Long range";
	document.getElementById("wie").innerHTML="4,048 lbs "
	document.getElementById("acc").innerHTML="3.1s 0-60 mph* <br>*with rollout subtracted"
	document.getElementById("car").innerHTML="23 cu ft"
	document.getElementById("ran").innerHTML="315 miles (EPA est.)"
	document.getElementById("dis").innerHTML="15inch Center Touchscreen"
	document.getElementById("dr").innerHTML="Dual Motor All-Wheel Drive"
	document.getElementById("sp").innerHTML="250 kW max; Pay Per Use"
	document.getElementById("st").innerHTML="5 Adults"
	document.getElementById("oc").innerHTML="11.5 kW max (48A)"
	document.getElementById("wh").innerHTML="20 inch"
	document.getElementById("war").innerHTML="Basic Vehicle - 4 years or 50,000<br> mi, whichever comes first<br>Battery & Drive Unit - 8 years or <br>120,000 mi, whichever comes <br>first"
}


function long()
{
	document.getElementById("bat").innerHTML="Long range";
	document.getElementById("wie").innerHTML="4,048 lbs "
	document.getElementById("acc").innerHTML="4.2s 0-60 mph"
	document.getElementById("car").innerHTML="23 cu ft"
	document.getElementById("ran").innerHTML="358 miles (EPA est.)"
	document.getElementById("dis").innerHTML="15inch Center Touchscreen"
	document.getElementById("dr").innerHTML="Dual Motor All-Wheel Drive"
	document.getElementById("sp").innerHTML="250 kW max; Pay Per Use"
	document.getElementById("st").innerHTML="5 Adults"
	document.getElementById("oc").innerHTML="11.5 kW max (48A)"
	document.getElementById("wh").innerHTML="18 or 19 inch"
	document.getElementById("war").innerHTML="Basic Vehicle - 4 years or 50,000<br> mi, whichever comes first<br>Battery & Drive Unit - 8 years or <br>120,000 mi, whichever comes <br>first"
}



function rear()
{
	document.getElementById("bat").innerHTML="standard range";
	document.getElementById("wie").innerHTML="3,862 lbs "
	document.getElementById("acc").innerHTML="5.8s 0-60 mph"
	document.getElementById("car").innerHTML="23 cu ft"
	document.getElementById("ran").innerHTML="272 miles (EPA est.)"
	document.getElementById("dis").innerHTML="15inch Center Touchscreen"
	document.getElementById("dr").innerHTML="Rear-Wheel Drive"
	document.getElementById("sp").innerHTML="170 kW max; Pay Per Use"
	document.getElementById("st").innerHTML="5 Adults"
	document.getElementById("oc").innerHTML="7.6 kW max (32A)"
	document.getElementById("wh").innerHTML="18 or 19 inch"
	document.getElementById("war").innerHTML="Basic Vehicle - 4 years or 50,000<br> mi, whichever comes first<br>Battery & Drive Unit - 8 years or <br>100,000 mi, whichever comes <br>first"
}


function compare()
{
  var myWindow = window.open("","xs","width=600,height=750,left=500,top=100");
  myWindow.document.write("<img src='compare_model3.png' height=100% width=100%>");
  
}