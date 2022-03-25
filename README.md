# S.K.E.L.E.T.O.R

Framework CSS créé par les équipes front d'alterway.
- BEM pour le nommage des class et id
- SASS pour le CSS
- jQuery ou Vanilla JS selon le besoin
- Accessibilité : RGAA (AA) exigé
- GULP 4.x.x

# Génération du projet

- Installer NodeJS _(version projet : 12.4.0)_
- Installer NPM _(version projet : 6.9.0)_
- Lancer la commande :
```javascript
npm install
```
- Le projet s'installe avec les dépendances node_modules
- Lancer la commande :
```javascript
gulp
```
- Le _gulpfile.js_ est interprété
- Le dossier *__public* est généré avec les pages statiques
- Les assets (css, js, img) sont envoyés dans le thème selon le lien référencé dans le _gulpfile.js_


# Si le GULP plante
Faire :

- rm -rf node_modules
- rm -rf package-lock.json
- npm cache clean --force
- npm install

source : https://github.com/gulpjs/gulp/issues/2162#issuecomment-384885950(https://github.com/gulpjs/gulp/issues/2162#issuecomment-384885950)

# Si gulp retourne cette erreur

gulpInst.start.apply(gulpInst, toRun);

Faire :
- npm i -g gulp-cli


## Les grands principes

### Base
- Héritage de Boostrap 4.x.x
- OOCSS et BEM
- Architecture en Atomic Design
- Compilation via Gulp 4.x.x

### Javascript
Les plugins JS sont en jQuery pour la majorité d'entre eux.
Ils respectent les patterns d'accessibilité.

### Accessibilité
Respecter le RGAA, coder de façon accessible tant en HTML (twig), en CSS et en JS.

### Composants
- dossier TWIG des composants : `twig/site/component`.
- dossier CSS des composants : `style/site/5-component`.

Faire correspondre au maximum les noms de fichiers CSS et TWIG, ainsi que les class du composant.

Ex. du composant qui a pour class `.a-info` :
- création du .twig : `twig/site/component/1-atom/a-info.twig`
- création du .scss : `style/site/5-component/1-atom/_a-info.scss`