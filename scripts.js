function newLine()
{
	document.write("<br/>");
}


function writeLine(text)
{
	document.write(text);
	newLine();
}


function writeImg(url, name)
{
	document.write("<img id=\"" + name + "\" src=\"" + url + "\"/>");
}


function writeImgLine(url, name)
{
	writeImg(url, name);
	newLine();
}

function writeManyImgRec(amount, url)
{
	if(amount>0)
	{
		writeImgLine(url);
		writeManyImgRec(amount-1, url);
	}
}


function writeManyImgFor(amount, url)
{
	for (var index = 0; index < amount; index = index + 1) 
	{
		writeImgLine(url);
	}
}


writeLine("James is a fetus");
writeImgLine("http://i.imgur.com/ydR8Dch.png", "surprised");
writeLine("<b>Just kidding..</b>");
writeImg("http://i.imgur.com/ydR8Dch.png", "face");

var numberOfFaces = 0;
function randomFace()
{
	var image = document.getElementById("face");
	
	numberOfFaces = numberOfFaces + 1;
	
	if(numberOfFaces%2 == 0)
	{
		image.setAttribute("src", "http://i.imgur.com/8WQA8A4.png");
	}
	else
	{
		image.setAttribute("src", "http://i.imgur.com/RPzwsoE.png");
	}
}

window.setInterval(randomFace, 16.66);