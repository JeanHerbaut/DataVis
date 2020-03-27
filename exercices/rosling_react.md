### 1) Comment les bulles sont-elles créées dans cette version?
Les bulles sont créées au moyen de la librairies REACT qui permet de créer des interfaces d'utilisatur. La fonction de d3
select est remplacer par react. 

### 2) Comment les données sont elles jointes aux éléments DOM avec react?
Le format utilisé par react pour manipuler le DOM est du jsx. Pour que les navigateurs comprennent ce format il faut le "traduire" en javascript. Pour webpack, j'utilise babel qui fait la traduction et compile le jsx. 