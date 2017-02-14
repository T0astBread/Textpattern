/**
 * Created by T0astBread on 08.10.2016.
 */

function generate(x, y, space, paragraphs)
{
    for(var i = 0; i < y; i++)
    {
        for(var j = 0; j < x; j++)
        {
            document.getElementById("text").textContent += "This is a " + x + " by " + y + " pattern.";
            if(j != x - 1)
            {
                for(var k = 0; k < space; k++)
                {
                    document.getElementById("text").innerHTML += "&nbsp";
                }
            }
        }
        document.getElementById("text").textContent += String.fromCharCode(10) + String.fromCharCode(13);
    }

    document.getElementById("text").innerHTML += getParagraphsText(paragraphs);
}

function fullGenerate()
{
    var x = window.sessionStorage.getItem("x");
    if(x == null) x = getX();

    var y = window.sessionStorage.getItem("y")
    if(y == null) y = getY();

    var space = window.sessionStorage.getItem("space");
    if(space == null) space = getSpace();

    var paragraphs = window.sessionStorage.getItem("paragraphs");
    if(paragraphs == null) paragraphs = getParagraphs();

    generate(x, y, space, paragraphs);
}

function getX()
{
    return parseInt(prompt("X:", "3"));
}

function getY()
{
    return parseInt(prompt("Y:", "20"));
}

function getSpace()
{
    return parseInt(prompt("Space:", "5"))
}

function getParagraphsText(paragraphs)
{
    var htmlToAdd = "";
    var oneParag = "<pre style='text-align: center'>" + "This text has " + paragraphs + " paragraphs." + String.fromCharCode(10) + String.fromCharCode(13) + "</pre>" + "<pre>" + document.getElementById("text").innerHTML + "</pre>";
    for(var i = 0; i < paragraphs - 1; i++)
    {
        htmlToAdd += oneParag;
    }
    return htmlToAdd;
}

function getParagraphs()
{
    return parseInt(prompt("Paragraphs:", "2"));
}