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

function writeManyImg(amount, url)
{
	if(amount>0)
	{
		writeImgLine(url);
		writeManyImg(amount-1, url);
	}
}


writeLine("James is a fetus");
writeImgLine("http://i.imgur.com/ydR8Dch.png");
writeLine("<b>Just kidding..</b>");
writeManyImg(2, "http://i.imgur.com/8WQA8A4.png");
