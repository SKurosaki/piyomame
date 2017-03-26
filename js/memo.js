// slider
$(document).ready(function(){
  $('.j-bxslider').bxSlider({
    infiniteLoop: false,
    auto: false,
    autoControls: true,
    touchEnabled: false,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: true,
    pagerCustom: '.bx-pager_title'
  });
  $('.j-bxslider_2').bxSlider({
    infiniteLoop: false,
    auto: false,
    autoControls: true,
    touchEnabled: false,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: true,
    pagerCustom: '.bx-pager_title_2'
  });
  $('.bx-viewport').css({
    slideMargin: 0,
    width: '100%'
  });
  $('.bx-wrapper').css({
    height: '100%'
  });
})

//id jump
$(document).ready(function(){
  var getUrl = location.href;
  var cosFirst =$('.cos1-i');
  var caNone = $('.ca_none');
  var cosNone = $('.cos_none');

  if (getUrl.indexOf('?') != -1){
    if(document.URL.match(/ca/)){
      var paramName = location.search;
      var linkId = paramName.substr( 1 ) ;
      var prof = '.'+ linkId + "-i";
      $(cosNone).hide();
      $(cosFirst).show();
      $(caNone).hide();
      $(caNone).parent().attr('tabindex', '-1');
      $('#' + linkId).children().addClass('active');
      $(prof).show();
      $(prof).parent().removeAttr('tabindex');
    }
  }else{
    $(cosNone).hide();
    $(cosFirst).show();
    $(caNone).hide();
    $(caNone).parent().attr('tabindex', '-1');
    $('#ca1').children().addClass('active');
    $('.ca1-i').show();
    $('.ca1-i').parent().removeAttr('tabindex');
  }
});

//related img
$(function(){
  $('[class^="cos"]').click(function(c) {
    var imgtab = '.'+ this.className + "-i"
    $(".cos_none").css('display','none');
    $(imgtab).fadeToggle();
    $(imgtab).click(function(){
      $('.cos_none').hide();
      $(imgtab).show();
    });
  });
  //profile
  $('[id^="ca"]').click(function() {
    var prof = '.'+ this.id + "-i";
    var profId =  '#'+ this.id;
    var caNone = $('.ca_none');
    $(caNone).css('display','none');
    $('[id^="ca"]').children().removeClass('active');
    $(caNone).parent().attr('tabindex', '-1');
    $(prof).show();
    $(profId).children().addClass('active');
    $(prof).parent().removeAttr('tabindex');
  });
});
$(function(){
  $(".cos1-i").css('display','block');
});
$(function(){
  $(".cos1").click(function(){
    $(".cos1-i").css('display','block');
  });
});


