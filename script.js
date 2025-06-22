const footer = document.getElementById('card-footer')
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
