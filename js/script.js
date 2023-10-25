window.onload = function() {
    // 添加一个 CSS 类，以触发淡出和平移效果
    document.body.classList.add('fade-in');

    // 获取元素
    var wagashiImages = document.querySelectorAll('.maincotent');

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

function navigateToSpringPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 spring.html
    setTimeout(function() {
        // window.location.href = "spring.html";
        window.open("spring.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}
function navigateToFallPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 fall.html
    setTimeout(function() {
        // window.location.href = "fall.html";
        window.open("fall.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}

function navigateToSummerPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 summer.html
    setTimeout(function() {
        // window.location.href = "summer.html";
        window.open("summer.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}
function navigateToWinterPage() {
    // 添加一个 CSS 类，以触发淡出过渡效果
    document.body.classList.add('fade-out');

    // 在过渡结束后，页面导航到 winter.html
    setTimeout(function() {
        // window.location.href = "winter.html";
        window.open("winter.html", "_blank");
    }, 500); // 500 毫秒是过渡效果的时间
}

// four seasons animation
$(document).ready(function () {



let openingAnimWindow = document.querySelector("#spring")
let openingAnimData = {
    container: openingAnimWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/spring.json'
};
let openingsummerWindow = document.querySelector("#summer")
let openingsummerData = {
    container: openingsummerWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/summer.json'
};
let openingfallWindow = document.querySelector("#fall")
let openingfallData = {
    container: openingfallWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/fall.json'
};
let openingwinterWindow = document.querySelector("#winter")
let openingwinterData = {
    container: openingwinterWindow,
    animType:"svg",
    loop: false,
    prerender: true,
    autoplay: false,
    path: 'json/winter.json'
};
let openingAnim = bodymovin.loadAnimation(openingAnimData);
let openingsummerAnim = bodymovin.loadAnimation(openingsummerData);
let openingfallAnim = bodymovin.loadAnimation(openingfallData);
let openingwinterAnim = bodymovin.loadAnimation(openingwinterData);

$('#spring').on('mouseenter',function () {
    openingAnim.stop();
    openingAnim.play();
}).on('mouseleave',function () {
    openingAnim.pause();
});
$('#summer').on('mouseenter',function () {
    openingsummerAnim.stop();
    openingsummerAnim.play();
}).on('mouseleave',function () {
    openingsummerAnim.pause();
});
$('#fall').on('mouseenter',function () {
    openingfallAnim.stop();
    openingfallAnim.play();
}).on('mouseleave',function () {
    openingfallAnim.pause();
});
$('#winter').on('mouseenter',function () {
    openingwinterAnim.stop();
    openingwinterAnim.play();
}).on('mouseleave',function () {
    openingwinterAnim.pause();
});

});

// menu animation
let menu_windowcontent = document.querySelector("#menu_windowcontent");
let menubottomrect = document.querySelector("#menubottomrect");
let menutoprect = document.querySelector("#menutoprect");
// let link1 = document.querySelector('#link1');
// let link2 = document.querySelector('#link2');
// let link3 = document.querySelector('#link3');
// let link4 = document.querySelector('#link4');
let clickstate = 0;
// menubottomrect.onclick = function(){
//     if(clickstate == 0) {
//         let t1=gsap.timeline();
//         t1.fromTo(".menu_windowcontent", 1, {className:"menu_windowcontent"},{className: "+=active"});
//         t1.fromTo("#menubottomrect",1,{y:0},{y:400});

//         t1.play();
//         // gsap.fromTo("#menubottomrect",1,{y:0},{y:400});
//         // gsap.to(".menu_windowcontent", 0.5, {className: "+=active"});
//         clickstate = 1; 
//     }else{
//         gsap.fromTo("#menubottomrect",1,{y:400},{y:0});
//         gsap.fromTo("#menu_windowcontent",1,{height:300},{height:0});
//         t1.fromTo(".menu_windowcontent", 1, {className:"menu_windowcontent"},{className: "-=active"});
//         clickstate = 0; 
//     }
//     // if(menu_windowcontent.style.display=='none'){
//     //     menu_windowcontent.style.display='block';
       
//     // }else{
//     //     menu_windowcontent.style.display='none';
        
//     // }
// };
// menutoprect.onclick = function(){
//     if(clickstate == 0) {
//         gsap.fromTo("#menubottomrect",1,{y:0},{y:400});
//         // gasp.fromTo("#menu_windowcontent",1,{height:0},{height:300});
//         clickstate = 1; 
//     }else{
//         gsap.fromTo("#menubottomrect",1,{y:400},{y:0});
//         // gasp.fromTo("#menu_windowcontent",1,{height:300},{height:0});
//         clickstate = 0; 
//     }
//     // if(menu_windowcontent.style.display=='none'){
//     //     menu_windowcontent.style.display='block';
       
//     // }else{
//     //     menu_windowcontent.style.display='none';
        
//     // }
// };

$('#menutoprect').on('click',function () {
    $('#menu_windowcontent').slideToggle(500);
    // $('#menubottomrect').toggleSlide();
});


// let click =true;
// gasp.registerPlugin(Flip);
// const menubottomrect = $("#menubottomrect");
// $(document).click(function(e)) {
//     const state = Flip.getState("#menubottomrect");
//     if(click) {

//     }
// }

// gasp.fromTo('menubottomrect',1,{},{})
// 先執行完展開，再visible

