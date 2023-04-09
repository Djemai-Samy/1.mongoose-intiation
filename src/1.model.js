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
