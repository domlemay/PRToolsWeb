(The file `/Users/DominicLemay/Library/CloudStorage/OneDrive-Personnel/03 AEC Dev Logiciel/03 Session/Services Web/TP projet web/PRtools/backend/README.md` exists, but is empty)
**Backend README**

- **Projet**: Backend du projet PRtools (TypeScript + Express + Prisma)

**But de l'application**

- Cette application back-end permet la création et la modification de rapports d'intervention (rapports PR).
- Elle fournit des endpoints pour créer un rapport, lier des intervenants existants (PR) au rapport, et gérer les sections d'un rapport.

**Restrictions importantes**

- L'application N'EST PAS destinée à gérer les intervenants (PR) — elle ne permet pas la création d'un intervenant via les endpoints de rapport.
- Les opérations de suppression (rapport, patient, user, etc.) ne sont pas exposées par défaut via l'API publique et doivent être effectuées uniquement via des outils d'administration sécurisés si nécessaire.
- Pour ajouter ou modifier des comptes PR (utilisateurs), utilisez l'interface d'administration prévue (`/auth/register` pour l'enregistrement initial par exemple) ou des outils d'administration spécifiques. Les endpoints relatifs aux rapports n'autorisent que la sélection d'intervenants existants et actifs.

**Prérequis**:

- Node.js (>=18 recommandé)
- npm ou yarn
- Accès réseau à la base PostgreSQL (Neon) et la variable `DATABASE_URL` configurée
- `psql` (optionnel, pour vérifications)

**Fichiers importants**:

- `prisma/schema.prisma` : définition du modèle Prisma
- `prisma.config.ts` : configuration Prisma (charge `.env`)
- `.env` : contient `DATABASE_URL` (ne pas partager en clair)
- `src/` : code source TypeScript
- `src/generated/prisma` : client Prisma (généré)

**Installation**

````bash
# depuis le dossier backend
# PRToolsWeb — Backend

Résumé professionnel et guide d'utilisation pour la partie backend du projet PRToolsWeb.

## **Présentation du projet**

- **Nom du projet complet** : PRTools
- **Module présent** : PRToolsWeb (backend)

PRTools est un outil de gestion destiné aux premiers répondants médicaux du Québec. Il facilite la création, la modification et la gestion des rapports d'intervention (rapports PR) et des dossiers patients associés.

La partie `PRToolsWeb` correspond à l'application web utilisée par les intervenants PR pour remplir et modifier les rapports d'intervention. Dans ce dépôt, la couche backend (API REST) est fournie — le front-end sera ajouté ultérieurement.

## **But de ce dépôt (backend)**

- Fournir une API REST en TypeScript/Express pour :
	- Authentifier les intervenants (PR) et gérer les sessions JWT.
	- Créer, lire, mettre à jour et lier des rapports d'intervention aux intervenants.
	- Gérer les patients associés aux rapports.
	- Exposer des endpoints sécurisés pour la création et modification des sections d'un rapport.

## **Architecture & Modèle MVC**

Le backend suit une structure proche du pattern MVC :

- **Models** : définis par Prisma dans `prisma/schema.prisma` et accessibles via le client généré `src/generated/prisma`.
- **Controllers** : la logique métier et les handlers Express se trouvent dans `src/controllers/` (par ex. `auth.controller.ts`, `rapport.controller.ts`).
- **Views** : côté API, il n'y a pas de vues HTML — les réponses sont JSON. L'équivalent 'view' est la forme des réponses JSON envoyées par les controllers.
- **Routes** : définies dans `src/routes/` (par ex. `auth.routes.ts`, `rapport.routes.ts`) qui connectent les endpoints aux controllers.
- **Middlewares** : gestion d'authentification, validation et autres dans `src/middlewares/`.

Le fichier `MODELISATION.md` contient la modélisation ER (diagramme entité-relation) de la base de données. Consultez-le pour comprendre les relations entre `Rapport`, `Patient`, `Intervenant`, et les différentes sections du rapport.

## **Prérequis**

- Node.js >= 18 (recommandé)
- npm (ou yarn)
- Accès réseau à la base de données PostgreSQL (par exemple Neon)
- `psql` (optionnel, utile pour diagnostique)

Assurez-vous d'avoir configuré les variables d'environnement avant d'exécuter le serveur.

## **Fichiers importants**

- `prisma/schema.prisma` — schéma de la base de données (Prisma).
- `prisma/` — migrations et fichiers liés à Prisma.
- `prisma.config.ts` — configuration Prisma et chargement des `.env`.
- `src/` — code source TypeScript :
	- `src/index.ts` et `src/server.ts` — point d'entrée et configuration du serveur.
	- `src/controllers/` — controllers des différents endpoints.
	- `src/routes/` — définitions des routes Express.
	- `src/middlewares/` — middlewares (authentification, erreurs, etc.).
	- `src/generated/prisma` — client Prisma généré (ne pas modifier manuellement).
- `MODELISATION.md` — diagramme ER / modélisation de la base de données.

## **Installation (local)**

```bash
# depuis le dossier `backend`
npm install
````

## **Variables d'environnement**

Créez un fichier `.env` à la racine de `backend/` (ne pas le committer) et ajoutez au minimum :

```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<db>?sslmode=require"
PORT=3000
JWT_SECRET="votre-secret-jwt"
# autres variables spécifiques (ex: SALT_ROUNDS, etc.)
```

Notes :

- Ne partagez jamais `DATABASE_URL` publiquement.
- Adaptez `PORT` et `JWT_SECRET` selon votre environnement.

## **Prisma — Générer le client**

Après installation, générez le client Prisma :

```bash
npx prisma generate
```

## **Prisma — Synchroniser et migrations**

- Pour pousser le schéma sans créer d'historique de migration (rapide, pratique en prototypage) :

```bash
npx prisma db push
```

- Pour créer une migration (recommandé en développement) :

```bash
npx prisma migrate dev --name init
```

- Pour déployer les migrations en production (CI) :

```bash
npx prisma migrate deploy
```

- Pour réinitialiser la base en local (ATTENTION : supprime les données) :

```bash
npx prisma migrate reset
```

## **Neon (PostgreSQL managé)**

- Neon est une option de base PostgreSQL managée souvent utilisée pour l'hébergement cloud.
- Pour utiliser Neon :

  - Créez un projet Neon et obtenez la `DATABASE_URL`.
  - Ajoutez-la dans `backend/.env`.
  - Exécutez `npx prisma db push` ou `npx prisma migrate deploy` selon votre workflow.

- Vérifiez les tables via le dashboard Neon ou en utilisant `psql` :

```bash
# Exemple (macOS) :
psql "postgresql://<user>:<password>@<host>/<db>?sslmode=require"
\dt
```

## **Initialisation / seed**

Un script de seed peut fournir un utilisateur admin par défaut. Exemple d'utilisateur souvent fourni pour le développement :

- email: `adminPRTools`
- mot de passe: `admin` (haché dans la DB)

Pour exécuter le seed localement (si un script est défini dans `package.json`) :

```bash
npx prisma generate
npm run seed
```

Ou via la commande Prisma seed configurée :

```bash
npx prisma db seed
```

## **Démarrer le serveur**

- Mode développement (avec reload selon configuration) :

```bash
npm run dev
```

- Build + start :

```bash
npm run build
npm start
```

Le serveur écoute par défaut sur le `PORT` défini dans `.env` (ex. `3000`). Les routes API sont généralement préfixées (par ex. `/api` ou racine selon `src/server.ts`).

## **Points d'accès API (exemples)**

- Authentification : `POST /auth/register`, `POST /auth/login`, `GET /auth/profile` (JWT)
- Rapports : `GET /rapports`, `POST /rapports`, `GET /rapports/:id`, `PUT /rapports/:id`
- Patients : `POST /patients`, `GET /patients/:id`

(Consultez `src/routes/` et `src/controllers/` pour la liste complète et les paramétrages.)

## **Tests**
	Cette section reste a faire. Actuellement non mise en place.
- Emplacement probable des tests : si présents, dans un répertoire `tests/` ou `src/__tests__`.
- Pour lancer les tests (si un script est défini dans `package.json`) :

```bash
npm test
```
 
- Si vous utilisez `jest` :

```bash
npm run test:watch
```

- Si aucun test n'est présent, créez des tests unitaires pour les controllers et des tests d'intégration pour les endpoints en utilisant une base de données de test (ou une instance Neon isolée).

## **Debug et erreurs courantes**

- `Prisma schema validation P1012` : vérifier les contraintes `@@unique` pour les relations one-to-one.
- Si `prisma/` ne contient pas de migrations : vous n'avez pas utilisé `prisma migrate dev`.
- `npx prisma generate` ne crée pas les tables : utilisez `npx prisma db push` ou créez/appliquez des migrations.

## **Bonnes pratiques**

- Ne commitez jamais votre `.env`.
- Utilisez des migrations (`prisma migrate`) en développement pour conserver l'historique.
- Utilisez `db push` uniquement pour prototypage rapide.
- Testez les migrations dans un environnement identique à la production lorsque possible.

## **Aide / prochaines étapes**

- Souhaitez-vous que je :
  - Génère et pousse le schéma sur votre instance Neon (`npx prisma db push`)?
  - Prépare une migration initiale (`npx prisma migrate dev --name init`)?
  - Ajoute une section `How to contribute` ou `Architecture diagram` plus détaillée ?

---

Fichier modifié : `backend/README.md`

Si vous voulez que j'ajoute des exemples d'appels API supplémentaires ou que je génère un README anglais, dites-le-moi.
Pour exécuter le seed localement ou sur votre instance Neon, définissez `DATABASE_URL` vers la base cible et exécutez depuis le dossier `backend` :
