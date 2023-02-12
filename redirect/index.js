let observer = new IntersectionObserver((e)=>{
    if(e[0].isIntersecting) document.getElementById('lock').className = 'hide'
})

function linkClicked(){
    document.getElementById('info').className = 'occupy show'
    observer.observe(document.querySelector('.footer'))
}