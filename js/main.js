//PC용 메뉴 보이기/숨기기 함수 선언(아래)
var isOver1 = false;
var isOver2 = false;
function goHide1() {
	if(!isOver1 && !isOver2) {
		//자바스크립트는 뒤에서부터 앞으로 해석합니다
		$('.gnb_depth2_1').stop().fadeOut('fast');
		//fadeIn(서시히나타남), fadeOut(서서히사라짐)
	}
}
//두번째 서브메뉴
var isOver11 = false;
var isOver22 = false;
function goHide2() {
	if(!isOver11 && !isOver22) {
		$('.gnb_depth2_2').stop().fadeOut('fast');
	}
}
//세번째 서브메뉴
var isOver111 = false;
var isOver222 = false;
function goHide3() {
	if(!isOver111 && !isOver222) {
		$('.gnb_depth2_3').stop().fadeOut('fast');
	}
}
//네번째 서브메뉴
var isOver1111 = false;
var isOver2222 = false;
function goHide4() {
	if(!isOver1111 && !isOver2222) {
		$('.gnb_depth2_4').stop().fadeOut('fast');
	}
}

/* 함수의 기본작동원리
function aname(vars) { //함수선언
	alert(vars + " 이름출력");
}
aname('김일국');//함수호출
*/
$(document).ready(function(){
	// 상단으로 바로가기 버튼 클릭
	$(".to_top a").smoothScroll();
	//alert('콜백함수 실행');
	$(".openMOgnb").click(function(){
		//alert();//디버그용
		//$(".header_cont").css("display","block");
		$(".header_cont").slideDown("slow");
		//header 아이디영역 백그라운드 추가
		$("#header").addClass("on");
	});
	$(".closePop").click(function(){
		//$(".header_cont").css("display","none");
		$(".header_cont").slideUp("fast");
		$("#header").removeClass("on");
	});
	//PC용 메뉴 롤오버(마우스) 호출부분(아래)
	//1대메뉴1-gnb_depth2_1 서브메뉴 마우스 오버액션
	$('.openAll1').mouseover(function(){

	});
	//2대메뉴1-gnb_depth2_1 서브메뉴 선택액션
	$('.openAll1').focus(function(){

	});
	//3대메뉴1-gnb_depth2_1 서브메뉴 마우스 아웃액션
	$('.openAll1').mouseout(function(){

	});
	//4첫번째 서브메뉴 마우스 오버했을때 액션
	$('.gnb_depth2_1').mouseover(function(){

	});
	//5첫번째 서브메뉴 선택액션 focus <=> blur
	$('.gnb_depth2_1').focus(function(){

	});
	//6첫번째 서브메뉴 마우스 아웃액션
	$('.gnb_depth2_1').mouseout(function(){

	});
	//7첫번째 서브메뉴 선택을 벗어났을때 액션
	$('.gnb_depth2_1').blur(function(){

	});
	//8첫번째 서브메뉴중 마지막 li태그(해외)를 벗어났을때액션
	$('.gnb_depth2_1 li:last-child a').blur(function(){

	});

	
});