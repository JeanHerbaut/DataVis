const dataChampions = require('./lolChampions.json')
const champions = dataChampions.data;
let clearedData = [];
let champTags = [];
let countTag = [];
for (const name in champions) {
    //console.log(`${name}: ${champions[name]}`);
    clearedData.push(champions[name]);
}
for (let i = 0; i < clearedData.length; i++) {
}

clearedData.forEach(champ => {
    (champ.tags).forEach(tag => {
        champTags.push(tag)
        if (!countTag.includes(tag)) {
            countTag.push(tag);
            countTag[tag] = 0;
        } else if(countTag.includes(tag)) {
            countTag[tag]++;
        }
    })
});
countTag.forEach((element, key) => {
    countTag[key] = ({"tag": element, "count": countTag[element]})
});
console.log(countTag[0]);