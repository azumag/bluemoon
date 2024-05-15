$(function () {
    $('.slider').slick({
        arrows: false, // 前・次のボタンを表示しない
        dots: false, // ドットナビゲーションを表示しない
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000, // スライドさせるスピード（ミリ秒）
        cssEase: 'linear',
        slidesToShow: 1, // 表示させるスライド数
        variableWidth: true, // スライド幅の自動計算を無効化
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
    });
});