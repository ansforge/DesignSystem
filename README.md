# S.K.E.L.E.T.O.R

Framework CSS créé par les équipes front d'Alterway.
- BEM pour le nommage des class et id
- SASS pour le CSS
- jQuery ou Vanilla JS selon le besoin
- Accessibilité : RGAA (AA) exigé
- GULP 4.x.x

# Génération du projet

Pour la première fois
```
fin init
```

Pour mettre à jour votre site
```
fin update-site
```

Pour lancer la commande manuellement :
```
fin gulp
```

Pour lancer avec le watcher
```
fin watch
```

## Si le GULP plante

Faire :
- rm -rf node_modules
- rm -rf package-lock.json
- fin npm cache clean --force
- fin npm install

# Les grands principes

## Base
- Héritage de Boostrap 4.x.x
- OOCSS et BEM
- Architecture en Atomic Design
- Compilation via Gulp 4.x.x

## Javascript
Les plugins JS sont en jQuery pour la majorité d'entre eux.
Ils respectent les patterns d'accessibilité.

## Accessibilité
Respecter le RGAA, coder de façon accessible tant en HTML (twig), en CSS et en JS.

## Composants
- dossier TWIG des composants : `web/twig/site/component`.
- dossier CSS des composants : `web/style/site/5-component`.

Faire correspondre au maximum les noms de fichiers CSS et TWIG, ainsi que les class du composant.

Ex. du composant qui a pour class `.a-info` :
- création du .twig : `web/twig/site/component/1-atom/a-info.twig`
- création du .scss : `web/style/site/5-component/1-atom/_a-info.scss`

# Mise à jour de version

A chaque mise à jour de version :
- Mettre à jour la date de livraison et le numéro de version sur la page `web/src/twig/styleguide/page/index.twig`
- Lister tous les nouveaux éléments et les modifications apportées par la version sur la page `web/src/twig/styleguide/page/sg-versions.twig`
- Lancer la commande `fin gulp` pour générer tous les fichiers puis zipper la version (les éléments du dossier `web/styleguide`) **en retirant les .zip des anciennes versions du dossier /zip**
- Placer le nouveau fichier .zip dans le dossier `web/src/zip`
- Vérifier le poids noté dans les twig de tous les fichiers zip. Vous obtiendrez ces informations dans la console en lançant la commande `fin gulp` (fonction zipSizes)
- Taguer la branch `develop` à chaque livraison de version