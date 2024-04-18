import { Serie } from './serie.js';
import { seriesD } from './data.js';
const seriesbody: HTMLElement = document.getElementById('seriesDatos')!; 
const avgSeasons: HTMLElement = document.getElementById("promedioTempordas")!;
let cardContedor = document.getElementById("cardContedor")!;

avgSeasons.innerHTML = `${promTempo(seriesD)}`
SeriesInTable(seriesD)

function SeriesInTable(series: Serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a class="btn" href="#" role="button" id="btn-${serie.link}">${serie.nombre}</a></td>
                           <td>${serie.plataforma}</td>
                           <td>${serie.temporadas}</td>`;
                          trElement.addEventListener('click', ()=>showCard(serie))
    seriesbody.appendChild(trElement);
    })};


function promTempo(series: Serie[]): number {
  const totalSeries = series.length;
  let totalTemporadas: number = 0;
  let promedioTemporadas: number = 0;

  series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);

  if (totalSeries > 0) {
      promedioTemporadas = totalTemporadas / totalSeries;
  }
  return promedioTemporadas;
}

function showCard(serie: Serie): void{

  cardContedor.innerHTML = '';
  let image = document.createElement("img");
  image.src = serie.imagen;
  image.classList.add("card-img-top"); 
  cardContedor.appendChild(image); 

  let cardBody = document.createElement('div');
  cardBody.classList.add("card-body");

  let name = document.createElement("h3");
  name.classList.add("card-title");
  name.textContent = serie.nombre;
  name.style.marginLeft = "10px";
  cardContedor.appendChild(name);

  let resumen = document.createElement("p");
  resumen.textContent = serie.resumen;
  resumen.classList.add("card-text");
  resumen.style.marginLeft = "10px";
  cardContedor.appendChild(resumen);

  let linkText = document.createTextNode(serie.link);
  let linkContainer = document.createElement("span");
  linkContainer.style.marginLeft = "10px";
  linkContainer.style.color="blue";
  linkContainer.appendChild(linkText);
    cardContedor.appendChild(linkContainer);

}

