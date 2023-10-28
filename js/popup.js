function skeleton() {
// 2초 후에 실행되는 함수
setTimeout(function() {
    // .skeleton 요소를 찾아서 삭제
    var skeletonElement = document.querySelector('#skeleton');
    if (skeletonElement) {
        skeletonElement.parentNode.removeChild(skeletonElement);
    }
    // 이미지 표시하기
    var imgElement = document.getElementById('qImg');
    imgElement.style.display = 'block';
}, 1000); // 2000 밀리초 (2초)

}
function deletePopup(btnId) {
    const titles = ["😑😑","😭😭","😤😤"]
    const contents = ["옹,,? 당황스러운데??", "그거 맞아? 아니 다시 생각해봐ㅜ", "나 말안해!! 선물 안줄거야"];
    const index = Math.floor(Math.random() * titles.length);
    
    const btn = document.getElementById(btnId);
    btn.style.background = '#F77F63';
    btn.style.color = '#fff';
    setTimeout(function () {
        Swal.fire({
            title: titles[index],
            text: contents[index],
            icon: "error",
            confirmButtonText: "참는다..",
            customClass: {
              confirmButton: "swal-button--error" // "error" 버튼에 내장된 클래스 사용
            },
            confirmButtonColor: "#F77F63" // "error" 버튼의 배경색을 직접 지정
          });
        btn.style.background = '#F9FAF3';
        btn.style.color = '#F77F63';
    }, 50);
}

function correctPopup(page, btnId, isGift) {
    const correct = document.getElementById('correct');
    const loadingBar = document.getElementById('loading');
    const btn = document.getElementById(btnId);
    const check = document.getElementById('check');
    check.style.display = 'block';
    btn.style.background = '#92CE6B';
    btn.style.border = '2px solid #92CE6B';
    btn.style.color = '#fff';
    // 초기 너비를 100%로 설정
    correct.style.display = 'block';

    const gift = document.getElementById('gift-open');
    isGift == true ? (gift.style.display = 'block') : (gift.style.display = 'none');
    setTimeout(function () {
        loadingBar.style.width = '100%';
    }, 50);
    // 3초 뒤에 페이지 이동
    setTimeout(function () {
        correct.style.display = 'none';
        gift.style.display = 'none';
        check.style.display = 'none';
        btn.style.background = '#F9FAF3';
        btn.style.color = '#F77F63';
        btn.style.border = '2px solid #F77F63';
        window.location.href = page;
    }, 7000);
}
