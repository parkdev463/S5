<!-- # Transformation des entités en tables -->

 Table : VILLE

- `id_ville` (PK)
- `nom_ville`

 Table : AUTEUR

- `id_auteur` (PK)
- `nom_auteur`
- `prenom_auteur`
- `email_auteur`

 Table : CATEGORIE

- `id_categorie` (PK)
- `nom_categorie`

 Table : ARTICLE

- `id_article` (PK)
- `titre_article`
- `contenu_article`
- `date_publication`
- `statut_article`
- `image_article`

 <!-- Conclusion

Les quatre entités du MCD ont été transformées en quatre tables relationnelles dans le MLD.

Chaque identifiant est défini comme une clé primaire (PK).

Aucune clé étrangère (FK) n'a été ajoutée à cette étape. -->