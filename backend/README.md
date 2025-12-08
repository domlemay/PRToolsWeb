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

**Exemples API (rapports & patients)**

- Récupérer la liste des PR actifs (sélection seulement) :

```bash
curl -H "Authorization: Bearer <TOKEN>" http://localhost:3000/rapports/prs
```

- Créer un rapport (sélectionner seulement des PR existants et actifs) :

```bash
curl -X POST http://localhost:3000/rapports \
	-H "Authorization: Bearer <TOKEN>" \
	-H "Content-Type: application/json" \
	-d '{
		"patient_id": 123,
		"code_smpau": "SMP-001",
		"numero_formulaire_terrain": "FT-42",
		"no_autor": "A-987",
		"intervenants": [{ "id": 5, "role": "PR_1" }, { "id": 7, "role": "PR_2" }]
	}'
```

- Créer un patient (endpoint distinct) :

```bash
curl -X POST http://localhost:3000/patients \
	-H "Authorization: Bearer <TOKEN>" \
	-H "Content-Type: application/json" \
	-d '{ "nom": "Martin", "prenom": "Alice", "annee_naissance": 1985, "sexe": "F" }'
```

Notes importantes :

- Les endpoints de création de rapport vérifient que les intervenants listés existent et ont `actif = true`. Si des intervenants sont manquants ou inactifs, la requête échoue avec statut 400 et une liste des identifiants problématiques.
- La création d'un patient se fait via `POST /patients`. L'API de rapport n'autorise pas la création d'intervenants (PR) — cela doit se faire via les endpoints d'auth/administration.

**Initialisation / seed (utilisateurs par défaut)**

Un utilisateur admin par défaut est fourni par un script de seed Prisma :

- Email: `adminPRTools`
- Mot de passe: `admin` (stocké haché avec bcrypt, rounds=10)
- id: `1` (si la ligne est créée lors du seed)

Pour exécuter le seed localement ou sur votre instance Neon, définissez `DATABASE_URL` vers la base cible et exécutez depuis le dossier `backend` :

```bash
# installer ts-node si nécessaire
npm install -D ts-node

# générer le client prisma si non généré
npx prisma generate

# exécuter le seed (insère/upsert l'utilisateur admin)
npm run seed
```

Remarque : si vous voulez que le seed soit exécuté automatiquement lors de `prisma migrate deploy`, vous pouvez utiliser `npx prisma db seed` (Prisma respectera la configuration `prisma.seed` dans `package.json`). Assurez-vous que `DATABASE_URL` pointe vers votre instance Neon cible.

---

Si vous voulez, je peux :

- exécuter `npx prisma db push` maintenant pour créer les tables sur Neon (je le ferai depuis le dossier `backend`),
- ou préparer une migration initiale `npx prisma migrate dev --name init`.

Si vous souhaitez que j'ajoute une section de seed (exécution automatique de données de test), dites-le-moi et je l'ajoute.
