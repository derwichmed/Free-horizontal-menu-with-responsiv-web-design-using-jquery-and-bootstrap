$(function (){
    elem = '<img class="drop_img" src="img/drop_down_icon.png" style="'+
                                                     'width: 20px;'+
                                                     'height: 20px;'+
                                                     'position: absolute;'+
                                                     'right: 20px'+
                                                     '"/>';
    $('.drop_down').append(elem);
   $('.side_bar_item .icon').mouseenter(function (){
       $('.content:visible').find('.drop_down .drop_img').hide();
       $('.sub_menu:visible').hide();
       $(this).find('+ .content > div > div > div > .sub_menu').show();
       $('.content:visible').parent().find('.icon').css('border-radius','5px');
       $('.content:visible').hide();
       $(this).css('background-image','linear-gradient(to bottom,#20bb9c,#20bb9c)');
       
       $(this).css('border-top-right-radius','0px');
       $(this).css('border-bottom-right-radius','0px');
       $(this).find('+ .content').css('width','0px');
       $(this).find('+ .content').css('background-image','linear-gradient(to bottom,#20bb9c,#20bb9c)');
       
       $(this).find('+ .content').show();
       if($(window).width() >= 500){
       $(this).find('+ .content').animate({
                width: '260px'
            }, 500);
       }
       else{
           $(this).find('+ .content').animate({
                width: '75%'
            }, 500);
       }
       $('.drop_down').append(elem);     
   });
   
   $('.ng_click').mouseenter(function (){
      $(this).find('+ .sub_menu').show(); 
   });
   
   $('.sub_menu_item').mouseleave(function (){
      $(this).find('.sub_menu').hide(); 
   });
   
   $('.content > div > div > div > .sub_menu').mouseleave(function (){
      $(this).hide();
      $(this).parent().parent().parent().parent().animate({
                width: '0px'
            }, 500);
      $(this).parent().parent().parent().parent().parent().
              find('> .icon').css('border-radius','5px');
     $('.drop_down .drop_img').hide();
   });
});