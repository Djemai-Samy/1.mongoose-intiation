# Mongoose: Opérations

## [Page officiel du cours Mongoose: Opération](https://djemai-samy.com/posts/2.mongoose-operations)

![Image du cours: Mongoose: Operations](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/mongoose/0.mongoose-initiation/2.mongoose-operations/2.mongoose-operations.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Dans ce cours, vous apprendrez à créer des modèles, des schémas et les utiliser pour interagir avec une base de données MongoDB et effectuer des opérations CRUD avec Mongoose et Node.js.

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.expressjs-initiation)

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

Le cours sur les **opérations** avec Mongoose est destiné à tous ceux qui souhaitent **approfondir** leurs connaissances dans l'**utilisation** de cette bibliothèque pour **interagir** avec la **base de données** MongoDB.

Les **modèles** Mongoose sont une **abstraction** de la base de données MongoDB et permettent de **simplifier l'interaction** avec la base de données.

Dans ce cours, vous **apprendrez** à **créer des modèles** et des **schémas** afin **d'effectuer des opérations CRUD** avec Mongoose

---

## Prérequis

Pour **suivre** cette serie d'inititaion, vous devez avoir une bonne **compréhension** du langage **JavaScript** et des **connaissances** de base en **développement web**, y compris la **création** de **sites** web statiques et dynamiques:

- [***Initiation au language Javascript***](https://djemai-samy.com/posts/0.javascript-initiation)
- [***Initiation à la programmation  avec NodeJS.***](https://djemai-samy.com/posts/0.nodejs-initiation)

Il faut aussi **avoir** une **instance** de base de donnée MongoDB:

- [***Introduction et installation de MongoDB et Mongoose***.](https://djemai-samy.com/posts/posts/1.mongoose-introduction.article)

---

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

1. **Créer** des **modèles** Mongoose
2. **Définir** des **schémas** de validation
3. **Réaliser** des **opérations CRUD** avec Mongoose et ExpressJS

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

```bash
📦1.mongoose-initiation
┣ 📂node_modules
┣ 📜package.json
┗ 📜index.js
```

---

 Dans index.js:

```js
// Librairie pour intéragir avec une BDD MongoDB
import mongoose from "mongoose";

// Nom de la base de données à utiliser
const DBName = "mabdd";

// L'URI de la base de données locale
const MONGODB_URI = "mongodb://127.0.0.1:27017/" + DBName;

/**------------------------------------------------------------
* Connexion à la BDD
*/

mongoose
 .connect(MONGODB_URI)
 .then(() => {
   // Afficher dans la console que la BDD est connecté
   console.log("Connecté à la BDD");
 })
 .catch((err) => {
   // Erreur lors de la connexion
   console.log("Pas connecté à la BDD");
   console.log(err);
 });
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
npm run dev
```

---
---

## 1. Les Schemas et les Models

Le **modèle** est une abstraction qui **représente** un type de **document** dans MongoDB.

Il définit les **propriétés** et les **comportements** des **documents stockés** dans la collection.

Les **schémas** MongoDB sont utilisés pour **définir les règles de validation** des données stockées dans un **modèle**.

### 1.1 Définition des schémas

Les **schémas** sont des **structures** qui définissent la **forme** des **documents** stockés dans une collection MongoDB.

Les schémas **définissent** également les **types de données** et les **contraintes** pour chaque **champ** de document.

Avec Mongoose, il est facile de **définir des schémas** avec des **propriétés** et des **valeurs**.

```js
const AuthorSchema = mongoose.Schema({
  name: { type: String, required: true, unique:true },
  age: { type: Number, required: true },
  alive: { type: Boolean, required: true, default: false },
  titles:[ String ],
  address:{
    country: { type: String, required: true },
    city: String
  },
  books:[
    {
      title:{ type: String, required: true, unique: true },
      date: String,
      genres: String
    }
  ]
});
```

Dans cet exemple, le schéma décris cette structure:

1. `name`: Champs de type **chaine de caratcère**, **obligatoire** et **unique** dans la collection
2. `age`: Champs de type **nombre** et **obligatoire**
3. `alive`: Champ de type **boolean**, **obligatoire**, **faux par défaut**
4. `titles`: Champ de type **tableau** de **chaine de caractères**
5. `address`: **Objet imbriqué** ou **sous document** avec deux champs:
   1. `country`: Champ de type **chaine de caractère** et  **obligatoire**
   2. `city`: Champ de type **chaine de caractères** et **non obligatoire**
6. `books`: Champs de type **liste/tableau d'objets imbriqués** ou **sous documents**:
   1. `title`: Champs de type **chaine de caractères**, **obligatoire** et **unique**
   2. `date`: Champs de type **chaine de caractères**
   3. `genres`: Champs de type **chaine de caractères**

---

### 2. Définition des modèles

Les **modèles** Mongoose sont des classes qui **représentent des documents** de MongoDB.

[Rappel des documents avec MongoDB.](https://djemai-samy.com/posts/2.mongodb-operations.article)

Les **modèles** sont créés à **partir des schémas** et peuvent être utilisés pour **effectuer** des **opérations CRUD** avec la base de données.

```js
const Author = mongoose.model('Author', AuthorSchema);
```

Ce model est **objet** contenant **plusieurs méthodes** et **propriétés** pour **interagir** avec la **collection** `authors`, créé dans la base de données.

Nous pouvons maintenant l'utiliser pour **éffectuer** des **opérations** pour **créer**, **lire**, **mettre à jour** et **supprimer les documents** de la **collection** `authors`.

---

## 2. Les opérations

Avec les **modèles** Mongoose, il est facile de **réaliser les opérations CRUD** (Create, Read, Update, Delete) dans une base de données MongoDB.

Nous allons maintenant voir comment **réaliser ces opérations** avec Mongoose.

---

### 1. Création de données

Pour **créer un document** dans une collection, nous devons **créer une instance du modèle** correspondant et **définir les valeurs des propriétés** de ce document et l'**enregistrer** dans la base de données:

```js
// Création de l'instance
const model = new Model(data);

// Enregistrement dans la base de données
await model.save()
```

ou `Model` et le **modèle** créer avec mongoose et `data` les **données à enregistrer** dans le document

Par exemple pour **créer** un **auteur** à partir de cet objet nommé `newAuthorData`:

```js
const newAuthorData = {
  name: "Victor Hugo",
  age: 82,
  alive: true,
  address: {
    country: "France",
    city: "Paris"
  },
  title:['Poète', 'Ecrivain'],
  books: [
    {
      title: "Les Misérables",
      date: "1862",
      genres: ["Historique", "Fiction"]
    },
    {
      title: "Notre-Dame de Paris",
      date: "1831",
      genres: ["Historique", "Fiction"]
    }
  ]
}
```

```js
// Création d'une instance du modele avec les données
const author = new Author(newAuthorData);

// Créer le document depuis l'instance du modèle
await author.save();
```

Nous avons créé une **instance** du modèle `Author` en utilisant un **objet contenant les données**, puis nous l'avons **enregistré** dans la base de données avec la **méthode** `save()`.

Vous pouvez **verifier** si le document est **ajouté** sur MongoDB Compass:

![Representation graphique d'un opération CRUD aprés d'ajout d'un document et sont contenu dans les bases de données No SQL comme MongoDB en utilisant un modèle de Mongoose avec Node.js.](http://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/mongoose/1.mongoose-initiation/2.mongoose-operations/2.1.mongoose-operations-victor.png)

Nous pouvons aussi **utilisé la méthode** `create` du modèle pour **créer et enregistrer** l'auteur en **une seule instruction**:

```js
const author = await Author.create(newAuthorData);
```

---

Vous pouvez aussi **ajouter plusieurs auteurs** en utilsant **une seule reqûete** avec la **méthode** `insertMany()`, en lui passant un **tableau** d'auteurs en **paramètre**:

```js
const multipleAuthors = [
  {
    name: "William Shakespeare",
    age: 52,
    alive: false,
    address: {
      country: "England",
      city: "Stratford",
    },
    title: ["Acteur", "Poète"],
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
    title: ["Ecrivain", "Journaliste"],
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
      country: "United Kingdom",
      city: "Edinburgh",
    },
    title: ["Ecrivain", "Scénariste"],
    books: [
      {
        title: "Harry Potter à l'école des sorciers ",
        date: "1997",
        genres: ["Fantasy", "Fiction", "Magique"],
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
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
      country: "United States",
      city: "Bangor",
    },
    titles: ["Ecrivain", "Scénariste"],
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
];
```

```js
const authors = await Author.insertMany(newAuthorsData);
```

![Representation graphique d'un opération CRUD aprés d'ajout de plusieurs documents et leurs contenu dans les bases de données No SQL comme MongoDB en utilisant un modèle de Mongoose avec Node.js.](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/mongoose/1.mongoose-initiation/2.mongoose-operations/2.1.mongoose-operations-all.png)

---

### 2. Lecture de données

Pour **lire** des données à partir d'une **collection**, nous pouvons **utiliser la méthode** `find()` du modèle correspondant.

Cette **méthode** retourne tous les **élements** d'une collection:

```js
const authors = await Author.find();
```

---

Si nous voulons **récuperer** un **auteur** avec son **identifiant** `_id`, nous pouvons **utiliser** la **méthodes** `findById()`.

Par exemple pour **récuperer** toutes les données de l'**auteur** en utilisant son **identifiant**:

```js
// récuperer l'auteur avec son identifient unique
const author = await Author.findById(id);
```

Le résultat ressemble à ceci:

```js
{
  address: { country: 'France', city: 'Paris' },
  _id: new ObjectId("641ca87da3f803f1d0c53976"),
  name: 'Victor Hugo',
  age: 82,
  alive: true,
  titles: [ 'Poète', 'Ecrivain' ],
  books: [ [Object], [Object] ],
  __v: 0
}
```

---

## 3. Mise à jour de données

Pour **mettre à jour** un documents dans une **collection**, nous devons **d'abord** le **récupérer** à partir de la base de données, **modifier ses propriétés** et l'**enregistrer à nouveau**.

Par exemple, pour **modifier** l'**age** d'un **auteur** dont l'**identifiant** est `ID`:

```js
// Récuperer l'auteur dans la BDD avec son ID
const author = await Author.findById(ID);

// Si l'auteur n'existe pas
if (!author) return console.log("L'auteur n'existe pas!");

// Si l'auteur existe, modifier la valeur du champs age
author.age = 87;

// Puis enregistrer/mettre à jour l'auteur
await author.save();
```

Nous pouvons aussi **utiliser la méthode** `findByIdAndUpdate`, qui permet de faire les **trois opérations** en **une seule instruction**:

```js
// Récuperer l'auteur dans la BDD, le mettre à jour et le retourner
const author = await Author.findByIdAndUpdate(id, newData, { new: true });
```

Nous **utilisons la méthode** `findByIdAndUpdate()` du modèle Auteur pour **récupérer** le document, le **modifier** et l'**enregistrer** dans la BDD.

Dans les **options**, nous précisant que nous voulons **récuperer l'auteur mis à jour** avec la clé `new: true`.

### 4. Suppression de données

Pour **supprimer** des données avec Mongoose, vous pouvez utiliser la **méthode** `findByIdAndDelete()` qui **supprime** un seul document qui **correspond** à un l'**id** fournit en paramètre.

```js
// Récuperer et supprimer l'auteur dans la BDD avec son ID
const result = await Author.findByIdAndDelete(id);
```

---

### 3. Opérations sur les listes

Afin de **manipuler** les données dans une **liste**, Mongoose nous offre **plusiseurs solutions**.

Nous pouvons **récuperer l'auteur** et **manipuler la liste** avec des **méthodes** avant d'**enregistrer** l'auteur dans la base données.

Ou **utiliser** des **opérateurs** afin de **récuperer** et **manipuler** la liste puis **enregistrer** l'**auteur** en une seule instruction.

---

### 1. Ajout d'un élément

Par exemple pour **ajouter un livre**, vous devez tout d'abord **récupérer l'auteur** par son **ID**.

Puis utiliser l'instance pour **ajouter** un nouveau livre dans la **liste** des livres de l'auteur avec la **méthode** `push()`.

```js
// Récuperer l'aurteur avec son ID
const author = await Author.findById(ID);

// Si l'auteur n'existe pas
if (!author) return console.log("Auteur introuvable");

const newBook= {
  title:"Nouveau Livre",
  date: "2022",
  genres: ['Drame', 'Comedie']
}
//ajouté un element a la liste books
author.books.push(newBook);

// Met à jour l'auteur dans la BDD
await author.save();
```

Mongoose offre une **méthode** nommée `findByIdAndUpdate()` qui permet de **trouver** l'auteur avec son **id**, **ajouté** un élément dans la liste grâce à l'opérateur `$push` et à **récuperer** l'auteur mis à jour avec l'**option** `new:true`.

```js
// Récuperer l'aurteur avec son ID, ajouté un element a la liste books, et le retourner
const author = await Author.findByIdAndUpdate(
  id, //L'identifient de l'auteur
  { $push: { books: newData } }, // Ajouté le livre
  { new: true } // Retourner l'auteur mis à jour
);
```

---

### 2. Récuperation d'un élément

Pour **récuperer** un livre, vous devez tout d'abord **récupérer l'auteur**, puis **trouver** le livre en utilisant son identifiant, par exemple:

```js
// Récuperer l'auteur avec son ID
const author = await Author.findById(id);

// Si l'auteur n'existe pas
if (!author) return console.log("Auteur introuvable");

// Récuperer le livre avec son ID
const book = author.books.id(bookID);
```

Pour **récuperer** un livre avec son nom vous pouvez utiliser la méthode `filter()` pour filtrer la liste avec une condition:

```js
// Récuperer l'auteur avec son ID
const author = await Author.findById(id);

// Si l'auteur n'existe pas
if (!author) return console.log("Auteur introuvable");

// Récuperer les livres avec le titre
const book = author.books.filter(
  (book) => book.title === "Harry Potter et la chambre des secrets."
);
```

---

### 3. Mise à jour d'un élément

Pour **mettre à jour** un livre, vous devez:

1. **Récupérer l'auteur** du livre.
2. **Trouver** le **livre** dans la liste.
3. **Utiliser** la **méthode** `set()` afin de **modifier** les données du livre.
4. **Enregistrer** l'auteur dans la base de donnée.

```js
// 1. Récuperer l'auteur avec son ID
const author = await Author.findById(id);

// Si l'auteur n'existe pas
if (!author) return console.log("Auteur introuvable" );

// 2. Récuperer le livre avec son ID
let book = author.books.id(bookID);

// Si le livre n'existe pas
if (!book) return rconsole.log("Book introuvable" );

// 3. Mettre à jour le livre
book.set(newData);

// 4. Mettre à jour l'auteur dans la BDD
await author.save();
```

---

### 4. Supprimer un élément

Pour **supprimer** un livre, vous devez:

1. **Récupérer l'auteur** du livre.
2. **Trouver** le **livre** dans la liste.
3. **Utiliser** la **méthode** `pull()` sur le tableau books en envoyant le livre book récuperer en paramètre.
4. **Enregistrer** l'auteur dans la base de donnée.

```js
// 1. Récuperer l'auteur avec son ID
const author = await Author.findById(id);

// Si l'auteur n'existe pas
if (!author) return console.log("Auteur introuvable");

// 2. Récuperer le livre avec son ID
let book = author.books.id(bookID);

// Si le livre n'existe pas
if (!book) return console.log("Book introuvable");

// 3. supprimer le livre
author.books.pull(book);

// 4. Mettre à jour l'auetur dans la BDD
await author.save();
```

---

## Conclusion

En conclusion, nous avons vu comment **utiliser Mongoose et nodeJS** pour **créer des modèles** et **effectuer des opérations** CRUD sur une base de données MongoDB.

Nous avons commencé par **comprendre** la définition des **schémas et modèles**, puis comment les **utiliser** pour **créer**, **lire**, **mettre à jour** et **supprimer** des données.

Le **prochain chapitre** portera sur comment utiliser des **queries** de base et avancées pour **récupérer des données** selon des **critères spécifiques**, ainsi que les **méthodes de tri** pour **ordonner** ces données, et comment utiliser la **pagination** pour **récupérer des données en lots**.

---

## Aller plus loin

[Mongoose: Introduction](https://djemai-samy.com/posts/1.mongoose-introduction.article)

[Mongoose: Les Opérateurs](https://djemai-samy.com/posts/3.mongoose-operators.article)
