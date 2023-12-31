// Initialize and add the map
let map;

async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");

  //FUNÇÃO CARREGA O MAPA E CENTRALIZA NA POSIÇÃO CENTER
  map = new Map(document.getElementById("map"), {
    zoom: 18, //APROXIMA O MAPA DA POSIÇÃO ABAIXO
    center: { lat: -6.349281683941345, lng: -39.31058685926957 },
    mapId: "DEMO_MAP_ID",
  });

  //TAG PARA MARCADOR
  const marker = new google.maps.Marker({
    position: { lat: -6.349281683941345, lng: -39.31058685926957 }, //Posição do marcador!
    map,
    title: "Uluru (Ayers Rock)",  //Titulo do marcador
  });

  //TEXTO DO MARCADOR
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";


  //CHAMA A FUNÇÃO ACIMA QUE CONTEM O TEXTO
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  

  //FUNÇÃO PARA QUE AO CLICAR NO MARCADOR, EXIBA O TEXTO
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

}

initMap();  