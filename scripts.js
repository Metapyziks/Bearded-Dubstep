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
writeImg("http://i.imgur.com/ydR8Dch.png", "surprised");
writeImgLine("http://i.imgur.com/4eoCFHS.png", "surprised");
writeLine("<b>Just kidding..</b>");
writeImg("http://i.imgur.com/ydR8Dch.png", "face");

var numberOfFaces = 0;
function randomFace(imageToReplace, imageA, imageB)
{
	var image = document.getElementById(imageToReplace);
	
	numberOfFaces = numberOfFaces + 1;
	
	if(numberOfFaces%2 == 0)
	{
		image.setAttribute("src", imageA);
	}
	else
	{
		image.setAttribute("src", imageB);
	}
}

window.setInterval(randomFace, 300, "surprised", "http://i.imgur.com/8WQA8A4.png", "http://i.imgur.com/RPzwsoE.png");

window.setInterval(randomFace, 777, "face", "http://i.imgur.com/ydR8Dch.png", "http://i.imgur.com/B6Ib0wC.png");
