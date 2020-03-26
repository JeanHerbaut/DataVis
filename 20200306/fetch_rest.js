//get datas
let tabUser = [];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>
        json.forEach(user => {
            //console.log(user);
            tabUser.push(
                {
                    "nom_utilisateur": user.name,
                    "ville": user.address.city,
                    "nom_companie": user.company.name,
                    "titres_posts": []
                }
            )
        })
    )
console.log(tabUser);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()
        .then(json => json.forEach(element => {
            console.log(element.title);
            //tabUser[element.userId].push(element)
        }))
    )