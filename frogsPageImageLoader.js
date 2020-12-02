document.write("<div>"+window.innerHeight+"</div>");

while(window.innerHeight + window.scrollY >= document.body.offsetHeight)
{
	document.write("<div>Test</div>");
}

document.addEventListener("onscroll", function(){
	document.write("<div>EEEEE</div>");
});



function AddFrogImage()
{

}