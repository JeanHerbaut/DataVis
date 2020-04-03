### 1) Galaxus
Le premier jeu de données est téléchargé ave l'instruction CURL en utilisant le lien se trouvant dans l'onglet network de la console de debug du navigateur. Elles sont ensuite stockées dans un JSON. 

### 2) 19h30
Le second jeu de données est téléchargé au moyen d'un requête fetch sur le serveur hébergeant les données. L'attribut MaxDate est utilisé dans l'URL pour pouvoir télécharger des données plus anciennes. Au moyen d'un boucle, il est ensuite possible de de remonter très loin dans le temps en faisant une requête en changeant la MaxDate. 