// //検索ブロックの固定場所をスクロール値で判断
// $(function(){
//    $(window).scroll(function(){
//       var obj_t_pos = $('#fixed-box').offset().top;
//       var scr_count = $(document).scrollTop() + (window.innerHeight/2);
//       if(scr_count > obj_t_pos){
//          $('#fixed-box').addClass('fixed');
//       }else{
//          $('#fixed-box').removeClass();
//       }
//       var top = $(window).scrollTop();
//       if( top < 200) {
//         $('#fixed-box').removeClass();
//       }
//    })
// })











function changeID() {
  //検索ワードスペースで区切る
  text = document.searchWindow.text.value;
  var str = text;
  var space = /\s+/;

  var data = str.split(space);
  for (var i = 0; i < data.length; i++){
    document.searchWindow.text2.value = ( data[i] );
  };

  var text = document.searchWindow.text.value;
  var text2 = $.extend(true, {}, text);

  //検索ワードを数値に変換
  text = text.replace("あお",'B');
  text = text.replace(/(LOKI|ロキ|ろき|邪神)/g, 101);
  text = text.replace(/(THOR|ソー|そー|兄上)/g, 2);

  document.searchWindow.text2.value = text;


  //data-multifilterに変換
  var str = text;
  var array = str.match(/[0-9]+\.?[0-9]*/g);


  $('.searchbtn li').remove();
  for(var i = 0; i < array.length; i++) {
    $('ul.searchbtn').append(' <li data-multifilter="' + array[i] + '">だみー</li>');


document.querySelectorAll('[data-text="' + array[i] +  '"]'); {
  $(this).toggle('1');
    // $(this).toggle('slow');

}






    $('.multifilter li').click(function() {
        $(this).toggleClass('active');

    });


  activetag = $ ('.searchbtn li').attr('class', 'active');
   activetag = $('*[data-multifilter]').click(function() {
     $ ('.searchbtn li').attr('class', 'active');
   });

//  if  activetag != 



        //  $('.filtr-item').addClass('filteredOut');

}
}






// //検索ブロックの固定場所をスクロール値で判断
// $(function(){
//    $(window).scroll(function(){
//       var obj_t_pos = $('#fixed-box').offset().top;
//       var scr_count = $(document).scrollTop() + (window.innerHeight/2);
//       if(scr_count > obj_t_pos){
//          $('#fixed-box').addClass('fixed');
//       }else{
//          $('#fixed-box').removeClass();
//       }
//       var top = $(window).scrollTop();
//       if( top < 200) {
//         $('#fixed-box').removeClass();
//       }
//    })
// })











function changeID() {
  //検索ワードスペースで区切る
  text = document.searchWindow.text.value;
  var str = text;
  var space = /\s+/;

  var data = str.split(space);
  for (var i = 0; i < data.length; i++){
    document.searchWindow.text2.value = ( data[i] );
  };

  var text = document.searchWindow.text.value;
  var text2 = $.extend(true, {}, text);

  //検索ワードを数値に変換
  text = text.replace("あお",'B');
  text = text.replace(/(LOKI|ロキ|ろき|邪神)/g, 101);
  text = text.replace(/(THOR|ソー|そー|兄上)/g, 2);

  document.searchWindow.text2.value = text;


  //data-multifilterに変換
  var str = text;
  var array = str.match(/[0-9]+\.?[0-9]*/g);


  $('.searchbtn li').remove();
  for(var i = 0; i < array.length; i++) {
    $('ul.searchbtn').append(' <li data-multifilter="' + array[i] + '">だみー</li>');


document.querySelectorAll('[data-text="' + array[i] +  '"]'); {
  $(this).toggle('1');
    // $(this).toggle('slow');

}






    $('.multifilter li').click(function() {
        $(this).toggleClass('active');

    });


  activetag = $ ('.searchbtn li').attr('class', 'active');
   activetag = $('*[data-multifilter]').click(function() {
     $ ('.searchbtn li').attr('class', 'active');
   });

//  if  activetag != 



        //  $('.filtr-item').addClass('filteredOut');

}
}






