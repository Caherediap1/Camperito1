let mapa = 
L.map('mapa').setView([-0.1977508144116706, -78.5047647825742],15);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
		attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(mapa);

$.getJSON("https://jpanimboza.github.io/OPTE/tesis_2012.geojson",
function(data){
  var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
    layer.bindPopup('<b>Titulo: </b> <br>\<br>\ ' +
feature.properties.TITULO_TESIS_O_INVESTIGACION + '<br>\ <b> <br>\Autor(es): </b>' + feature.properties.AUTOR_O_AUTORES
)
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});