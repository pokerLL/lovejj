window.onload = choosePic;
function choosePic() {
    var myimg = new Array("图片/bg/1.png","图片/bg/2.png","图片/bg/3.png");
    var randomNum = Math.floor((Math.random() * myimg.length));
    document.getElementById("myPicture").src = myimg[randomNum];
	
}
