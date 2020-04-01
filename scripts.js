function getRandomColor( )
{
var letters= '0123456789ABCDEF';
var color='#';
for (var i=0;  i<6; i++)
{
color+=letters[Math.floor(Math.random()*16)];
}
return color;
}

var createdTime; var clickedTime; var reactionTime;

//Yellow Box
function makeBox()
{
var time=Math.random();
time=time*5000;

	setTimeout(function()
	{
	if (Math.random()>0.5)
{	
document.getElementById("yellowbox").style.borderRadius="100px";
}
else
{
document.getElementById("yellowbox").style.borderRadius="0";
}

var top=Math.random();
top=top*300;


var left=Math.random();
left=left*500;

document.getElementById("yellowbox").style.top=top+"px";
document.getElementById("yellowbox").style.left=left+"px";

	document.getElementById("yellowbox").style.backgroundColor=getRandomColor();
	createdTime=Date.now();
	document.getElementById("yellowbox").style.display="block";
	} , time);
}

document.getElementById("yellowbox").onclick=function()
{
clickedTime=Date.now();
reactionTime=(clickedTime-createdTime)/1000;
document.getElementById("time").innerHTML=reactionTime;
this.style.display="none";
makeBox();
}

makeBox();