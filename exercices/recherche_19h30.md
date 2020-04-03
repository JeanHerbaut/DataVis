Ce mini script permet de sortir les titres des épisodes ayant eu lieu lors du Printemps Arabe début 2011 en se focalisant sur le pays de l'Egypte. 

```ndjson-filter "d.date > '2011-01-01' && d.date < '2011-03-01'" < segments.ndjson | ndjson-filter "d.title.toLowerCase().includes('egypte')" | ndjson-map "d.title```