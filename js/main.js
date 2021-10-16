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
    $(".header-nav").fadeOut(100);
    $("body").removeClass("noscroll");
  });
}

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var mvH = $('#mainvisual').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= mvH){//mainvisualの高さ以上になったら
			$('.header-width').addClass('fixed');//fixedというクラス名を付与
		}else{
			$('.header-width').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

//スライダー（slick）の記述
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる←これないとスムーズに流れない！！！
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});
