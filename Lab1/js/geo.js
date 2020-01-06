var lit;
var long;
window.addEventListener("load",function(){

    if(this.navigator.geolocation){

        var nav = this.navigator.geolocation.getCurrentPosition(function(e){
          var coords = e.coords;
           lit = coords.latitude;
           long = coords.longitude;

           
          


        },function(){

        });
    }
    else
    {
        this.alert("youer browser is not support a geolocation or you have closed geolocation");
    }
});

function myMap() {
 
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

}