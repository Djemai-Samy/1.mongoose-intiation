// Import du modéle
import Author from "./1.model.js";

/**------------------------------------------------------------
 * 2.1 Création de données:
 *
 */

// fonction pour créer/ajouter un auteur a la BDD si il n'existe pas
export async function createAuhtor(newAuthorData) {
	try {
		// Créer de l'instance et du document
		const author = await Author.create(newAuthorData);
		// Retourner l'auteur créé
		return author;
	} catch (err) {
		// Erreur lors de la création du document
		// Surement car il existe
		console.log("Auteur existe déja!");
		// Créer de l'instance et du document
		return await Author.findOne({ name: newAuthorData.name });
	}
}

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
/*
 * -------------------------------------------------------------
 **/

/**------------------------------------------------------------
 * 2.2 Lecture de données:
 *
 */

//fonction pour récuperer/lire tous les auteurs de la BDD
export async function getAuthors() {
	// récuperer tous les auteurs
	const authors = await Author.find();

	// Retrouner les auteurs
	return authors;
}

//fonction pour récuperer/lire un auteur avec son id si il existe sinon null
export async function getAuthorByID(id) {
	// récuperer tous les auteurs
	const author = await Author.findById(id);

	// Retrouner l'auteur
	return author;
}

//fonction pour récuperer/lire un auteur avec son nom si il existe sinon null
export async function getAuthorByName(name) {
	// récuperer tous les auteurs
	const author = await Author.findOne({ name });

	// Retrouner l'auteur
	return author;
}
/*
 * -------------------------------------------------------------
 **/

/**------------------------------------------------------------
 * 2.3 Mise à jour de données:
 *
 */

//fonction pour mettre à jour un auteur a la BDD
export async function updateAuthor(id, newData) {
	// Récuperer l'auteur dans la BDD avec son ID
	const author = await Author.findByIdAndUpdate(id, newData, { new: true });

	// Si l'auteur n'existe pas
	if (!author) return console.log("L'auteur n'existe pas!");

	// Retrouner l'auteur
	return author;
}
/*
 * -------------------------------------------------------------
 **/

/**------------------------------------------------------------
 * 2.4. Suppression de données:
 *
 */

//fonction pour supprimer un auteur a la BDD
export async function deleteAuthor(id) {
	// Récuperer et supprimer l'auteur dans la BDD avec son ID
	const result = await Author.findByIdAndDelete(id);

	// Si aucun élément n'a été supprimer/auteur
	if (result.deletedCount === 0) console.log("Auteur introuvable");

	// Retrouner le resultat du query
	return result;
}
/*
 * -------------------------------------------------------------
 **/
