document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.adress-btn').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.map-position').forEach(function(tabContent) {
                tabContent.classList.remove('map-active')
            })
            document.querySelector(`[data-target='${path}']`).classList.add('map-active')
        })
    })
})
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("mapFirst", {
        center: [55.75846306898368,37.601079499999905],
        zoom: 15
    });
    var myMapSecond = new ymaps.Map("mapSecond", {
        center: [55.75846306898368,37.601079499999905],
        zoom: 15
    });
    
}

$('.adress-btn').click(function(){
    $(this).toggleClass('btn-active');
    $('.adress-btn').not(this).removeClass('btn-active');
})