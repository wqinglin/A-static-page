// 7.tab切换
(function(){
	let titles = document.querySelectorAll('.title a');
	let contents = document.querySelectorAll('.tab-content li');
	for(let i = 0; i < titles.length; i++){
		titles[i].onclick = function(){
			for(let j = 0; j <titles.length; j++){
				titles[j].className = j == i ? 'active':'';
				contents[j].className = j == i ? 'cons show':'tab-pane cons';
			}
		}
	}
}())

//8.登录页中的表单验证

let frm = document.querySelector('.login-form');
let user = document.querySelector('#user');
let pwd = document.querySelector('#pwd');
let isUser = false;
let isPwd = false;

user.onblur = function () {
    // 验证用户名的合法性
    // 1. user 的 value 值
    let val = this.value;
    // 2. msg 获得dom
    let msg = this.nextElementSibling;
    // 3. 正则验证
    let reg = /^[\w\u4e00-\u9fa5]{4,10}$/;
    if (val.length == 0) {  // 不能为空
        msg.innerHTML = '用户名不能为空';
        msg.className = 'msg red';
        isUser = false;
    } else if (!reg.test(val)) {  // 正则验证
        msg.innerHTML = '用户名不合法4-10位';
        msg.className = 'msg red';
        isUser = false;
    } else {
        msg.innerHTML = '用户名合法';
        msg.className = 'msg green';
        isUser = true;
    }

}
pwd.onblur = function () {
    // 验证用户名的合法性
    let val = this.value;
    let msg = this.nextElementSibling;
    let reg = /^[\w-]{6,10}$/;

    if (val.length == 0) {  // 不能为空
        msg.innerHTML = '密码不能为空';
        msg.className = 'msg red';
        isPwd = false;
    } else if (!reg.test(val)) {  // 正则验证
        msg.innerHTML = '密码不合法6-10位';
        msg.className = 'msg red';
        isPwd = false;
    } else {
        msg.innerHTML = '密码合法';
        msg.className = 'msg green';
        isPwd = true;
    }

}
frm.onsubmit = function () {
    if (!isUser || !isPwd) {
        return false; // 验证不通过阻止表单提交
    }
}