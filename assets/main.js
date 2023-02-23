var map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -23.215625918428948, lng: -47.27984470649166},
        zoom: 16
    });

    const symbolMarker = new google.maps.Marker({
        position: {lat: -23.215625918428948, lng: -47.27984470649166},
        map: map
    })
    
} 

const menuBar = document.querySelector('.mobile-menu i')

menuBar.addEventListener('click', (e) => {
    e.preventDefault();

    const menuMobile = document.querySelector('.mobile-menu ul');
    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu');
    } else {
        menuMobile.classList.add('show-menu');
    }
});
