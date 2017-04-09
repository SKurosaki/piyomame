//------------------------------------//
//               tab                  //
//------------------------------------//
//all tab
$('.all').click(function(){
  $('.fan-art_img').show();
});

//first tab
$(document).ready(function() {
  $('.tab li:first').addClass('active');
  $('.tab li').click(function() {
    $('.tab li').removeClass('active');
    $(this).addClass('active');
    $('.area').hide();
    $('.area_children').hide(); 
    $($(this).find('a').attr('href')).fadeIn();
    return false;
  });
});

//second tab
$(document).ready(function() {
  $('.tab_children li:first').addClass('active');
  $('.tab_children li').click(function() {
    $('.tab_children li').removeClass('active');
    $(this).addClass('active');
    $('.area_children').hide();
    $($(this).find('a').attr('href')).fadeIn();
    return false;
  });
});

//third tab
$(document).ready(function() {
  $('.tab_g_children li:first').addClass('active');
  $('.tab_g_children li').click(function() {
    $('.tab_g_children li').removeClass('active');
    $(this).addClass('active');
  });
});

//multiple click
$('[class^="tab"]').click(function(c) {
  var imgTab = '.'+ this.className;
  var activeImg = imgTab + "-i"
  $(".fan-art_img").hide();
  $(activeImg).show();
  $(imgTab).click(function(){
    $('.fan-art_img').hide();
    $(activeImg).show();
  });
  $('.paginate_button').click(function(){
    $('.fan-art_img').hide();
    $(activeImg).show();
  });
});

//------------------------------------//
//              scroll                //
//------------------------------------//
//scroll default
$(function(){
  $('a[href=#]').click(function(d){
    d.preventDefault();
  });
});

//search-box scroll
$(function(){
  $(window).scroll(function(){
    var obj_t_pos = $('#datatables_filter').offset().top;
    var scr_count = $(document).scrollTop() + (window.innerHeight/2);
    if(scr_count > obj_t_pos){
      $('#datatables_filter').addClass('fixed');
      $('#datatables_filter').removeClass('dataTables_filter');
    }else{
      $('#datatables_filter').removeClass();
    }
    var top = $(window).scrollTop();
    if( top < 200) {
      $('#datatables_filter').removeClass();
      $('#datatables_filter').addClass('dataTables_filter');
    }
  });
});


//------------------------------------//
//           toggle open              //
//------------------------------------//
//toggle open
$(function(toggleOpen){
  $(".a_list dt").on("click", function() {
    $(this).next().slideToggle();
  });
});


//------------------------------------//
//               tips                 //
//------------------------------------//
//modal open
$(function(){
  $(".modalOpen").click(function(){
    var navClass = $(this).attr("class"),
    href = $(this).attr("href");
    if(href === "#modal02") {
      $(href).children(".inner").css("animation","modal 0.5s forwards");
    }
    $(href).fadeIn();
    $(this).addClass("open");
    return false;
  });
  $(".modalClose").click(function(){
    var parentsID = $(this).parents(".modal").attr("id");
    if(parentsID === "modal02") {
      $(this).parents(".modal").children("[class^='inner']").css("animation","modalClose 0.5s forwards");
    }
    $(this).parents(".modal").fadeOut();
    $(".modalOpen").removeClass("open");
    return false;
  });
});

//inner comment
$(function(){
  $('.inner_1').append('<p>メイン画像下のサムネイルを押すと関連画像が表示されます。</p><a href="" class="modalClose">Close</a>');
  $('.inner_2').append('<strong>できること</strong><ul><li>キャラクター名検索</li><li>半角スペースで複数キャラ検索</li><li>愛称検索（邪神、兄上など）</li><li>小ネタ検索</li><li>俳優名検索</li><li>作品タイトル名検索(一部)</li></ul><p>（※英語、カナ、かな、一部韓国語対応）</p><a href="" class="modalClose">Close</a>');
  $('.inner_3').append('<strong>できること</strong><ul><li>キャラクター名検索</li><li>半角スペースで複数キャラ検索</li><li>愛称検索（邪神、兄上など）</li><li>5属性検索(エナジーなど)</li></ul><p>（※英語、カナ、かな、一部韓国語対応）</p><a href="" class="modalClose">Close</a>');

});

//fade in / fade out
$(function(){
  $(".tips").css({opacity:'1'});
  setTimeout(function(){
    $(".tips").stop().animate({opacity:'0.03'},3000);
  },3000);
  $('.tips').mouseover(function(){
    $(".tips").animate({opacity:'1'});
  });
  $('.tips').mouseout(function(){
    $(".tips").animate({opacity:'0.03'});
  });
});


//------------------------------------//
//               ga                   //
//------------------------------------//
//ga
function createFunctionWithTimeout(callback, opt_timeout) {
  var called = false;
  var func = function() {
    if (!called) {
      called = true;
      callback();
    };
  };
  setTimeout(func, opt_timeout || 1000);
  return func;
}
