// 배너이벤트 - 반복설정
let slideIndex = 0;
let pagAc = $('.swiper-pagination li');
let slides = $('.swiper-slide');
showSlides(); // 함수실행
function showSlides() {
    let idx;
    // 반복문
    for (idx = 0; idx < slides.length; idx++) {
        slides[idx].style.opacity = "0";
    }
    slideIndex++;
    // 끝으로 가면 첫 슬라이드로 이동
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    // 보여줄 슬라이드 실행
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 5000);
    // pagination 변환
    pagAc.removeClass('active');
    pagAc.eq(slideIndex - 1).addClass('active');
}
// 배너이벤트 - pagination click
$(pagAc).click(function(){
    let sltIdx = $(this).index();
    $(slides).css({opacity : '0'});
    $(slides).eq(sltIdx).css({opacity : '1'});
    $(pagAc).removeClass('active');
    $(this).addClass('active');
});