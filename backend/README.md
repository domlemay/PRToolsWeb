(The file `/Users/DominicLemay/Library/CloudStorage/OneDrive-Personnel/03 AEC Dev Logiciel/03 Session/Services Web/TP projet web/PRtools/backend/README.md` exists, but is empty)
**Backend README**

- **Projet**: Backend du projet PRtools (TypeScript + Express + Prisma)

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

```bash
# depuis le dossier backend
npm install
```

**Variables d'environnement**
Placez vos variables dans `backend/.env`. Exemple minimal :

```dotenv
DATABASE_URL="postgresql://<user>:<password>@<host>/<db>?sslmode=require"
```

Veillez à garder cette valeur secrète.

**Générer le client Prisma**

```bash
# depuis backend
npx prisma generate
```

**Créer / Synchroniser la base de données (Neon)**
Choix rapide (sans historique de migration) :

```bash
# pousse le schéma Prisma vers la DB (crée les tables)
npx prisma db push
```

Création de migrations (recommandé en dev) :

```bash
# créer une migration et l'appliquer (interactive en local)
npx prisma migrate dev --name init
```

Déployer des migrations en production (CI) :

```bash
npx prisma migrate deploy
```

Réinitialiser la base (ATTENTION : supprime les données)

```bash
# local/dev seulement — demande confirmation
npx prisma migrate reset
```

Si vous préférez forcer tout (supprimer la DB et re-créer) :

1. Supprimez la base ou créez une nouvelle DB sur Neon
2. Lancez `npx prisma db push` ou `npx prisma migrate deploy`

**Commandes Prisma utiles**

- Générer client : `npx prisma generate`
- Lancer Studio (UI) : `npx prisma studio`
- Voir SQL généré pour une migration : `npx prisma migrate dev --create-only --name <nom>`

**Démarrer le serveur**

```bash
# mode développement (rechargement selon votre configuration)
npm run dev

# build + start
npm run build
npm start
```

Scripts définis dans `package.json` (rappel) :

- `npm run dev` — développement
- `npm run build` — compile TypeScript
- `npm start` — démarre `dist/index.js`
- `npm run prisma` — raccourci pour Prisma CLI

**Travailler avec Neon**

- Ouvrez le dashboard Neon et sélectionnez votre projet → Database → Tables pour voir les tables.
- Si vous ne voyez pas de tables : vous n'avez pas appliqué de migration ou `db push`.
- Exemple `psql` (remplacez la connection string) :

```bash
# installez libpq/psql si besoin (macOS Homebrew)
brew install libpq
brew link --force libpq

# se connecter (remplacez par votre DATABASE_URL)
psql "postgresql://<user>:<password>@<host>/<db>?sslmode=require"

# lister les tables
\dt
```

**Réinitialisation / sauvegarde**

- Avant d'exécuter `migrate reset` ou de récréer la DB, exportez vos données si nécessaire.
- Neon propose des sauvegardes/points-in-time dans le dashboard selon le plan.

**Debug / Erreurs fréquentes**

- `Prisma schema validation P1012` : souvent dû à des relations one-to-one sans contrainte unique. Vérifiez `@@unique([...])` sur les modèles côté définissant la relation.
- Pas de `migrations` dans `prisma/` : vous n'avez pas créé de migrations avec `prisma migrate dev`.
- `npx prisma generate` ne crée pas les tables — utilisez `db push` ou `migrate`.

**Bonnes pratiques**

- Utilisez `migrate` en développement pour garder un historique des changements.
- Utilisez `db push` pour synchroniser rapidement pendant le prototypage.
- Ne versionnez pas votre `.env` contenant `DATABASE_URL`.

**Exemples rapides (copier-coller)**

```bash
# installer
npm install

# générer et pousser le schéma
npx prisma generate
npx prisma db push

# démarrer en dev
npm run dev
```

**Exemples API (auth)**

Créer un intervenant (register) :

```bash
curl -X POST http://localhost:3000/api/auth/register \
	-H "Content-Type: application/json" \
	-d '{"email":"pr@example.com","mot_de_passe":"Secret123","nom":"Dupont","prenom":"Jean"}'
```

````
```bash
curl -X POST http://localhost:3000/auth/register \
	-H "Content-Type: application/json" \
	-d '{"email":"pr@example.com","mot_de_passe":"Secret123","nom":"Dupont","prenom":"Jean"}'
````

Se connecter (login) :

```bash
curl -X POST http://localhost:3000/api/auth/login \
	-H "Content-Type: application/json" \
	-d '{"email":"pr@example.com","mot_de_passe":"Secret123"}'
```

````
```bash
curl -X POST http://localhost:3000/auth/login \
	-H "Content-Type: application/json" \
	-d '{"email":"pr@example.com","mot_de_passe":"Secret123"}'
````

Récupérer le profile (avec token) :

```bash
curl -H "Authorization: Bearer <TOKEN>" http://localhost:3000/api/auth/profile
```

```bash
curl -H "Authorization: Bearer <TOKEN>" http://localhost:3000/auth/profile
```

---

Si vous voulez, je peux :

- exécuter `npx prisma db push` maintenant pour créer les tables sur Neon (je le ferai depuis le dossier `backend`),
- ou préparer une migration initiale `npx prisma migrate dev --name init`.

Si vous souhaitez que j'ajoute une section de seed (exécution automatique de données de test), dites-le-moi et je l'ajoute.
