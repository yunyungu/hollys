// 네비게이션 이벤트
$('#main-nav,#sub-nav').mouseenter(function(){
    $('#sub-nav').stop().slideDown(300);
    $('#main-nav span:last-child').css({
        opacity:'1',
    })
});
$('#main-nav,#sub-nav').mouseleave(function(){
    $('#sub-nav').stop().slideUp(300);
    $('#main-nav span:last-child').css({
        opacity:'0',
    })
})