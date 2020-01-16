

// #リンクのスムーズスクロール//
// #で始まるリンクをクリックしたら実行されます//
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('.hamburger_nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('.hamburger_nav').addClass('open');
  }
});
$(function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('.hamburger_nav').removeClass('open');
  }
});


$(window).on('load resize',function(){
  //ウィンドウの高さを取得する
  var targetY = $(window).height();

  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.js-scroll').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing');
    return false;
  });
});
