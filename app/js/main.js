$(function(){


$('.select__style').styler();

$('.filter__price-input').ionRangeSlider({
  type: "double",
  prefix: "$",  
  onStart: function (data){
    $('.filter__price-from').text(data.from);
    $('.filter__price-to').text(data.to);},
  onChange: function (data) {
    $('.filter__price-from').text(data.from);
    $('.filter__price-to').text(data.to);
        }
});


$('.feed__slider-inner').slick({
  dots:true


});



  var mixer = mixitup('.category__content');
});
