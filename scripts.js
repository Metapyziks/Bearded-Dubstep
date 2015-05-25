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
	document.write("<img src=\"");
	document.write(url);
	document.write("\"/>");
}


function writeImgLine(url)
{
	writeImg(url);
	newLine();
}


writeLine("James is a fetus");
writeImgLine("http://i.imgur.com/ydR8Dch.png");
writeLine("<b>Just kidding..</b>");
