/**------------------------------------------------------------
 * 1.1 Définition du schéma
 */

import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	age: { type: Number, required: true },
	alive: { type: Boolean, required: true, default: false },
	titles: [String],
	address: {
		country: { type: String, required: true },
		city: String,
	},
	books: [
		{
			title: { type: String, required: true, unique: true },
			date: String,
			genres: [String],
		},
	],
});

/**FIN: 1.1 Définition du schéma
 * -------------------------------------------------------------
 */

// Déclaration du modèle
const Author = mongoose.model("Author", AuthorSchema);

// Exporté le model pour l'utiliser ailleurs:
export default Author;

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
