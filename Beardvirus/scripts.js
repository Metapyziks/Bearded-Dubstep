function newLine()
{
	document.write("<br/>");
}


function writeLine(text)
{
	document.write(text);
	newLine();
}


function writeImg(url)
{
	document.write("<img src=\"" + url + "\"/>");
}


function writeImgLine(url)
{
	writeImg(url);
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
writeImgLine("http://i.imgur.com/ydR8Dch.png");
writeLine("<b>Just kidding..</b>");
writeManyImgRec(1, "http://i.imgur.com/8WQA8A4.png");
writeManyImgFor(1, "http://i.imgur.com/RPzwsoE.png");
writeManyImgRec(1, "http://i.imgur.com/8WQA8A4.png");
writeManyImgFor(1, "http://i.imgur.com/RPzwsoE.png");
writeManyImgRec(1, "http://i.imgur.com/8WQA8A4.png");
writeManyImgFor(1, "http://i.imgur.com/RPzwsoE.png");

function randomFace()
{
	writeImg("http://i.imgur.com/8WQA8A4.png");
}

window.setInterval(randomFace, 16.66);