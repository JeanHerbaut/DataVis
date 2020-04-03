import * as d3 from 'd3';

let countries = require('geoDataVT.json');

const WIDTH = 5000 / 2
const HEIGHT = WIDTH / 2.5
const container = d3.select('#map')
.append("svg")
.attr("width", WIDTH)
.attr("height", HEIGHT);

const projection = d3.geoMercator()
// la valeur de scaleValue plus haut
.scale(67)
// les valeurs translate
.translate([120, 152])
const pathCreator = d3.geoPath().projection(projection)
const svg = d3.select(container)
container.selectAll('path')
.data(countries.features)
.enter()
.append('path')
.attr('d', pathCreator)


console.log(cityPaths);