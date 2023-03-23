# SVG-icons
from https://gitlab.com/pidila/scampi/-/blob/master/modules/svg-icons/svg-icons.md

Placer les icônes SVG dans le dossier ```svg-icons/sprite```

Fichiers nécessaires
---------------------------------------------------------------------
macro TWIG : ```src/twig/site/component/0-macro/macro-svg-icons.twig```
SCSS : ```src/style/1-base/_svg-icons.scss```
JS : ```src/script/plugin/svg-icons/svgxuse.js``` (uniquement si nécessaire de supporter Internet Explorer)


## Scampi présentation

Présentation
---------------------------------------------------------------------

Un module qui permet l’utilisation d’icônes svg réunies dans un sprite.

Les styles présents dans le module sont les styles minimaux pour que les icônes aient une taille par défaut proche de la taille des caractères.

Un [tutoriel](https://pidila.gitlab.io/scampi-twig/documentation/sprite-svg.html) détaille la fabrication d'un sprite.

Nous recommandons également la lecture de l'article [Comment travailler avec des icônes en SVG](https://la-cascade.io/comment-travailler-avec-des-icones-en-svg/#creer) de Florens Verschelde.

Utilisation
---------------------------------------------------------------------

### Styler les svg

Outre les recommandations concernant la fabrication du sprite, nous utilisons deux class sur chaque icone : une classe générique et une class propre à l'icône.

À noter également qu'il est possible que pour des raisons esthétiques on souhaite poser l'espace avant ou après l'icône ainsi que l'icône elle-même dans un span pour agir sur sa présentation lorsqu'elle est incluse dans un lien ou pour réaligner plus finement et/ou une class spécifique à chaque icone.

### Accessibilité

Les icônes ne jouent qu'un rôle décoratif. Pour ne pas « polluer » la lecture par les aides techniques on ajoute un attribut ```aria-hidden="true"``` et pour contourner un [bug d'Internet Explorer](http://simplyaccessible.com/article/7-solutions-svgs/#acc-heading-4) qui déclenche la prise de focus sur les svg même lorsqu'ils ne sont pas des liens on ajoute également l'attribut ```focusable="false"```.

### Script associé

Pour que ce module fonctionne dans les navigateurs (en particulier Internet Explorer version 9, 10, 11) ne gérant pas les SVG en fichier externe, il faut utiliser  le script associé.

Note : copier le script présent dans le module à l’endroit où sont rangés les autres scripts.

Exemple d’utilisation
---------------------------------------------------------------------

``` html
<p>
  <a href="https://pidila.gitlab.io/" target="_blank" rel="noopener noreferrer" title="lien externe - nouvelle fenêtre">
    Lien externe
    <svg class="svg-icon" aria-hidden="true" focusable="false">
      <use xlink:href="chemin/vers/icon-sprite.svg#lien_externe"></use>
    </svg>
</p>
<p>
  <a href="http://url-de-destination" download>
    <svg class="svg-icon" aria-hidden="true" focusable="false">
      <use xlink:href="chemin/vers/icon-sprite.svg#lien_download"></use>
    </svg>
    Télécharger (pdf, 125ko)</a>
</p>
<p>
    <svg class="svg-icon" aria-hidden="true" focusable="false">
      <use xlink:href="chemin/vers/icon-sprite.svg#courriel"></use>
    </svg>
    Contact : pidila@dila.gouv.fr
</p>
```
