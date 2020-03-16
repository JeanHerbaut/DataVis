//get datas
const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/posts"
let tabUser = [];
Promise.all([
    fetch(url1).then(value => value.json()),
    fetch(url2).then(value => value.json())
    ])
    .then(([users, posts]) => {
        users.forEach(element => {
            tabUser.push(
                {
                    "nom_utilisateur": element.name,
                    "ville": element.address.city,
                    "nom_companie": element.company.name,
                    "titres_posts": posts.filter(titre => titre.userId == element.id).map(titre => titre.title)
                }
            )
        });

      console.log(tabUser)
    })
    .catch((err) => {
        console.log(err);
    });

console.log("salut mon pote");