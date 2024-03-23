window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var lead = document.getElementById('lead');
    var profileContainer = document.querySelector('.profile-container');
    profileContainer.style.transform = 'translate(-50%, calc(-50% + ' + scrollTop + 'px))';
});