// 1.购物车显示隐藏
let cart = document.querySelector(".cart");
let con = document.querySelector(".con");
let title = document.querySelector(".title");
cart.onclick = function () {
    con.style.display = "block";
    title.className = "title title1";
}
cart.onmouseleave = function () {
    title.className = "title";
    con.style.display = "none"
}

// 2.轮播图
let imgs = document.querySelector('.imgs');
let circlesLi = document.querySelectorAll('.circles li');
let leftbtn = document.querySelector('.left-btn');
let rightbtn = document.querySelector('.right-btn');
let num = 0;
var timer;
let flag = true;
for (let i = 0; i < circlesLi.length; i++) {
    circlesLi[i].onclick = function () {
        num = i;
        changeImg();
    }
}
function interval() {
    timer = setInterval(function () {
        num++;
        changeImg();
    }, 3000);
}
interval();
leftbtn.onclick = function () {
    clearInterval(timer, 3000);
    num--;
    changeImg();
    interval();
};
rightbtn.onclick = function () {
    clearInterval(timer, 3000);
    num++;
    changeImg();
    interval();
};

function changeImg() {
    if (num < 0) {
        num = 4;
    }
    if (num > 4) {
        num = 0;
        imgs.style.left = 0;
    }
    imgs.style.left = -1200 * num + 'px';
    for (let j = 0; j < circlesLi.length; j++) {
        circlesLi[j].className = j == num ? 'active' : '';
    }
}

// 3.左侧二级菜单 
class Tab {
    constructor(title, con, conArr) {
        this.titles = document.querySelectorAll(title);
        this.cons = document.querySelector(con);
        this.conArr = conArr;
    }
    init() {
        var that = this;
        for (let i = 0; i < this.titles.length; i++) {
            this.titles[i].onmouseenter = function () {
                let memus = document.querySelector(".menu-con");
                memus.style.display = "block";
            };
            this.titles[i].onmouseover = function () {
                that.fnChange(i);
            };
        }
    }
    fnChange(i) {
        for (var j = 0; j < this.titles.length; j++) {
            this.titles[j].className = i == j ? 'active' : '';
        }
        this.cons.innerHTML = this.conArr[i];
    }
}
//左侧列表中内容
let conArr = [
    `<li><a>小米10</a></li><li><a>小米11</a></li><li><a>K40游戏增强版</a></li>`,
    `<li><a>小米电视5 Pro 55英寸</a></li><li><a>小米电视5 55英寸</a></li><li><a>小米电视4A60英寸</a></li>`,
    `<li><a>小米笔记本Pro 15</a></li><li><a>RedmiBook Pro 14</a></li><li><a>小米笔记本Pro 14</a></li>`,
    `<li><a>p平衡车</a></li><li><a>滑板车</a></li><li><a>自行车</a></li>`,
    `<li><a>充电器</a></li><li><a>移动电话</a></li><li><a>手机壳</a></li>`,
    `<li><a>剃须刀</a></li><li><a>牙膏</a></li><li><a>体重秤</a></li>`,
    `<li><a>品牌耳机</a></li><li><a>蓝牙耳机</a></li><li><a>运动耳机</a></li>`,
    `<li><a>小书包</a></li><li><a>单肩包</a></li><li><a>双肩包</a></li>`,
    `<li><a>充电器</a></li><li><a>移动电话</a></li><li><a>手机壳</a></li>`,
    `<li><a>剃须刀</a></li><li><a>牙膏</a></li><li><a>体重秤</a></li>`,
];

let tab1 = new Tab('.main-menu li', '.menu-con', conArr).init();
let menu_leave = document.querySelector(".menu");
menu_leave.addEventListener('mouseleave', HideMouseoutHandler);
function HideMouseoutHandler() {
    let menus = document.querySelector(".menu-con");
    menus.style.display = 'none';
    let mainmenu = document.querySelector(".main-menu li.active");
    mainmenu.className = "";
}

//4.下拉列表
let goods = ['全部商品', '空调', '小米11', '小米手机', '风扇', '吸尘器', '洗衣机'];
let keys = document.querySelector('.keys');
let uplist = document.querySelector('.uplist');
let search = document.querySelector('.search-box');
let listbtn = document.querySelector(".search-box .btn");
for (let i = 0; i < goods.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = goods[i];
    uplist.appendChild(li);
}
keys.value = goods[1];
keys.addEventListener('click', clickHandler);
keys.addEventListener('blur', clickHandler1);
function clickHandler() {
    uplist.style.display = 'block';
    keys.style.border = "orange solid 1px";
    uplist.style.border = "orange solid 1px";
    listbtn.style.border = "orange solid 1px";
}
//失去焦点，隐藏橘色边框
function clickHandler1() {
    uplist.style.display = 'none';
    keys.style.border = "";
    uplist.style.border = "";
    listbtn.style.border = "";
}

//滚轮滚动隐藏下拉列表
document.addEventListener("scroll", function (e) {
    e = e || window.event;
    uplist.style.display = 'none';
})
keys.addEventListener('mouseover', HideHandler);
function HideHandler() {
    uplist.style.display = 'none';
}
//mousedown解决下拉选择商品和失去焦点的冲突
uplist.addEventListener('mousedown', menuHandler);
function menuHandler(e) {
    if (e.target.constructor == HTMLUListElement) return;
    keys.value = e.target.innerHTML;
    uplist.style.display = 'none';
    keys.style.border = "";
    uplist.style.border = "";
    listbtn.style.border = "";
}


//5.菜单固定
let mainnav = document.querySelector('.main-wrap');
// 滚动条监听事件
window.onscroll = function () {
    // 1. 获得滚动条垂直坐标
    let sTop = document.documentElement.scrollTop;
    //console.log(sTop);
    if (sTop >= 300) {
        // 菜单固定
        mainnav.className = 'mainnav fixed';
    } else {
        // 菜单不固定
        mainnav.className = 'mainnav';
    }
}


// 6.时间倒计时
function getRevTime() {
    let curd = new Date();
    let curTime = curd.getTime();// 时间戳

    let fd = new Date('2023-05-13 00:00:00');
    let fTime = fd.getTime();// 时间戳
    let sTime = fTime - curTime; //剩余的毫秒数

    // 1.1 将剩余的秒数 转成天数
    let day = Math.floor(sTime / (1000 * 60 * 60 * 24));
    // 1.2 剩余不够一天的毫秒数
    sTime = sTime % (1000 * 60 * 60 * 24);

    // 2.1 将不够一天的剩余的毫秒数 转成小时
    let hours = Math.floor(sTime / (1000 * 60 * 60));
    // 2.2 剩余不够一小时的毫秒数
    sTime = sTime % (1000 * 60 * 60);

    // 3.1 将不够一小时的剩余的毫秒数 转成分
    let minutes = Math.floor(sTime / (1000 * 60));
    // 3.2 剩余不够一分钟的毫秒数
    sTime = sTime % (1000 * 60);

    // 4.1 毫秒数 
    let seconds = Math.floor(sTime / (1000));
    let remaintime1 = document.querySelector(".remaintime1");
    remaintime1.innerHTML = getD(hours);
    let remaintime2 = document.querySelector(".remaintime2");
    remaintime2.innerHTML = getD(minutes);
    let remaintime3 = document.querySelector(".remaintime3");
    remaintime3.innerHTML = getD(seconds);
}
setInterval(getRevTime, 1000);
let remaintime = getRevTime();
function getD(n) {
    if (n < 10) {
        return '0' + n;
    }
    return n;
}








