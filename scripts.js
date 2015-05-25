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
writeImgLine("http://i.imgur.com/ydR8Dch.png", "face");
writeLine("<b>Just kidding..</b>");
writeImgLine("http://www.everydaydevotions.com/wp-content/uploads/2015/01/surprise.jpg", "anything");
document.write("_____________");
writeImgLine("http://i.imgur.com/ydR8Dch.png", "surprised");
writeImgLine("http://i.imgur.com/YSbroE1.png", "bear");
writeLine("Or was I...?");
writeImgLine("http://images2.layoutsparks.com/1/84785/fetus-baby-cute-image.png", "anything")
writeImgLine("http://i.imgur.com/Rx747jy.jpg", "charlie");

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

window.setInterval(randomFace, 300, "bear", "http://i.imgur.com/i2sdhYE.png", "http://i.imgur.com/i2sdhYE.png");

window.setInterval(randomFace, 100, "charlie", "http://i.imgur.com/Rx747jy.jpg", "http://i.imgur.com/RUcJWD1.jpg");