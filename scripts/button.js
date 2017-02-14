/**
 * Created by T0astBread on 09.10.2016.
 */

//This is called before the PHP code
function onClick()
{
    window.sessionStorage.setItem("x", document.getElementById("x").value);
    window.sessionStorage.setItem("y", document.getElementById("y").value);
    window.sessionStorage.setItem("space", document.getElementById("space").value);
    window.sessionStorage.setItem("paragraphs", document.getElementById("paragraphs").value);
    window.location = "../display/";
}