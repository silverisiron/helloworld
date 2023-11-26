$('.Flag1 img').on('click', function(){
  var clickedCountry = $(this).data('country');
  $('.Flag1 img').each(function() {
    var country = $(this).data('country');
    if (country === clickedCountry) {
      $(this).attr('src', 'Img/' + country + '-selected.svg');
    } else {
      $(this).attr('src', 'Img/' + country + '.svg');
    }
  });
  $('.Inf .des').removeClass(function(index, className) {
    return (className.match(/\S+/g) || []).filter(function(c) {
      return c !== 'des';
    }).join(' ');
  }).addClass(clickedCountry);
});

$('.Flag1').on('click', function() {
  if ($('.Inf .des').hasClass('us') == true) {
    $('.Inf .Sto').html(`<h1>미합중국</h1>
    <h2>버락 오바마</h2>
    <h4>경제 침체의 여파가 여전히 미국을 강타하고 있고, 중동에서는 아랍의 봄이 국제정세를 뒤흔들고 있습니다.
    미국은 테러와의 전쟁에서 상당한 성과를 거두었지만, 아직도 안보 문제에 직면해 있습니다.
    정치적 분열이 깊어지고, 경제 회복을 위한 노력이 계속되는 가운데,
    중동에서의 전투로 미국의 역할과 국내 정치적 동향이 극명하게 드러났습니다.
    이러한 도전에 대처하면서도, 국제 사회 속 미국의 위치를 다시 고려하게 되었습니다.</h4>
    `);
  }
  else if ($('.Inf .des').hasClass('uk') == true){
    $('.Inf .Sto').html(`<h1>영국</h1>
    <h2>데이비드 캐머런</h2>
    <h4>
    
    </h4>`);
  }
  else if ($('.Inf .des').hasClass('fr') == true){
    $('.Inf .Sto').html(`<h1>프랑스</h1>
    <h2>니콜라 사르코지</h2>
    <h4></h4>`);
  }
  else if ($('.Inf .des').hasClass('cn') == true){
    $('.Inf .Sto').html(`<h1>중화인민공화국</h1>
    <h2>후진타오</h2>
    <h4></h4>`);
  }
  else if ($('.Inf .des').hasClass('rs') == true){
    $('.Inf .Sto').html(`<h1>러시아</h1>
    <h2>드미트리 메드베데프</h2>
    <h4></h4>`);
  }
})
