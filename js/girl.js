//获取第一个p元素
const ct = document.querySelector("p");
//给p元素添加事件监听器
ct.addEventListener("click",function () {
    //弹出对话框，prompt是window对象的一个方法
    let name = prompt("输入一个新的名字");
    ct.textContent = "玩家：" + name;
});
//给document增加一个事件 dom内容加载后
document.addEventListener("DOMContentLoaded",function () {
    //获取页面所有button得到一个数组
    let buttont = document.querySelectorAll("button");
    //遍历数组
    for(let i =0; i < buttont.length; i++){
        //给按钮增加单击事件
        buttont[i].addEventListener("click",createp);
    }

    function createp() {
        //创建一个p元素
        let p = document.createElement("p");
        p.textContent = "你点击了这个按钮";
        //将p元素添加到body里，作为孩子节点
        document.body.appendChild(p);
    }
});