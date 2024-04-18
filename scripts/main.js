import { seriesD } from './data.js';
var seriesbody = document.getElementById('seriesDatos');
var avgSeasons = document.getElementById("promedioTempordas");
var cardContedor = document.getElementById("cardContedor");
avgSeasons.innerHTML = "".concat(promTempo(seriesD));
SeriesInTable(seriesD);
function SeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a class=\"btn\" href=\"#\" role=\"button\" id=\"btn-").concat(serie.link, "\">").concat(serie.nombre, "</a></td>\n                           <td>").concat(serie.plataforma, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        trElement.addEventListener('click', function () { return showCard(serie); });
        seriesbody.appendChild(trElement);
    });
}
;
function promTempo(series) {
    var totalSeries = series.length;
    var totalTemporadas = 0;
    var promedioTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    if (totalSeries > 0) {
        promedioTemporadas = totalTemporadas / totalSeries;
    }
    return promedioTemporadas;
}
function showCard(serie) {
    cardContedor.innerHTML = '';
    var image = document.createElement("img");
    image.src = serie.imagen;
    image.classList.add("card-img-top");
    cardContedor.appendChild(image);
    var cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    var name = document.createElement("h3");
    name.classList.add("card-title");
    name.textContent = serie.nombre;
    name.style.marginLeft = "10px";
    cardContedor.appendChild(name);
    var resumen = document.createElement("p");
    resumen.textContent = serie.resumen;
    resumen.classList.add("card-text");
    resumen.style.marginLeft = "10px";
    cardContedor.appendChild(resumen);
    var linkText = document.createTextNode(serie.link);
    var linkContainer = document.createElement("span");
    linkContainer.style.marginLeft = "10px";
    linkContainer.style.color = "blue";
    linkContainer.appendChild(linkText);
    cardContedor.appendChild(linkContainer);
}
