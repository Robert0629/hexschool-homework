$(document).ready(function () {


  //swiper
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      autoplay:{
        delay: 2000,
      },
      speed: 3000,
      loop: true,
      effect:'coverflow',

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

    });

    //font-awesome
    $("a[href$='.top']").addClass('fas fa-arrow-circle-up');

    //top button
    $(".top-button a").click(function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },1000 );
    });
    function showBtnCondition() {
      if ($(this).scrollTop() > 500) {
        $('.top-button a').fadeIn();
          } else {
           $('.top-button a').fadeOut();
         }
       }
   $(window).scroll(showBtnCondition);
     
    // 下拉式選單＆二階層選單
    $('.menu>li>a').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).parent().find('.cart').slideToggle();
      $(this).parent().siblings().find('ul').slideUp();

    });
    $('.cart>li>a').click(function (e) { 
      e.preventDefault();
      $(this).parent().find('ul').slideToggle();
      $(this).parent().siblings().find('ul').slideUp();

  });
});