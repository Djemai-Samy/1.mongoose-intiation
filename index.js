// Librairie pour intéragir avec une BDD MongoDB
import mongoose from "mongoose";
import {
	createAuhtor,
	createAuthors,
	deleteAuthor,
	getAuthorByID,
	getAuthorByName,
	getAuthors,
	updateAuthor,
} from "./src/2.operations.js";
import { multipleAuthors, victorHugo } from "./src/mocks.js";
import { addBook, deleteBook, getBook, updateBook } from "./src/3.list.js";

// Nom de la base de données à utiliser
const DBName = "librairie";

// L'URI de la base de données locale
const MONGODB_URI = "mongodb://127.0.0.1:27017/" + DBName;

/**------------------------------------------------------------
 * Connexion à la BDD et
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

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.1 Ajouter des document
 */

// Ajouter Victor Hugo dans la BDD
const victorHugoDB = await createAuhtor(victorHugo);

// Stocker l'idetifiant unique de Victor Hugo
const VICTOR_HUGO_ID = victorHugoDB._id;

// Créer plusieurs auteurs
const allAuthors = await createAuthors(multipleAuthors);

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.2 Lecture des documents
 */

// Récuperer tous les auteurs
const allAuthorsFromDB = await getAuthors();
// Afficher la liste de tous les auteur de la BDD
console.log(allAuthorsFromDB);

// 

// Récuperer Victor Hugo avec son ID
const authorByID = await getAuthorByID(VICTOR_HUGO_ID);
// Afficher l'auteur récuperer de la BDD
console.log(authorByID);

// Récuperer l'auteur J.K. Rowling avec son nom
const JKRowling = await getAuthorByName('J.K. Rowling');
console.log('J.K. Rowling: ', JKRowling);
const JK_ROWLING_ID = JKRowling._id

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.3 Mise à jour des documents
 */

// Mettre à jour l'age et alive de Victor Hugo
const updatedAuthor = await updateAuthor(VICTOR_HUGO_ID, { age: 83, alive: false });
// Afficher la liste de tous les auteur de la BDD
console.log(updatedAuthor);

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.4 Suppression des documents
 */

// Supprimer Victor Hugo 
const result = await deleteAuthor(VICTOR_HUGO_ID);
// Afficher le resultat du query
console.log(result);

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 3.1 Ajout de livres
 */

// Ajouter un livre a l'auteur J.K. Rowling
const authorWithNewBook = await addBook(JK_ROWLING_ID, {
  title:"Harry Potter et la chambre",
  date: "1998",
  genres: ['Fiction', 'Magique']
});
// Afficher le resultat du query
console.log(authorWithNewBook);

// Garder l'identifiant du nouveau livre 
const NEW_BOOK_ID = authorWithNewBook.books[authorWithNewBook.books.length - 1]._id
/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 3.2 Recuperer un livre
 */

//Récuperer le livre ajouté précedemment avec son ID
const book = await getBook(JK_ROWLING_ID, NEW_BOOK_ID);
// Afficher le resultat du query
console.log(book);

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 3.3 Mettre à jour un livre
 */

// Changer le titre et la date du livre 
const auhtorUpdatedBook = await updateBook(JK_ROWLING_ID, NEW_BOOK_ID, {title:"Harry Potter et la chambre des secrets.", date:'1999'});
// Afficher l'auteur avec le livre mis à jour
console.log(auhtorUpdatedBook);

/**
 * -------------------------------------------------------------
 */


/**------------------------------------------------------------
 * 3.4 Supprimer une livre
 */

// Supprimer le livre
const authorWithDeletedBook = await deleteBook(JK_ROWLING_ID, NEW_BOOK_ID);
// Afficher l'auteur avec le livre mis à jour
console.log(authorWithDeletedBook);

/**
 * -------------------------------------------------------------
 */


