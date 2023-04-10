# Mongoose: Opérations

## [Page officiel du cours Mongoose: Opérateurs](https://djemai-samy.com/posts/3.mongoose-operators)

![Image du cours: Mongoose: Opérateurs](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/mongoose/0.mongoose-initiation/3.mongoose-operators/3.mongoose-operators.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Apprendre de comprendre comment effectuer des requêtes sur une base de données MongoDB en utilisant le module Mongoose de Node.js. À la fin du cours, vous serez en mesure de manipuler les données en utilisant des queries et filtres.

---

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.mongoose-initiation)

1. [Mongoose: Introduction](https://djemai-samy.com/posts/1.mongoose-introduction.article)
2. [Mongoose: Les Opérations](https://djemai-samy.com/posts/2.mongoose-operations.article)
3. [Mongoose: Les Opérateurs](https://djemai-samy.com/posts/3.react-operators.article)
4. [Mongoose: Les Relations](https://djemai-samy.com/posts/4.react-relations.article)

## Branches sur GitHub

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale et complet de l'article:

- [main](https://github.com/Djemai-Samy/1.mongoose-intiation)
- [1-introduction](https://github.com/Djemai-Samy/1.mongoose-intiation/tree/1-introduction)
- [2-operations](https://github.com/Djemai-Samy/1.mongoose-intiation/tree/2-operations)
- [3-operators](https://github.com/Djemai-Samy/1.mongoose-intiation/tree/3-operators)
- [4-relations](https://github.com/Djemai-Samy/1.mongoose-intiation/tree/4-relations)

---

## Branches sur GitLab

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale et complet de l'article:

- [main](https://gitlab.com/tutoriels-dev/2.server/2.nodejs/mongoose/1.mongoose-initiation)
- [1-introduction](https://gitlab.com/tutoriels-dev/2.server/2.nodejs/mongoose/1.mongoose-initiation/-/tree/1-introduction)
- [2-operations](https://gitlab.com/tutoriels-dev/2.server/2.nodejs/mongoose/1.mongoose-initiation/-/tree/2-operations)
- [3-operators](https://gitlab.com/tutoriels-dev/2.server/2.nodejs/mongoose/1.mongoose-initiation/-/tree/3-operators)
- [4-relations](https://gitlab.com/tutoriels-dev/2.server/2.nodejs/mongoose/1.mongoose-initiation/-/tree/4-relations)

---

## Description

Le cours se concentrera sur comment **utiliser des queries de base et avancées** pour **récupérer des données selon des critères spécifiques**, ainsi que les **méthodes de tri** pour **ordonner ces donnée**, et comment utiliser la **pagination** pour **récupérer** des **données en lots**.

Cours suivra un **fil rouge** pratique pour permettre d'**appliquer ces concepts** dans le contexte de la création d'une **application qui gère des auteurs et des livres**.

---

## Prérequis

Pour **suivre** cette serie d'inititaion, vous devez avoir une bonne **compréhension** du langage **JavaScript** et des **connaissances** de base en **développement web**, y compris la **création** de **sites** web statiques et dynamiques:

- [***Initiation au language Javascript***](https://djemai-samy.com/posts/0.javascript-initiation)
- [***Initiation à la programmation  avec NodeJS.***](https://djemai-samy.com/posts/0.nodejs-initiation)

Il est aussi conseiller d'avoir une **compréhension** de base de la **manipulation de données** avec MongoDB et de la **création de modèles** de données avec Mongoose.

- [***Opération simples avec Mongoose.js***.](https://djemai-samy.com/posts/posts//posts/2.mongoose-operations.article)

---

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

- **Comprendre** les **différentes opérations** de requête disponibles dans Mongoose pour **interagir** avec une base de données MongoDB.
- **Comprendre** comment utiliser les **filtres** pour filtrer les données récupérées.
- Être capable d'**utiliser** les **méthodes de tri** pour **trier les données** récupérées selon les **critères souhaités**.
- Savoir **utiliser** les **méthodes de pagination** pour **récupérer** des données par **lots**.

---

## Mise en place de l'environnement

### Cloner depuis ur GitHub

Vous pouvez commencer à suivre le cours en clonant le branche **main**:

```bash
git clone https://github.com/Djemai-Samy/1.mongoose-intiation
```

---

### Cloner depuis ur GitLab

Vous pouvez commencer à suivre le cours en clonant le branche **main**:

```bash
git clone https://gitlab.com/tutoriels-dev/2.server/2.nodejs/mongoose/1.mongoose-initiation
```

---

 Dans index.js:

```js
// Librairie pour intéragir avec une BDD MongoDB
import mongoose from "mongoose";

/**------------------------------------------------------------
* Définition du schéma pour l'exemple 
*/
const AuthorSchema = mongoose.Schema({
  name: { type: String, required: true, unique:true },
  age: { type: Number, required: true },
  alive: { type: Boolean, required: true, default: false },
  adress:{
    country: {type: String, required: true},
    city: String
  },
  books:[
    {
      title:{type: String, required: true, unique: true},
      date: String,
      genre: String
    }
  ]
});
/**
* -------------------------------------------------------------
*/

// Instanciation du model pour manipuler les données:
const Author = mongoose.model('Author', AuthorSchema)

/**------------------------------------------------------------
* Connexion à la BDD
*/

// L'URI de la base de données locale
const MONGODB_URI = "mongodb://127.0.0.1:27017/library-queries";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    // Afficher dans la console que la BDD est connecté
    console.log("Connecté à la BDD: library-queries");
  })
  .catch((err) => {
    // Erreur dans le then
    console.log("Pas connecté à la BDD");
  });

/**
* -------------------------------------------------------------
*/
```

---

Puis **déplacez** vous sur le **répertoire**:

```bash
cd ./1.mongoose-initiation
```

```bash
npm install
```

```bash
📦expressjs-mongoose
  ┣ 📂node_modules
  ┣ 📜package.json
  ┗ 📜index.js
```

```bash
npm run dev
```

---

Pours **illustrer** avec des **exemples**, nous avons **remplit** la base de données avec **différents auteurs**.
  
N'hésitez pas à **faire la meme chose** pour pouvoir **suivre le tutoriel** en meme temps.
  
Voici la liste d'auteurs utilisée:

```js
export const multipleAuthors = [
  {
    name: "Victor Hugo",
    age: 83,
    alive: false,
    address: {
      country: "France",
      city: "Paris",
    },
    titles: ["Poète", "Ecrivain"],
    books: [
      {
        title: "Les Misérables",
        date: "1862",
        genres: ["Historique", "Fiction"],
      },
      {
        title: "Notre-Dame de Paris",
        date: "1831",
        genres: ["Historique", "Fiction"],
      },
    ],
  },
  {
    name: "William Shakespeare",
    age: 52,
    alive: false,
    address: {
      country: "England",
      city: "Stratford",
    },
    titles: ["Acteur", "Poète"],
    books: [
      {
        title: "Hamlet",
        date: "1603",
        genres: ["Tragedie", "Drama"],
      },
      {
        title: "Romeo and Juliet",
        date: "1597",
        genres: ["Tragedie", "Drama"],
      },
    ],
  },
  {
    name: "Ernest Hemingway",
    age: 61,
    alive: false,
    address: {
      country: "USA",
      city: "Oak Park, Illinois",
    },
    titles: ["Ecrivain", "Journaliste"],
    books: [
      {
        title: "The Old Man and the Sea",
        date: "1952",
        genre: ["Roman"],
      },
      {
        title: "For Whom the Bell Tolls",
        date: "1940",
        genre: ["Fiction", "War"],
      },
    ],
  },
  {
    name: "J.K. Rowling",
    age: 56,
    alive: true,
    address: {
      country: "UK",
      city: "Edinburgh",
    },
    titles: ["Ecrivain", "Scénariste"],
    books: [
      {
        title: "Harry Potter à l'école des sorciers ",
        date: "1997",
        genres: ["Fantasy", "Fiction", "Magique"],
      },
      {
        title: "The Casual Vacancy",
        date: "2012",
        genres: ["Roman"],
      },
    ],
  },
  {
    name: "Jules Verne",
    age: 77,
    alive: false,
    address: {
      country: "France",
      city: "Nantes",
    },
    titles: ["Ecrivain"],
    books: [
      {
        title: "Vingt Mille Lieues sous les Mers",
        date: "1869",
        genres: ["Aventure", "Fiction"],
      },
      {
        title: "Le Tour du Monde en Quatre-vingts Jours",
        date: "1873",
        genres: ["Aventure", "Roman"],
      },
    ],
  },
  {
    name: "Stephen King",
    age: 75,
    alive: true,
    address: {
      country: "USA",
      city: "Bangor",
    },
    titles: ["Ecrivain", "Scénariste", "Jounaliste"],
    books: [
      {
        title: "The Shining",
        date: "1977",
        genres: ["Horreur", "Fiction"],
      },
      {
        title: "It",
        date: "1986",
        genres: ["Horreur", "Thriller"],
      },
    ],
  },
  {
    name: "Dan Brown",
    age: 58,
    alive: true,
    address: {
      country: "USA",
      city: "New Hampshire",
    },
    titles: ["Écrivain"],
    books: [
      {
        title: "The Da Vinci Code",
        date: "2003",
        genres: ["Thriller", "Suspense"],
      },
      {
        title: "Angels & Demons",
        date: "2000",
        genres: ["Thriller", "Suspense"],
      },
      {
        title: "The Lost Symbol",
        date: "2009",
        genres: ["Thriller", "Suspense"],
      },
    ],
  },
];
```

Et l'instruction qui permet de les ajouter dans la base de donnée grâce au model:

```js
// fonction pour créer/ajouter des auteurs a la BDD si il n'existent pas
export async function createAuthors(newAuthorsData) {
  try {
    // Créer de l'instance et du document
    const authors = await Author.insertMany(newAuthorsData);
    // Retourner l'auteur créé
    return authors;
  } catch (err) {
    // Erreur lors de la création du document
    // Surement car il existe
    console.log("Auteur existe déja!");
  }
}
```

---
---

## 1. Les méthodes de récupération

Les **Queries** ou **requêtes** sont des **opérations** qui permettent de **récupérer** des **données** depuis une base de données.

Avec Mongoose, on peut utiliser **différentes méthodes** pour **executer** et **envoyer** des requêtes sur la **base de données**.

Ces **requêtes** peuvent être **effectuées** en utilisant des **filtres** pour **trier** et **sélectionner** les données.

Ces **méthodes** sont utilisées pour **construire une requête** et **retourner les résultats** de la base de données.

Les méthodes de requête sont **chainées ensemble** pour construire une **requête complète**.

---

### 1. Récuperer un seul document

La **méthode** `findOne()` est utilisée pour **récupérer un document** à partir de la base de données en **fonction** de certains **critères**.

On peut **fournir** des **filtres** à la méthode `findOne()` pour **sélectionner** un document **spécifique**.

La **méthode** `findOne()` **retourne** un **objet** de type `Query`.

Par exemple pour **séléctionner le premier auteur** avec un **nom**, nous pouvons utiliser la méthode `findOne({ name })`:

```js
// Récuperer le premier auteur dont le nom égal à "Victor Hugo"
const victorHugo = await Author.findOne({ name: "Victor Hugo" });
```

Resultat dans la console:

```js
{
  address: { country: 'France', city: 'Paris' },
  _id: new ObjectId("6433fbc44d26b810352a17ad"),
  name: 'Victor Hugo',
  age: 83,
  alive: false,
  titles: [ 'Poète', 'Ecrivain' ],
  books: [
    {
      title: 'Les Misérables',
      date: '1862',
      genres: [Array],
      _id: new ObjectId("6433fbc44d26b810352a17ae")
    },
    {
      title: 'Notre-Dame de Paris',
      date: '1831',
      genres: [Array],
      _id: new ObjectId("6433fbc44d26b810352a17af")
    }
  ],
  __v: 0
  }
```

---

### 2. Récuperer plusieurs

La méthode `find()` est utilisée pour **récupérer plusieurs documents** à partir de la base de données en fonction de **certains critères**.

On peut **fournir** des **filtres** à la **méthode** `find()` pour **sélectionner** des documents **spécifique**.

La méthode `find()` **retourne** un **objet** de type `Query`.

Par exemple pour **séléctionner** tous les **auteurs vivants**, nous pouvons **utilisé** la **méthode** `find({ alive: true })`:

```js
// récuperer tous les auteurs dont la propriètes alive est à true
const authorsAlive = await Author.find({ alive: true });
```

Resultat dans la console:

```js
[
  {
    address: { country: 'UK', city: 'Edinburgh' },
    _id: new ObjectId("6433fbc44d26b810352a17b6"),
    name: 'J.K. Rowling',
    age: 56,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'New Hampshire' },
    _id: new ObjectId("6433fbc44d26b810352a17bf"),
    name: 'Dan Brown',
    age: 58,
    alive: true,
    titles: [ 'Écrivain' ],
    books: [ [Object], [Object], [Object] ],
    __v: 0
  }
]
```

Vous pouvez aussi **combiner** plusieurs **critères** pour **affiner** la **récherche**.

Par exemple pour **séléctionner** tous les **auteurs vivants** provenant d'un **pays donné** on peut utiliser l'instruction `find({ alive: true, "address.country": country })`:

```js
// Récuperer tous les auteurs vivant et provenant du pays recherché
const authorsAliveFromUSA = await Author.find({ alive: true, "address.country": "USA" });
```

Resultat dans la console:

```js
[
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'New Hampshire' },
    _id: new ObjectId("6433fbc44d26b810352a17bf"),
    name: 'Dan Brown',
    age: 58,
    alive: true,
    titles: [ 'Écrivain' ],
    books: [ [Object], [Object], [Object] ],
    __v: 0
  }
]
```

---

### 3. Récuperer le nombre

La méthode `count()` est utilisée pour **récupérer** le **nombre** de **documents** présent la base de données en fonction de **certains critères**.

On peut **fournir** des **filtres** à la **méthode** `count()` pour **sélectionner** des documents **spécifiques**.

La **méthode** `find()` **retourne** un **objet** de type `Query`.

Par exemple pour **séléctionner** le **nombre**  d'auteurs **provenant d'un pays** spécifique, nous pouvons **utilisé** la **méthode** `count({ 'address.country': country })`:

Pour **récuperer** le **nombre** d'auteurs **provenant** de la `France`:

```js
// Récuperer tous les auteurs dont le pays est égale a France
const numberAuthorsFromFrance = await Author.count({ 'address.country': "France" })
```

Resultat dans la console:

```js
2
```

---

## 2. Filtrer les données

Dans cette partie, nous allons **explorer** les **queries avancées** que nous pouvons utiliser avec Mongoose pour **filtrer** et **rechercher** des données dans notre base de données MongoDB.

Nous allons continuer à **utiliser le modèle et le schéma** des auteurs que nous avons définis précédemment pour illustrer ces concepts.

Les **filtres** sont utilisés pour **extraire** des données à partir d'une collection en **appliquant** un ensemble de **critères spécifiés**.

Ces **critères** peuvent être basés sur des **conditions** d'**égalité**, de **comparaison**, de **logiques**...

---

### 1. Opérateurs logiques

il est possible de **combiner plusieurs critères** de recherche en utilisant les **opérateurs logiques** `$and`, `$or`, `$nor`.

```js
Model.find({ $operateur: [ { champ1: valeur1 }, { champ2: valeur2 } ] })
```

Par exemple, pour **rechercher** tous les **auteurs** provenant **du pays ou de la ville** données dans une variable `place`:

```js
// récuperer tous les auteurs qui ont country OU city égale au paramètre
const authorFromPlace = await Author.find({
  $or: [{ "address.country": place }, { "address.city": place }],
});
```

---

### 2. Opérateurs d'égalité

Dans certains cas, les **critères de recherche** sont plus **complexes** que simplement un champ égal à une certaine valeur.

Par exemple, nous pouvons avoir besoin de **chercher des documents** qui ont un **champ** qui est **supérieur** à une **certaine valeur**, ou qui se trouve **entre deux valeurs**.

Pour **effectuer** ces types de **recherches**, Mongoose fournit des **opérateurs de comparaison** pour les requêtes.

On peut **filtrer** le resultat suivant si un nombre est **supérieure**, **infèrieure**... avec les opérateur suivant:

- `$gt` : pour **chercher** des documents avec un champ qui est **supérieur à une certaine valeur**.
- `$gte` : pour **chercher** des documents avec un champ qui est **supérieur ou égal à une certaine valeur**.
- `$lt` : pour **chercher** des documents avec un champ qui est **inférieur à une certaine valeur**.
- `$lte` : pour **chercher** des documents avec un champ qui est **inférieur ou égal à une certaine valeur**.

```js
Model.find({ champ: { $operateur: valeur } })
```

Par exemple, pour **rechercher** tous les **auteurs** ayant un **âge supérieure ou égal** a `50`:

```js
// récuperer tous les auteur qui ont un age supérieure ou égal a `70`
const authors = await Author.find({ age: { $gte: 70 } });
```

Resultat dans la console:

```js
[
  {
    address: { country: 'France', city: 'Paris' },
    _id: new ObjectId("6433ed93543d9ab880cf0760"),
    name: 'Victor Hugo',
    age: 83,
    alive: false,
    titles: [ 'Poète', 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'France', city: 'Nantes' },
    _id: new ObjectId("6433ed93543d9ab880cf076c"),
    name: 'Jules Verne',
    age: 77,
    alive: false,
    titles: [ 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433ed93543d9ab880cf076f"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: ["Ecrivain", "Scénariste", "Jounaliste"],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

Vous pouvez aussi **combiner deux opérateurs** de comparaison.

Par exemple pour **lister** tous les **auteurs** dont l'**age est compris entre deux valeurs** `70` et `80`:

```js
// récuperer tous les auteur qui ont un age entre 70 et 80
const authorsAgedBetween70And80 = await Author.find({ age: { $gte: 70, $lte: 80 } });
```

Resultat dans la console:

```js
[
  {
    address: { country: 'France', city: 'Nantes' },
    _id: new ObjectId("6433ed93543d9ab880cf076c"),
    name: 'Jules Verne',
    age: 77,
    alive: false,
    titles: [ 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433ed93543d9ab880cf076f"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

---

### 3. Opérateurs regex

L'opérateur `$regex` permet de **rechercher** des documents **contenant** une **expression régulière spécifique** dans un **champ texte**.

Sa syntaxe est la suivante :

```js
Model.find({ champ: { $regex: /expression régulière/ } })
```

où `champ` est le **nom du champ** à **vérifier** et `/expression régulière/` est **l'expression régulière** utilisée pour la **recherche**.

Dans l'exemple ci-dessous, nous **récupérons** tous les documents de la collection `Auhtors` dont le nom **contient** `J`:

```js
const auhtorsContenantJ = await getAuthorByRegex(/J/);
```

Resultat dans la console:

```js
[
  {
    address: { country: 'UK', city: 'Edinburgh' },
    _id: new ObjectId("6433fbc44d26b810352a17b6"),
    name: 'J.K. Rowling',
    age: 56,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'France', city: 'Nantes' },
    _id: new ObjectId("6433fbc44d26b810352a17b9"),
    name: 'Jules Verne',
    age: 77,
    alive: false,
    titles: [ 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

---

### 4. Opérateurs de tableaux

Les **tableaux** sont une **structure** de données **couramment utilisée** dans MongoDB pour **stocker des informations**.

Les **opérateurs de tableaux** sont utilisés pour **rechercher des documents** en fonction de la **présence** ou de **l'absence** d'un élément dans un tableau, ou pour **interroger** des tableaux de manière **plus complexe**.

Les **opérateurs de filtres** de tableaux incluent `$in`, `$nin`, `$size`, `$all`...

- <a href="https://www.mongodb.com/docs/v6.0/reference/operator/query-array/">**Documentation officiel sur les opérateurs de filtres de tableau**</a>

### 1. Opérateur $in et $nin

L'opérateur `$in` est utilisé pour **sélectionner** les documents dont le tableau **possède au moins un élément** égale à une des élément du **tableau spécifié**.

Dans l'exemple suivant, nous allons **séléctionner** tous les auteurs **possèdant** `Journaliste` ou `Historien` dans le **champ** `titles`  

```js
const scenaristOrJournalist = await Author.find({ titles: { $in: [ "Journaliste", "Scénariste" ] } });
```

Resultat dans la console:

```js
[
  {
    address: { country: 'USA', city: 'Oak Park, Illinois' },
    _id: new ObjectId("6433fbc44d26b810352a17b3"),
    name: 'Ernest Hemingway',
    age: 61,
    alive: false,
    titles: [ 'Ecrivain', 'Journaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'UK', city: 'Edinburgh' },
    _id: new ObjectId("6433fbc44d26b810352a17b6"),
    name: 'J.K. Rowling',
    age: 56,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

---

L'opérateur `$nin` est utilisé pour **sélectionner** les documents dont le tableau **ne possède aucun** éléments du **tableau sécifié**.

Dans l'exemple suivant, nous allons **séléctionner** tous les auteurs **ne possèdant pas** `Journaliste` et `Historien` dans le tableau `titles`

```js
const notScenaristAndNotJournalist = await Author.find({ titles: { $nin: [ "Journaliste", "Scénariste" ] } })
```

Resultat dans la console:

```js
[
  {
    address: { country: 'France', city: 'Paris' },
    _id: new ObjectId("6433fbc44d26b810352a17ad"),
    name: 'Victor Hugo',
    age: 83,
    alive: false,
    titles: [ 'Poète', 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'England', city: 'Stratford' },
    _id: new ObjectId("6433fbc44d26b810352a17b0"),
    name: 'William Shakespeare',
    age: 52,
    alive: false,
    titles: [ 'Acteur', 'Poète' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'France', city: 'Nantes' },
    _id: new ObjectId("6433fbc44d26b810352a17b9"),
    name: 'Jules Verne',
    age: 77,
    alive: false,
    titles: [ 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'New Hampshire' },
    _id: new ObjectId("6433fbc44d26b810352a17bf"),
    name: 'Dan Brown',
    age: 58,
    alive: true,
    titles: [ 'Écrivain' ],
    books: [ [Object], [Object], [Object] ],
    __v: 0
  }
]
```

---

### 2. Opérateur $all

L'opérateur `$all` est utilisé pour **sélectionner** les documents dont le **tableau** contient **toutes valeurs spécifiées**.

Dans l'exemple suivant, nous allons **séléctionner** tous les auteurs dans le tableau `titles` **contient au minimum** `Ecrivain` et `Scénariste`.

```js
const EcrivainEtScenarist = await Author.find({ genres: { $all: [ "Ecrivain", "Scénariste" ] } })
```

Resultat dans la console:

```js
[
  {
    address: { country: 'UK', city: 'Edinburgh' },
    _id: new ObjectId("6433fbc44d26b810352a17b6"),
    name: 'J.K. Rowling',
    age: 56,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

---

#### 3. Opérateur $size

L'opérateur `$size` est utilisé pour **sélectionner** les documents dont la **taille** d'un champ tableau correspond à une **valeur spécifiée**.

Voici un exemple :

```js
const auhorsWith3Titles = await Author.find({ titles: { $size: 3 } })
```

Resultat dans la console:

```js
[
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

---

## 3. Limiter les données

**Une fois** le **query construit** avec les **filtres désirés**, vous pouvez **limiter** les **données** récuperer.

Vous pouvez par exemple **décider** des **champ**s à **récuperer** et **exclure**, ainsi que le **nombre** de **documents** à **récuperer**.

---

### 1. Limiter les champs

L'**opérateur** `$select` est un opérateur de requête MongoDB **utilisé** pour **sélectionner** les **champs à renvoyer** dans les résultats de la requête.

Dans Mongoose, cet **opérateur** est disponible sous forme de **méthode chainable** `select()`.

```js
Model.find().select(limiteur)
```

Par exemple, pour **rechercher tous les auteurs** et ne **récuperer que le nom** et la **liste de titres**:

```js
// récuperer que le nom et les livre de tous les auteurs
const authors = await Author.find().select('name titles')
```

Dans cet exemple, nous utilisons `select()` pour ne **sélectionner que les champs** `name` et `books` des documents `Author`.

Le **résultat** de la requête ne renverra que ces **champs**, plutôt que tous les champs du document.

Resultat dans la console:

```js
[
  {
    _id: new ObjectId("6433fbc44d26b810352a17ad"),
    name: 'Victor Hugo',
    titles: [ 'Poète', 'Ecrivain' ]
  },
  {
    _id: new ObjectId("6433fbc44d26b810352a17b0"),
    name: 'William Shakespeare',
    titles: [ 'Acteur', 'Poète' ]
  },
  {
    _id: new ObjectId("6433fbc44d26b810352a17b3"),
    name: 'Ernest Hemingway',
    titles: [ 'Ecrivain', 'Journaliste' ]
  },
  {
    _id: new ObjectId("6433fbc44d26b810352a17b6"),
    name: 'J.K. Rowling',
    titles: [ 'Ecrivain', 'Scénariste' ]
  },
  {
    _id: new ObjectId("6433fbc44d26b810352a17b9"),
    name: 'Jules Verne',
    titles: [ 'Ecrivain' ]
  },
  {
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ]
  },
  {
    _id: new ObjectId("6433fbc44d26b810352a17bf"),
    name: 'Dan Brown',
    titles: [ 'Écrivain' ]
  }
]
```

---

### 2. Limiter les document

Vous pouvez aussi décider de **limiter le nombre de documents** retournés grâce a la **méthode chainée** `limit()`, qui **prend en paramètre** le **nombre** de document à **récuperer**.

```js
Model.find().limit(nombre)
```

Par exemple, pour ne **récuperer** que les `3` **premier auteurs**, nous pouvons utiliser cette **instruction**:

```js
// récuperer que les trois premier auteurs
const only3FirstAuthors = await Author.find().limit(3)
```

Resultat dans la console:

```js
[
  {
    address: { country: 'France', city: 'Paris' },
    _id: new ObjectId("6433fbc44d26b810352a17ad"),
    name: 'Victor Hugo',
    age: 83,
    alive: false,
    titles: [ 'Poète', 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'England', city: 'Stratford' },
    _id: new ObjectId("6433fbc44d26b810352a17b0"),
    name: 'William Shakespeare',
    age: 52,
    alive: false,
    titles: [ 'Acteur', 'Poète' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Oak Park, Illinois' },
    _id: new ObjectId("6433fbc44d26b810352a17b3"),
    name: 'Ernest Hemingway',
    age: 61,
    alive: false,
    titles: [ 'Ecrivain', 'Journaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  }
]
```

---

### 3. Ignorer des documents

Il est possible d'**ingorer** un certain nombre de **document** en utilisant la **méthode chainée** `skip()` qui **prend** en **paramètre** le **nombre** de document **ignorés**:

```js
Model.find().skip(nombre)
```

Par exemple, pour **ignorer** les `3` **premier** auteurs, nous pouvons utiliser cette **instruction**:

```js
// Récuperer tous les auteurs en ignorant les 3 premier
const authors = await Author.find().skip(3)
```

Resultat dans la console:

```js
[
  {
    address: { country: 'UK', city: 'Edinburgh' },
    _id: new ObjectId("6433fbc44d26b810352a17b6"),
    name: 'J.K. Rowling',
    age: 56,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'France', city: 'Nantes' },
    _id: new ObjectId("6433fbc44d26b810352a17b9"),
    name: 'Jules Verne',
    age: 77,
    alive: false,
    titles: [ 'Ecrivain' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'Bangor' },
    _id: new ObjectId("6433fbc44d26b810352a17bc"),
    name: 'Stephen King',
    age: 75,
    alive: true,
    titles: [ 'Ecrivain', 'Scénariste', 'Jounaliste' ],
    books: [ [Object], [Object] ],
    __v: 0
  },
  {
    address: { country: 'USA', city: 'New Hampshire' },
    _id: new ObjectId("6433fbc44d26b810352a17bf"),
    name: 'Dan Brown',
    age: 58,
    alive: true,
    titles: [ 'Écrivain' ],
    books: [ [Object], [Object], [Object] ],
    __v: 0
  }
]
```

---

### 4. Pagination

La **pagination** est une **technique** utilisée pour **diviser** les résultats d'une requête en **plusieurs pages**.

Elle est **utile** pour les requêtes qui **renvoient** de **grandes quantités** de données, car elle permet de **limiter** la **quantité** de données renvoyées à chaque fois et donc d'**améliorer les performances**.

```js
// Récuperer tous les auteurs en ignorant les 5 premier
const authors = await Author.find().skip((pageNum - 1) * pageSize).limit(pageSize)
```

Dans cet exemple, nous **utilisons** `skip()` pour **ignorer** les **résultats** des pages **précedentes** et `limit()` pour **limiter** les **résultats** renvoyés à la **taille de la page**.

La **variable** `pageSize` indique le **nombre de documents** à renvoyer par **page**, et la variable `pageNum` indique le **numéro de page** à renvoyer.

---

## Conclusion

En conclusion, nous avons vu comment **utiliser** les **opérateurs** pour **filtrer** les données selons des **critères**.

Nous avons aussi vu comment **limiter les données** à récuperer en **exluant des champs** avec la fonction `select()`, et comment **limiter** les **document récuperer** en utlisant les **fonctions** `limit()` et `skip()`, ainsi que de leur **utilisation combinée** pour créer une **pagination**.

Le **prochain chapitre** portera sur les **relations entre modèles** dans Mongoose.

Dans la création d'applications, il est courant de devoir **manipuler des données qui ont des liens entre elles**.

Les **relations** permettent de **définir** comment les **données sont associées** et de **créer des requêtes** pour **récupérer** les **données liées**.

Nous verrons les **différents types de relations** entre modèles et comment les **définir** avec Mongoose.

---

## Aller plus loin

[Mongoose: Les opérations](https://djemai-samy.com/posts/2.mongoose-operations.article)

[Mongoose: Les Relations](https://djemai-samy.com/posts/4.mongoose-relations.article)
