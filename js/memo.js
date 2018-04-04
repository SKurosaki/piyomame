//------------------------------------//
//             memo tips              //
//------------------------------------//


//------------------------------------//
//              index                 //
//------------------------------------//
$(function(){
  $('[id^="gr"]').click(function() {
    var activeClass = '.' + this.id + '-i';
    $('tr').hide();
    $('thead tr').show();    
    $(activeClass).show();
  });
    $('.all').click(function() {
      $('tr').show();
  });
});
//------------------------------------//
//              search                //
//------------------------------------//

$(function(addSearc){
  $('.dwa_e').prevAll('.search-word').append('Energy エナジー えなじー');
  $('.dwa_t').prevAll('.search-word').append('Teck テック てっく');
  $('.dwa_f').prevAll('.search-word').append('Fight ファイト ふぁいと');
  $('.dwa_a').prevAll('.search-word').append('Animal アニマル あにまる');
  $('.dwa_f').prevAll('.search-word').append('Power パワー ぱわー');
});


//------------------------------------//
//            characters              //
//------------------------------------//
//title click
$(function(){
  $('[id^="title_"]').click(function(){
    var activeTitleId = '#' + this.id;
    var activeImg = '.img-' + this.id;
    var activeTxt = '.txt-' + this.id;
    var titleId = $('[id^="title_"]');
    var titleClass = $('[class^="img-title_"]');
    var titleClass2 = $('[class^="txt-title_"]');

    //active thumb
    var firstThumb = $('.cos_1');

    var activeCostumeImg = $('.img-cos_1');
    var costumeImg = $('[class^="img-cos_"]');
    $(costumeImg).removeClass('active_cos');
    $(costumeImg).hide();

    $('a').removeClass('now');
    $(titleId).removeClass('active_title');
    // $(titleClass).children().removeClass('active_img');
    $(titleClass).hide();
    $(titleClass2).hide();
    $(activeTitleId).addClass('active_title');
    $(activeImg).show();
    $(activeTxt).show();
    // $(activeImg).children().addClass('active_img');

    $(activeCostumeImg).addClass('active_cos');
    $(activeCostumeImg).show();

    //active thumb
    $(firstThumb).addClass('now');
  });
});
//thumb click
$(function(){
  $('[class^="cos_"]').click(function(){
    var choosingThumb = this;
    var activeCostumeImg = '.img-' + choosingThumb.className;
    var costumeImg = $('[class^="img-cos_"]');
    $('a').removeClass('now');
    $(choosingThumb).addClass('now');
    $(costumeImg).removeClass('active_cos');
    $(costumeImg).hide();
    $(activeCostumeImg).addClass('active_cos');
    $(activeCostumeImg).show();
    $(choosingThumb).click(function(){
       $(activeCostumeImg).show(); 
    });
    return false;
  });
});
//active first thumb 
$(document).ready(function(){
  var firstThumb = $('.cos_1');
  $(firstThumb).addClass('now');
});

//id jump
$(document).ready(function(){
  var getUrl = location.href;
  var cosFirst =$('.img-cos_1');
  var caFirst =$('.img-title_f_1');
  var txFirst =$('.txt-title_f_1');
  var caNone = $('[id^=img-title_]');
  var txtNone = $('[class^=txt-title_]');
  var cosNone = $('[class^=img-cos_]');

  if (getUrl.indexOf('?') != -1){
    if(document.URL.match(/title/)){
      var paramName = location.search;
      var linkId = paramName.substr( 1 ) ;
      var profTxt = '.txt-'+ linkId;
      var profImg = '.img-'+ linkId;
      $(cosNone).hide();
      $(txtNone).hide();
      $(caNone).hide();
      $(caFirst).hide();
      $(txFirst).hide();
      $(cosFirst).show();
      $(caNone).parent().attr('tabindex', '-1');
      $('#' + linkId).addClass('active_title');
      $(profTxt).show();
      $(profImg).show();
      $(profTxt).parent().removeAttr('tabindex');
      $(profImg).parent().removeAttr('tabindex');
    }
  }else{
    $(cosNone).hide();
    $(cosFirst).show();
    $(caNone).hide();
    $(caNone).parent().attr('tabindex', '-1');
    $('#title_f_1').addClass('active_title');
    $('.img-title_f_1').show();
    $('.img-title_f_1').parent().removeAttr('tabindex');
  }
});

//related img
$(function(){
  $('[class^="cos"]').click(function(c) {
    var cosimg = '.'+ this.className;
    var imgtab =  cosimg + '-i';
    $(".cos_none").css('display','none');
    $(imgtab).fadeToggle();
    $(cosimg).click(function(){
      $('.cos_none').hide();
      $(imgtab).show();
    });
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
    var cosFirst = $('.cos1-i');
    $(caNone).css('display','none');
    $('[id^="ca"]').children().removeClass('active');
    $(caNone).parent().attr('tabindex', '-1');
    $(prof).show();
    $(prof).children(cosFirst).show();
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

//characters hide

