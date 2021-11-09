$(function(){
    /テキスト文字色変更/ 
    $('li').hover(
        function(){
            $(this).css('color','red');

        },
        function(){
            $(this).css('color','');

        }
    );

    $('.insta-link p,i').hover(
        function(){
            $(this).css('color','red');

        },
        function(){
            $(this).css('color','');

        }
    );

    /リンク先へのスクロール：PC/ 
    $('.header-logo1,.header-logo').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },'slow');
    })

    $('#ul a').click(function(){
        var id =$(this).attr('href');
        var position= $(id).offset().top;
        
        $('html,body').animate({
            'scrollTop':position
        },500);
    });

    /リンク先へのスクロール：スマホ [about buy top]の順/ 
    $('.sp_menu-about').click(function(){
        var id=$('#main-wrapper').offset();
        var position=$('#main-wrapper').offset().top;

        $('html,body').animate({
            'scrollTop':position
        },500);
    })

    $('.sp_menu-2').click(function(){
        var id=$('#links-wrapper').offset();
        var position=$('#links-wrapper').offset().top;

        $('html,body').animate({
            'scrollTop':position
        },500);
    })

    $('.sp_menu-3').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },500);
    })

    
    $('.example-1').each(function() {
        let sample1_off = $(this).attr('src');
        let sample1_on = $(this).attr('src').replace('off', 'on');
        $(this).hover(
        function () {
        $(this).attr('src', sample1_on);
        },
        function () {
        $(this).attr('src', sample1_off);
        }
        );
        });
    
    
    // float-menuのフェードイン
    var appear = false;
    var pagetop = $('#float-icon');
    $(window).scroll(function () {
     if ($(this).scrollTop() > 2600) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '-20px' //右から0pxの位置に
        }, 600); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-300px' //右から-50pxの位置に
        }, 600); //0.3秒かけて隠れる
      }
    }
  });
//   pagetop.click(function () {
    // $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    // return false;
//   });



});