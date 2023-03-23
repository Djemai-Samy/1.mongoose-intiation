# Mongoose: Introduction

## [Page officiel du cours Mongoose: Introduction](https://djemai-samy.com/posts/1.mongoose-introduction.article)

![Image du cours: Mongoose: Introduction](https://djemai-samy.com/blog/2.programmation/2.server/2.nodejs/mongoose/1.mongoose-introduction/1.expresmongoose-introduction.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Mongoose est une bibliothèque pour Node.js qui facilite l'utilisation de MongoDB, la base de données NoSQL la plus populaire..

Elle permet de créer des modèles, des schémas et de manipuler les données stockées dans une base de données MongoDB.

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

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

1. **Comprendre** les concepts clés de Mongoose, tels que les **modèles**, les **schémas** et les **documents**.
2. **Installer** et **configurer** MongoDB localement ou utiliser MongoDB Atlas.
3. **Installer** Mongoose et le **connecter** à une **base de données** MongoDB.

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

## 1. Présentation de MongoDB

## 1.1. MongoDB c'est quoi?

MongoDB est une **base de données NoSQL** (Not Only SQL) de type **document**. 

Elle **stocke** les **données** sous forme de **documents** JSON (JavaScript Object Notation) dans des **collections** plutôt que dans des tables comme les bases de données relationnelles. 

Cette **structure** permet une plus grande **flexibilité** pour les applications modernes qui ont des données qui évoluent rapidement. 

En effet, dans les bases de données relationnelles, les tables doivent être modifiées chaque fois qu'un nouveau champ est ajouté, supprimé ou modifié. 

Dans MongoDB, les **documents** peuvent être **modifiés** à tout moment **sans avoir** à **modifier** toute la **structure** de la base de données.

Vous pouvez **appronfondir** vos **connaissances** sur le **fonctionnement** de **MongoDB**:

- [***Qu'est-ce que MongoDB ?***.](https://djemai-samy.com/posts/1.mongodb-introduction.article)

---

### 1.2. Installation de MongoDB localement

Pour **installer localement** MongoDB et les **outils** que nous allons utiliser, vous pouvez **suivre ce tutoriel**.

- [***Installer MongoDB localement***](https://djemai-samy.com/posts/1.mongodb-introduction.article)

Mais pour faire simple, vous pouvez installer MongoDB localement il suffit de:

1. Télécharger le package d'installation sur [le site officiel de MongoDB](https://www.mongodb.com/docs/manual/installation/)
2. Installer MongoDB en suivant les instructions
3. Lancer le serveur MongoDB en exécutant la commande "mongod" dans un terminal

Lorsque le **serveur** est **lancé**, il est possible d'utiliser l'**interface** en ligne de commande mongo pour **interagir** avec la base de données.

Il est également possible d'utiliser un **client graphique** tel que **Compass** pour **visualiser** et **gérer** les **données**.

---

### 1.3. MongoDB sur Atlas

**MongoDB Atlas** est un **service** de base de données **cloud** qui permet d'**héberger** des instances MongoDB.

L'utilisation d'un service cloud est **recommandée** pour les applications qui ont besoin de **scalabilité** et de **disponibilité**.

Atlas offre des fonctionnalités de **surveillance**, de **sauvegarde** et de **restauration** des données, ainsi que des fonctions de **sécurité avancées** telles que l'authentification, l'autorisation et le chiffrement des données.

Pour utiliser Atlas, il faut :

1. Créer un compte sur le [site officiel de MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Créer un cluster MongoDB en suivant les instructions
3. Récupérer la chaîne de connexion pour se connecter à la base de données

---

## 2. Mongoose

Mongoose est une **bibliothèque JavaScript** qui fournit des **fonctionnalités** de **modélisation** de données pour les **applications Node.js** utilisant MongoDB comme base de données. 

Elle offre une **interface simple** et **expressive** pour **gérer les opérations CRUD** (create, read, update, delete) sur la base de données MongoDB.

## 1.Installation

Pour **utiliser Mongoose** dans une application Node.js, il faut **installer** le module Mongoose à l'aide de `npm`. 

- [**Site web de mongoose**](https://mongoosejs.com/)
- [**Package NPM mongoose**](https://www.npmjs.com/package/mongoose)
- [**GitHub de mongoose**](https://github.com/Automattic/mongoose)

Dans un terminal, **exécutez** la commande suivante pour **installer** Mongoose :

```bash
npm install mongoose
```

---

### 2. Connexion à la base de données

Pour se **connecter** à la base de données MongoDB à l'aide de Mongoose, il faut **créer** une **instance de connexion** à la base de données. 

Cette **instance** utilise la **chaîne de connexion** récupérée lors de la création du cluster MongoDB sur Atlas ou lors de l'installation de MongoDB localement. 

Voici un exemple de **code** pour se **connecter** à une base de données MongoDB à l'aide de Mongoose :

```js
// Librairie pour intéragir avec une BDD MongoDB
import mongoose from "mongoose";

// L'URI de la base de données locale
const MONGODB_URI = "mongodb://127.0.0.1:27017/mabdd";

/**------------------------------------------------------------
* Connexion à la BDD
*/

mongoose.connect(MONGODB_URI).then(() => {
  // Afficher dans la console que la BDD est connecté
  console.log("Connecté à la BDD");
})
.catch((err) => {
  // Erreur dans le then
  console.log("Pas connecté à la BDD");
  console.log(err);
});

/**
* -------------------------------------------------------------
*/
```

---

### 3. Les Modèles et les Schémas

Dans MongoDB, les **données** sont **stockées** sous forme de`JSON` dans des **documents** et **collections**. 

Vous pour retrouvez ici un **explication plus complète** du fonctionnement de MongoDB:

[***Les documents et collections dans MongoDB***.](https://djemai-samy.com/posts/1.mongodb-operations.article)

Les **modèles** et **schémas** MongoDB permettent de **définir** la **structure** des **documents** qui seront **stockés** dans la **collection**. 

Le **modèle** est une abstraction qui **représente** un type de **document** dans MongoDB. 

Il définit les **propriétés** et les **comportements** des **documents stockés** dans la **collection**. 

---

Les **schémas** MongoDB sont utilisés pour **définir** les **règles de validation** des données stockées dans un **modèle**. 

Ils **définissent** les **types** de données, les **contraintes** et les **options de validation** pour les **champs** d'un **document**.

Cela permet de s'assurer que les **données** stockées **respectent** une **structure** donnée, ce qui **facilite** la **récupération des données** et la **gestion des erreurs**

## Conclusion

**Mongoose** est un **module** Node.js qui facilite la **modélisation** des **données** pour les applications utilisant MongoDB comme base de données. 

Dans ce cours, nous avons appris à **installer MongoDB localement** ou à utiliser Atlas pour héberger la base de données. 

Nous avons également vu ce que sont les **modèles** et les **schémas** et leur **relation** avec les **documents** et **collections** de MongoDB. 

Nous avons aussi vu comment **installer** et **utiliser Mongoose** sur un projet Node.js.

Dans les prochain articles, nous allons voire comment **utiliser** mongoose pour **intéragir** avec la base de données, te vous apprendrez à **créer des modèles**, des **schémas** et à **effectuer** des **opérations CRUD** avec Mongoose. 

## Aller plus loin

[Node.js: Initiation](https://djemai-samy.com/posts/0.nodejs-initiation)
[Mongoose: Les Opérations](https://djemai-samy.com/posts/2.mongoose-operations.article)
