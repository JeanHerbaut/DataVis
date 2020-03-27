### 1) Expliquer la procédure en quelques points
Le but de la procéddure est de préparer des données pour pouvoir les afficher avec le graphe de Gosling. 

La première partie consiste à télécharger les données au moyen de curl.
Les données téléchargées sont de types xlsx et notre but et de pouvoir les manipuler en JSON. 

Pour y arriver, la première étap est de créer un script permettant la conversion des données xlsx en CSV. 
A partir des fichiers CSV créés, nous pouvons créer notre structure de données en JSON. 

### 2) Quel est l'intérêt d'avoir des scripts pour manipuler les données
Cela permet d'automatiser un processus et de réutiliser ce script à chaque fois que l'on veut convertir des données. 
Il est également plus facile de comprendre ce qui est en train de se passer avec un script documenté. 

### 3) Comment avons-nous joint les quatres jeux de données
Les jeux de données en CSV créés possèdent une colonne GEO qui permet de les lier. Cette colonne agit un peu à la manière d'un identifiant dans une base de donnée relationnelle. 
Toutes les données sont chargées dans un seul fichier javascript