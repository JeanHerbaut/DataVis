import * as d3 from 'd3'
import DATAS from 'json/prepareData.js';
const DB = new DATAS();
let datas = DB.clearData();
const body = d3.select('body');

const ul = body.append('ul');

ul.selectAll('li')
    .data(datas)
    .enter()
    .append('li')
    .text(d => JSON.stringify(d))

let numero = DB.getNumber(datas);
let tags = DB.getTags(datas);

console.log(numero);
    const WIDTH = 1000
    const HEIGHT = 1000 / 3
    const MARGIN = 5
    const BAR_WIDTH = WIDTH / numero.length
    const svg = body.append('svg').attr('width', WIDTH).attr('height', HEIGHT)
    
    // nous allons utiliser une échelle linéaire
    const heightScale = d3.scaleLinear()
      // les données en entrée
      .domain([0, d3.max(numero)]) // d3.max retourne le maxium d'une liste
      // les données en sortie
      .range([0, HEIGHT])
    
    // comme 8 est la valeur maximale, heightScale(8) retourne la hauteur HEIGHT
    // heightScale(4) retourne la moitié de HEIGHT ...
    
    svg.selectAll('rect')
      .data(numero)
      .enter()
      .append('rect')
      .attr('x', (d, i) =>  i * BAR_WIDTH)
      .attr('width', BAR_WIDTH - MARGIN)
      // utiliser heightScale pour y et height
      .attr('y', d => HEIGHT - heightScale(d))
      .attr('height', heightScale)