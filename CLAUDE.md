# Portfolio : consignes pour Claude

Site vitrine statique de Kenny Wouters (CV, projets, documents), en français. Voir `README.md` pour les pages,
la structure et la façon d'ajouter du contenu.

## Conventions

- Tout le texte visible est en **français**, sur un ton sobre et positif (pas de formulations dures ou négatives sur le parcours).
- HTML/CSS statique, sans build ni framework ; chaque page répète le même `<head>`, en-tête et pied de page :
  les garder identiques d'une page à l'autre (et mettre `aria-current="page"` sur l'onglet de la page).
- Couleurs uniquement via les variables de `assets/style.css` (`--bg`, `--surface`, `--text`, `--muted`, `--accent`…) ;
  vérifier les thèmes clair et sombre, et l'impression du CV.
- Modification de `assets/style.css` ou `assets/theme.js` : incrémenter le `?v=` dans toutes les pages.
- Les pages contiennent des espaces insécables (U+00A0, typographie française) : un remplacement de texte qui
  contient « espace + : » ou « · » doit les reproduire, sinon il ne trouve rien.
- Certificats : listes de `cv.html` et `documents.html` classées par date (plus récent d'abord), dates au format `MM/AAAA`.
- CV imprimé (`@media print` en fin de `assets/style.css`) : fond blanc, accent bleu-vert, **deux pages A4 maximum** ;
  le nom et les coordonnées n'apparaissent qu'à l'impression (classe `print-only`, l'inverse de `no-print`).
- La rose en braille en commentaire au début de `index.html` est la signature de l'auteur : la conserver telle quelle.

## Vérification

- Ouvrir les pages modifiées en local (`python3 -m http.server 8000`) ; relire le texte et tester mobile (une colonne).
- Après un push, attendre la fin du build GitHub Pages avant de vérifier le site en ligne.
