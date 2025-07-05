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

document.addEventListener('click', (e)=>{
    if(share.classList.contains('visible') && !share.contains(e.target) && !ctaButton.contains(e.target)){
        share.classList.remove('visible')
        ctaButton.classList.remove('active')
        document.getElementById('cta-image').src = 'images/icon-share.svg'
    }
})

function toggleCta() {
    share.classList.toggle('visible')
}

let tl = gsap.timeline();

const articleText = document.querySelector('.animateText')

function textAnimation(){
    tl.from('.card-article-text', {duration: 1, y: 20})
    .from('.user-info', {duration: 1, x: 50, ease: 'back.out'}, "<")
}

articleText.addEventListener('click', textAnimation)

const userInfo = document.querySelector('.user-info')

