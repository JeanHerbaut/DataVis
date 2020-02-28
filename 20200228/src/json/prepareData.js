export default class {
    constructor () {
        this.countTagdataChampions = require('./lolChampions.json.js')
        this.champions = dataChampions.data;
        this.clearedData = [];
        this.champTags = [];
        this.countTag = [];
    }

    clearData = () => {
        for (const name in this.champions) {
            //console.log(`${name}: ${champions[name]}`);
            this.clearedData.push(this.champions[name]);
        }
        for (let i = 0; i < this.clearedData.length; i++) {
        }
        
        this.clearedData.forEach(champ => {
            (champ.tags).forEach(tag => {
                champTags.push(tag)
                if (!this.countTag.includes(tag)) {
                    this.countTag.push(tag);
                    this.countTag[tag] = 0;
                } else if(this.countTag.includes(tag)) {
                    this.countTag[tag]++;
                }
            })
        });
        this.countTag.forEach((role, key) => {
            this.countTag[key] = ({"tag": role, "count": this.countTag[element]})
        });
        return this.countTag;
    }

}
