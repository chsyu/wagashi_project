// spring-animation.js 文件内容
window.onload = function() {
    // 添加一个 CSS 类，以触发淡出和平移效果
    document.body.classList.add('fade-in');

    // 获取和菓子图片元素
    var wagashiImages = document.querySelectorAll('.image_wagashi_spring');

    // 执行平移效果
    setTimeout(function() {
        wagashiImages.forEach(function(image) {
            image.style.marginBottom = '-50px';
        });
    }, 500); // 500 毫秒是淡出效果的时间

    // 过渡结束后，移除动画类
    setTimeout(function() {
        document.body.classList.remove('fade-out');
    }, 1000); // 1000 毫秒是淡出和平移效果的总时间
}


// // 当点击图片时显示对应的弹出窗口
// wagashiImages.forEach(function(image) {
//     image.addEventListener('click', function() {
//         var popupId = image.getAttribute('data-popup-id');
//         var popup = document.getElementById(popupId);
//         popup.style.display = 'block';
//     });
// });

var wagashi_introduction=document.querySelector("wagashi_introduction1");

wagashi_introduction1.onclick = function () {
    // let wagashi_introduction= wagashi_introduction1.setAttribute
}