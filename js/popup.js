function goBack() {
    history.pushState(null, null, location.href);
    history.pushState(null, null, location.href);
    history.pushState(null, null, location.href);
    history.pushState(null, null, location.href);
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
    }, 5000);
}
