# Dossier `services`

## `data-sharing.service.ts`
Permet d'échanger des données entre plusieurs composants sans être obligé de recharger l'application ou les pages pour mettre à jour les données desdits composants.

## `request.service.ts`
Contient des fonctions privées pour les requêtes de types `GET`, `POST`, `PULL` et `DELETE` pour qu'elles soient génériques et facilement utilisables dans les autres services.

## `pwa.service.ts`
Service relatif aux fonctionnalités de Progressive Web App, prévenir l'utilisateur que les fichiers sources ont été modifiés et proposer de raffraichir l'application pour la "mettre à jour" ou bien, proposer d'installer l'application quand l'utilisateur est sur un navigateur.
