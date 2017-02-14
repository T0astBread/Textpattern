/**
 * Created by T0astBread on 08.10.2016.
 */

function scrollableVert()
{
    return document.getElementById("textContainer").scrollHeight > document.documentElement.clientHeight;
}

function changeStyleIfRequired()
{
    var clazz;

    if(scrollableVert())
    {
        clazz = "centered-horizontally";
    }
    else
    {
        clazz = "centered";
    }

    document.getElementById("textContainer").setAttribute("class", clazz);

}