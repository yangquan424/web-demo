let MyImg = document.querySelector('img');
MyImg.noclink = function () {
    let Mysrc = MyImg.getAttribute('src');
    if (Mysrc === '../picture/20190527150308.png'){
        MyImg.getAttribute('src','../picture/20190527175633.png');
    }else {
        MyImg.getAttribute('src','../picture/20190527150308.png');
    }
}