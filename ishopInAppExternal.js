/**
 * 
 */

console.log ("value "+ (document.body.innerHTML).indexOf('flipkart'));

var a = document.createElement('a');
var linkText = document.createTextNode("All Shops");
a.appendChild(linkText);
a.href = "iShopCloseInApp.html";
var inAppBody =  document.getElementsByTagName('body')[0];
inAppBody.insertBefore(a , inAppBody.firstChild);

var aFlipkart = document.createElement('a');
var aFlipkartLinkText = document.createTextNode("Flipkart");
aFlipkart.appendChild(aFlipkartLinkText);
aFlipkart.href = "https://dl.flipkart.com/dl/?affid=adzhomein&amp;sitevariant=desk";
inAppBody.insertBefore(aFlipkart , inAppBody.firstChild);

var aAmazon = document.createElement('a');
var linkTextaAmazon = document.createTextNode("Amazon");
aAmazon.appendChild(linkTextaAmazon);
aAmazon.href = "http://amazon.in";
inAppBody.insertBefore(aAmazon , inAppBody.firstChild);



/*if ((document.body.innerHTML).indexOf('flipkart') == -1) {
	
	console.log("Inside flipkart---");
	
	document.body.innerHTML = "<a href='iShopCloseInApp.html'>All Shops</a>" +
							  //"<a href=\"#\" onclick=\"window.location.href=&apos;https://dl.flipkart.com/dl/?affid=adzhomein&amp;sitevariant=desk&apos;  ; return false;  \">Flipkart</a>" +
							  //"<a href=\"#\" onclick=\"window.location.href=&apos;https://m.ebay.in/&apos;  ; return false;  \">Ebay</a>" +
							  document.body.innerHTML;
	
}
else if ((document.body.innerHTML).indexOf('amazon') == -1) {
	
	console.log("Inside flipkart---");
	
	document.body.innerHTML = "<a href='iShopCloseInApp.html'>All Shops</a>" +
							  "<a href=\"#\" onclick=\"window.location.href=&apos;http://amazon.in&apos;  ; return false;  \">Amazon</a>" +
							  "<a href=\"#\" onclick=\"window.location.href=&apos;https://m.ebay.in/&apos;  ; return false;  \">Ebay</a>" +
							  document.body.innerHTML ;
} */
