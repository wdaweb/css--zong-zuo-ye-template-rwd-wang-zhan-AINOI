//info-----------------------------------------
$('.info-detail1').mouseenter(function () {
  $(this).css('background', 'black')
  $('.sns-box2-1').css('background', '#b95')
  $('.sns-box2-1 i').css('color', 'white')
  $('.info-detail1 p').css('color', 'white')
  $('.arrow-icon-1').css('background', '#b95')
})

$('.info-detail1').mouseleave(function () {
  $(this).css('background', 'white')
  $('.sns-box2-1').css('background', 'white')
  $('.sns-box2-1 i').css('color', '#b95')
  $('.info-detail1 p').css('color', '#999')
  $('.font-black').css('color', 'black')
  $('.arrow-icon-1').css('background', 'black')
})

$('.info-detail2').mouseenter(function () {
  $(this).css('background', 'black')
  $('.sns-box2-2').css('background', '#b95')
  $('.sns-box2-2 i').css('color', 'white')
  $('.info-detail2 p').css('color', 'white')
  $('.arrow-icon-2').css('background', '#b95')
})

$('.info-detail2').mouseleave(function () {
  $(this).css('background', 'white')
  $('.sns-box2-2').css('background', 'white')
  $('.sns-box2-2 i').css('color', '#b95')
  $('.info-detail2 p').css('color', '#999')
  $('.font-black').css('color', 'black')
  $('.arrow-icon-2').css('background', 'black')
})

$('.info-detail3').mouseenter(function () {
  $(this).css('background', 'black')
  $('.sns-box2-3').css('background', '#b95')
  $('.sns-box2-3 i').css('color', 'white')
  $('.info-detail3 p').css('color', 'white')
  $('.arrow-icon-3').css('background', '#b95')
})

$('.info-detail3').mouseleave(function () {
  $(this).css('background', 'white')
  $('.sns-box2-3').css('background', 'white')
  $('.sns-box2-3 i').css('color', '#b95')
  $('.info-detail3 p').css('color', '#999')
  $('.font-black').css('color', 'black')
  $('.arrow-icon-3').css('background', 'black')
})

//team-----------------------------------------
$('.team-card-img01').mouseenter(function () {
  $('#text01').css('top', '-60px')
})
$('.team-card-img01').mouseleave(function () {
  $('#text01').css('top', '-50px')
})

$('.team-card-img02').mouseenter(function () {
  $('#text02').css('top', '-60px')
})
$('.team-card-img02').mouseleave(function () {
  $('#text02').css('top', '-50px')
})

$('.team-card-img03').mouseenter(function () {
  $('#text03').css('top', '-60px')
})
$('.team-card-img03').mouseleave(function () {
  $('#text03').css('top', '-50px')
})

$('.team-card-img04').mouseenter(function () {
  $('#text04').css('top', '-60px')
})
$('.team-card-img04').mouseleave(function () {
  $('#text04').css('top', '-50px')
})

$('.team-card-text-box').mouseenter(function () {
  $(this).css('top', '-60px')
})

$('.team-card-text-box').mouseleave(function () {
  $(this).css('top', '-50px')
})



//study-------------------------------------
$('.study-text-container-img').mouseenter(function () {
  $('.study-text-container-img').find('img').css('transform', 'scale(1.1)')
  $('.study-text-container-img').find('img').css('transition', '0.5s')

})

$('.study-text-container-img').mouseleave(function () {
  $('.study-text-container-img').find('img').css('transform', 'scale(1)')
  $('.study-text-container-img').find('img').css('transition', '0.5s')
})