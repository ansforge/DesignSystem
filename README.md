# ANS - RESSOURCES

### Design System de l'ANS

---

Framework CSS créé par les équipes front d'Alterway.
Maintenu par Klee Interactive.

- BEM pour le nommage des class et id
- SASS pour le CSS
- jQuery ou Vanilla JS selon le besoin
- Accessibilité : RGAA (AA) exigé
- GULP 4.x.x
- Docksal

---

# Les grands principes

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

- dossier TWIG des composants : `web/twig/site/component`.
- dossier CSS des composants : `web/style/site/5-component`.

Faire correspondre au maximum les noms de fichiers CSS et TWIG, ainsi que les class du composant.

Ex. du composant qui a pour class `.a-info` :

- création du .twig : `web/twig/site/component/1-atom/a-info.twig`
- création du .scss : `web/style/site/5-component/1-atom/_a-info.scss`

### Gestion des css

Le fichier style-ans.css est la feuille de style css principale du site.

Le fichier styleguide.css concerne le guide de style. Il écrase style-ans.css pour des styles spécifiques au site guide de style.

En cas de modification ou de création de composant, il est important donc de modifier les fichiers scss de style/site et non pas style/styleguide.



# Section technique

- Pour la première fois : ```fin init```
- Pour recompiler le guide de style : ```fin compile```
- Pour lancer la commande manuellement : ```fin gulp```
- Pour lancer avec le watcher : ```fin watch```


- Si le GULP plante :

```
rm -rf node_modules
rm -rf package-lock.json
fin npm cache clean --force
fin npm install
```

## Mise à jour de version officiel du projet

A chaque mise à jour de version :

- Modèle : X:Y:Z (ex: 1.9.0)
- Mettre à jour la date de livraison et le numéro de version sur la page `index.twig`
- Lister tous les nouveaux éléments et les modifications apportées par la version sur la page `sg-versions.twig`
- Lancer la commande `fin gulp` pour générer tous les fichiers puis zipper la version (les éléments du dossier `styleguide`) **en retirant les .zip des anciennes versions du dossier styleguide/zip**
    - ```cd styleguide && zip -r ../src/zip/ans-design-system-v1.0.1.zip .```
- Vérifier le nouveau fichier .zip dans le dossier `src/zip`
- Vérifier le poids noté dans les twig de tous les fichiers zip. Vous obtiendrez ces informations dans la console en lançant la commande `fin gulp` (fonction zipSizes)
- Taguer la branch `develop` à chaque livraison de version

## Déploiement vers le GitHub ANS

Après que le tag ai été validé par l'ANS sur les environnement OVH (préprod ou prod)

- Créer une MR de develop au niveau du tag vers la branche "synchro-github-ans"
- Le push vers github se fait via un job "synchro_github" manuel.

## Déploiement des pages Github

Merge request vers Github-pages