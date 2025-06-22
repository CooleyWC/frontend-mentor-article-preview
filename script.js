const share = document.getElementById('share-content')

const ctaButton = document.getElementById('cta')


ctaButton.addEventListener('click', ()=>{
    toggleCta()
    ctaButton.classList.toggle('active');
    const ctaImg = document.getElementById('cta-image');
    if (ctaButton.classList.contains('active')) {
        ctaImg.src = 'images/icon-share-active.svg';
    } else {
        ctaImg.src = 'images/icon-share.svg';
    }
})

function toggleCta() {
    if (share.classList.contains('visible')) {
        share.classList.remove('visible');
    } else {
        share.classList.add('visible');
    }
}

let tl = gsap.timeline();

const articleText = document.querySelector('.animateText')

function textAnimation(){
    tl.from('.card-article-text', {duration: 1, y: 20})
    .from('.user-info', {duration: 1, x: 50, ease: 'back.out'}, "<")
}

articleText.addEventListener('click', textAnimation)

const userInfo = document.querySelector('.user-info')

