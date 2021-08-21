// ハンバーガーメニューの記述
$(".burger-btn").on('click',function(){
	$(this).toggleClass('cross');
	$(".header-nav").fadeToggle(500);
  $("body").toggleClass('noscroll');
});
// // ナビゲーション押した時にメニューを消す
if(window.outerWidth <= 900){
  $(".nav-item>a").on('click',function(){
    $(".burger-btn").removeClass("cross");
    $(".header-nav").fadeOut(500);
    $("body").removeClass("noscroll");
  });
}

