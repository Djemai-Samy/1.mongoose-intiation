import Author from "./model.js";

/**------------------------------------------------------------
 * 1.1 Recuperer un seul document
 */

// Fonction pour récuperer le premier auteur trouvé avec un nom
export async function getAuthorByName(authorName) {
	// Méthode pour récuperer la liste d'auteur avec son nom
	const author = await Author.findOne({ name: authorName });

	// Tester si il n"existe pas
	if (!author) console.log(`Auteur avec nom: ${authorName} n'existe pas!`);

	//retourner l'auteur trouvé
	return author;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 1.2 Recuperer plusieurs document
 */

// Fonction pour récuperer le premier auteur trouvé avec un nom
export async function getAuthorsAlive() {
	// Méthode pour récuperer la liste d'auteur avec son nom
	const authorsAlive = await Author.find({ alive: true });

	//retourner l'auteur trouvé
	return authorsAlive;
}

export async function getAuthorsAliveFrom(place) {
	// Méthode pour récuperer la liste d'auteur avec son nom
	const authorsAliveFrom = await Author.find({ alive: true, "address.country": place });
	//retourner l'auteur trouvé
	return authorsAliveFrom;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 1.3 Récuperer le nombre
 */

// Fonction pour récuperer le nombre d'auteur provenant d'un pays
export async function getAuthorsCount(place) {
	// Méthode pour récuperer la liste d'auteur avec son nom
	const numberAuthorsFrom = await Author.count({ "address.country": place });

	//retourner l'auteur trouvé
	return numberAuthorsFrom;
}

/**
 * -------------------------------------------------------------
 */
