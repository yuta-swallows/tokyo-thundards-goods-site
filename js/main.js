$(function () {
  // slick//
  $(".slide_items").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

  //side-bar// 
  $(window).scroll(function () {

    $("#side-bar").each(function () {

      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 550) {
        $(this).addClass("fixed");
      }

      if (windowHeight > target) {
        $(this).removeClass("fixed")
      }

    });


  });

  //ハンバーガー//
  $(".hamburger").on("click", function () {
    $("header, #side-bar, #side-bar-fixed").toggleClass("open");
  });

  $("#mask").on("click", function () {
    $("header, #side-bar, #side-bar-fixed").removeClass("open");
  });

  $("#side-bar a, #side-bar-fixed a").on("click", function () {
    $("header,#side-bar,#side-bar-fixed").removeClass("open");
  });


  // 商品画像//
  $('.thumbnail-gallery .thumbnail').on('click', function () {

    let newImagePath = $(this).data('full-image');

    $('#main-product-image').fadeOut(150, function () {
      $(this).attr('src', newImagePath).fadeIn(150);
    });

    $('.thumbnail-gallery .thumbnail').removeClass('selected');

    $(this).addClass('selected');
  });
});
//topへ戻る//

let pageTop = $(".page-top a");

$(pageTop).click(function () {
  $("body,html").animate({ scrollTop: 0 }, 500, "swing");
  return false;
});