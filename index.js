// Librairie pour intéragir avec une BDD MongoDB
import mongoose from "mongoose";

// Nom de la base de données à utiliser
const DBName = "mabdd";

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
