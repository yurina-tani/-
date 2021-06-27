'use strict';


//要素ふわっと出す設定

$(function(){
    ScrollReveal().reveal('#about', { duration: '1000', viewFactor: '0.5', reset: false});
});

$(function(){
    ScrollReveal().reveal('.relative', { duration: '1000', viewFactor: '0.5', reset: false});
});

$(function(){
    ScrollReveal().reveal('#products', { duration: '300', viewFactor: '0.1', reset: false});
});

$(function(){
    ScrollReveal().reveal('#news', { duration: '1000', viewFactor: '0.5', reset: false});
});


//スライドショー

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 5,//スライドを画面に5枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
        {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
                slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1,//スライドを画面に1枚見せる
                slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
            }
        }
    ]
});



