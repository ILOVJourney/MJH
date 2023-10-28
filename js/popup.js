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
}, 1500); // 2000 밀리초 (2초)

}
function showAlert() {
    alert('오답입니다.');
}
function deletePopup(btnId) {
    const btn = document.getElementById(btnId);
    btn.style.background = '#F77F63';
    btn.style.color = '#fff';
    setTimeout(function () {
        alert('오답입니다.');
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
