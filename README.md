# Portfolio — Kenny Wouters

Site vitrine statique (HTML/CSS, sans build ni dépendance) publié avec GitHub Pages : https://kennywouters.github.io/
Chaque `git push` sur `main` met le site à jour.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | accueil / présentation, disponibilités |
| `cv.html` | CV (imprimable en PDF : deux pages A4 en couleur, avec nom et coordonnées) ; chaque expérience ou formation renvoie à sa page de détail |
| `becode.html`, `tuyauterie.html`, `it-essentials.html`, `roggemans.html`, `interim.html`, `saint-luc.html` | pages de détail des postes et formations (« Ce que j'ai fait », « Ce que j'ai appris », liens précédent / suivant) |
| `projets.html` | projets de développement (le plus récent en premier) |
| `documents.html` | attestations et certificats, affichés dans une visionneuse |
| `contact.html` | formulaire de contact (envoi par email via [Web3Forms](https://web3forms.com), sans quitter la page) |

Les messages arrivent sur l'adresse liée à la clé d'accès Web3Forms (champ `access_key` de `contact.html`, publique
par conception). Pour changer d'adresse, demander une nouvelle clé sur web3forms.com.

## Structure

```
assets/
  style.css     styles et couleurs (variables CSS), thèmes clair / sombre, impression
  theme.js      bouton de thème, chargé dans <head> pour éviter le flash
documents/      attestations et certificats : .jpg (affichage), .png (vignette), .pdf (téléchargement)
projets/        logos et captures des projets
```

## Lancer en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Ajouter du contenu

- **Projet** : copier un bloc `<article class="project">` dans `projets.html`, le placer en tête et adapter le texte ;
  le logo va dans `projets/`.
- **Document** : déposer les fichiers dans `documents/` (`.jpg`, vignette `.png`, `.pdf` facultatif), ajouter un lien
  `<a class="doc">` dans `documents.html` et une carte dans la section « Certificats » de `cv.html`.
  Les deux listes sont classées par date, du plus récent au plus ancien.
  Depuis une page de détail, le lien « Voir le certificat » pointe directement vers le fichier du document.
- **Poste ou formation** : partir d'une page de détail existante, ajouter l'entrée dans `cv.html` et mettre à jour
  les liens précédent / suivant des pages voisines.

## À savoir

- Après une modification de `assets/style.css` ou `assets/theme.js`, incrémenter le `?v=` dans **toutes** les pages
  pour que les visiteurs ne gardent pas l'ancienne version en cache.
- Typographie française : espace insécable (U+00A0) avant `:`, `;`, `?`, `!`, `→`, et autour de `·`.
