$(function(){
  setTimeout(removeLoader, 3000);
});

function removeLoader(){
  $('.loader_in').hide();
  $('.loader').fadeOut(500);
  $('#index').addClass('load-end');
}

$(function () {
    var swiper = new Swiper('.slide ', {
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 3200,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slide .swiper-button-next',
            prevEl: '.slide .swiper-button-prev',
        },
    });
});

$(function () {
  var swiper = new Swiper('.slide2 ', {
      speed: 500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 3200,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
          nextEl: '.slide2 .swiper-button-next',
          prevEl: '.slide2 .swiper-button-prev',
      },
  });
});

$('.menu_container>a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
    return false;
});

var swiper = new Swiper(".eventswiper", {
    slidesPerView: 3.5,
    spaceBetween: 35,
    speed: 500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 2000,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
      },
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".eventswiper .swiper-button-next",
      prevEl: ".eventswiper .swiper-button-prev",
    },
  });

  var swiper = new Swiper(".eventswiper2", {
    slidesPerView: 1.5,
    spaceBetween: 35,
    speed: 500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".eventswiper2 .swiper-button-next",
      prevEl: ".eventswiper2 .swiper-button-prev",
    },
  });

  $(function () {
    $('.pop .popin1').click(function () {
        $('.popup1').fadeIn();
    });

    $('.popup1 a').click(function () {
        $('.popup1').fadeOut();
    });
});

$(function () {
    $('.pop .popin2').click(function () {
        $('.popup2').fadeIn();
    });

    $('.popup2 a').click(function () {
        $('.popup2').fadeOut();
    });
});

$(function () {
    var swiper = new Swiper('.phoneswiper ', {
        speed: 500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2000,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.phoneswiper .swiper-button-next',
            prevEl: '.phoneswiper .swiper-button-prev',
        },
    });
  });

  $(function () {
    $(".q_a li").click(function () {
      $(this).children("div").slideToggle()
      $(this).siblings().children("div").slideUp();
      $(this).toggleClass("on").siblings().removeClass("on")
    });
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
  });

  $('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });