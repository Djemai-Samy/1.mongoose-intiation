// Import du modéle
import Author from "./1.model.js";

/**------------------------------------------------------------
 * 3.1 Ajouter un livre:
 *
 */

//fonction pour créer/ajouter un livre à auteur
export async function addBook(authorID, newBookData) {
	try {
		// Créer de l'instance et du document
		const author = await Author.findById(authorID);

		// Tester si l'auteur existe
		if (!author) return console.log("Auteur introuvable!");

		// Ajouter le livre à la fin de la liste
		author.books.push(newBookData);

		// Enregister/Mettre à jour l'utilisateur dans la BDD
		await author.save();
		// Retourner l'auteur créé
		return author;
	} catch (err) {
		console.log(err);
	}
}

/*
 * -------------------------------------------------------------
 **/

/**------------------------------------------------------------
 * 3.2 Récuperer un livre:
 *
 */

//fonction pour recuperer/lire un livre d'un auteur
export async function getBook(authorID, bookID) {
	try {
		// Récuperer l'auteur
		const author = await Author.findById(authorID);

		// Tester si l'auteur existe
		if (!author) return console.log("Auteur introuvable!");

		// retourner le livre
		return author.books.id(bookID);
	} catch (err) {
		console.log(err);
	}
}

/*
 * -------------------------------------------------------------
 **/

/**------------------------------------------------------------
 * 3.3 mettre à jour un livre
 *
 */

//fonction pour modifier le livre d'un auteur
export async function updateBook(authorID, bookID, newBookData) {
	try {
		// 1. Récuperer l'auteur avec son identifiant
		const author = await Author.findById(authorID);

		// 2. Récuperer le livre avec son ID
		let book = author.books.id(bookID);

		// Si le livre n'existe pas
		if (!book) return rconsole.log("Book introuvable");

		// 3. Mettre à jour le livre
		book.set(newBookData);

		// 4. Mettre à jour l'auteur dans la BDD
		await author.save();

		// retourner l'auteur mis à jour
		return author;
	} catch (err) {
		console.log(err);
	}
}

/*
 * -------------------------------------------------------------
 **/

/**------------------------------------------------------------
 * 3.4 Supprimer un livre
 *
 */

//fonction pour supprimer le livre d'un auteur
export async function deleteBook(authorID, bookID) {
	try {
		// 1. Récuperer l'auteur avec son identifiant
		const author = await Author.findById(authorID);

		// 2. Récuperer le livre avec son ID
		let book = author.books.id(bookID);

		// Si le livre n'existe pas
		if (!book) return rconsole.log("Book introuvable");

		// 3. supprimer le livre
		author.books.pull(book);

		// 4. Mettre à jour l'auteur dans la BDD
		await author.save();

		// retourner l'auteur mis à jour
		return author;
	} catch (err) {
		console.log(err);
	}
}

/*
 * -------------------------------------------------------------
 **/
