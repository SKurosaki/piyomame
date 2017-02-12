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
    document.searchWindow.txt.value = ( data[i] );
  };

  var text = document.searchWindow.text.value;
  var txt = $.extend(true, {}, text);

  //検索ワードを数値に変換
  text = text.replace("あお",'B');
  text = text.replace(/(LOKI|ロキ|ろき|邪神)/g, 101);
  text = text.replace(/(THOR|ソー|そー|兄上)/g, 2);

  // document.searchWindow.text2.value = text;
  
  
function incopy(frmObj){
    frmObj.elements["copy"].value=frmObj.elements["txt"].value;	
    //name（txt）で入力した文字をname（copy）にコピー

}

  document.searchWindow.txt.value = text;

            

// onpaste="setTimeout(preview,10)";
  
$(document).on('input keyup blur', 'input[name=txt]', function() {
          $('#search_img').trigger("input");
});


// $('input').on( 'paste', function() {
//     var inputValue = $(this).val(); //null
//     if (inputValue) {
//       var text = $(_this).val();
//         $('#search_img').html(text);
//     }
// });

            

  //data-multifilterに変換
  // var str = text;
  // var array = str.match(/[0-9]+\.?[0-9]*/g);


  // var s = $(' input[type="search"]');
// var s = $('lavel input');

//   $('#search_img').attr('value', array[i] );

}
 