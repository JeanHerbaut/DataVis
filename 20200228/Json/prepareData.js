const dataChampions = require('./lolChampions.json')
const champions = dataChampions.data;
console.log(champions.Aatrox)
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

console.log(countTag);