import * as d3 from 'd3'
import DATAS from 'json/prepareData.js';
const DB = new DATAS();
let datas = DB.clearData();
console.log(datas);
const body = d3.select('body');

const ul = body.append('ul');

ul.selectAll('li')
    .data(datas)
    .enter()
    .append('li')
    .text(d => JSON.stringify(d))

let numero = DB.getNumber(datas);
let tags = DB.getTags(datas);

    const WIDTH = 1000
  const HEIGHT = 1000 / 3
  const MARGIN = 5
  const MARGIN_BOTTOM = HEIGHT / 10
  const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM
  const MARGIN_LEFT = WIDTH / 20
  const GRAPH_WIDTH =  WIDTH - MARGIN_LEFT
  
  console.log(datas);
  
  //const svg = d3.select('body')
  const svg = body.append('svg').attr('width', WIDTH).attr('height', HEIGHT)

  const BAR_WIDTH = GRAPH_WIDTH / datas.length
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(datas, d => d.count)])
    .range([GRAPH_HEIGHT, 0])
  
  const bars = svg.append('g')
     .attr('transform', `translate(${MARGIN_LEFT}, 0)`)
  
  bars.selectAll('rect')
    .data(datas)
    .enter()
    .append('rect')
    .attr('x', (d, i) =>  i * BAR_WIDTH)
    .attr('width', BAR_WIDTH - MARGIN)
    .attr('y', d => yScale(d.count))
    .attr('height', d => GRAPH_HEIGHT - yScale(d.count))
    .attr('fill', 'steelblue')
  
  const cityNames = svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT}, 0)`)
  
  cityNames.selectAll('text')
    .data(datas)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * BAR_WIDTH + BAR_WIDTH / 2)
    .attr('y', HEIGHT - MARGIN_BOTTOM + 20)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .text(d => d.tag)
  
  const axisY = d3.axisLeft().scale(yScale)
    .tickFormat(d => d)
    .ticks(5)

  svg.append('g')
    .attr('transform', `translate(${MARGIN_LEFT - 3})`)
    .call(axisY)