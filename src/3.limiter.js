import Author from "./model.js";

/**------------------------------------------------------------
 * 3.1 Limiter les champs
 */

// Fonction pour récuperer que le nom et titre des auteurs
export async function getAuthorsOnlyNameAndTitles() {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const authorsWithOnlyNameAndTitles = await Author.find().select("name titles");

	//retourner l'auteur trouvé
	return authorsWithOnlyNameAndTitles;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 3.2 Limiter les documents
 */

// Fonction pour récuperer que le nom et titre des auteurs
export async function getAuthorsWithLimit(limit) {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const limitedAuthors = await Author.find().limit(limit);

	//retourner l'auteur trouvé
	return limitedAuthors;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 3.3 ignorer les documents
 */

// Fonction pour récuperer tous les auteuren ignorant un nombre
export async function getAuthorsWithIgnore(ignoreNumber) {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const authorsNotIgnored = await Author.find().skip(ignoreNumber);

	//retourner les auteurs trouvés
	return authorsNotIgnored;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 3.4 Pagination
 */

// Fonction pour récuperer tous les auteuren ignorant un nombre
export async function getAuthorsWithPage(pageNum) {
	// Nombre d'auteur par page
	const pageSize = 3;
	// Récuperer 3 auteurs suivant le numero de la page
	const authorsFromPage = await Author.find()
		.skip((pageNum - 1) * pageSize)
		.limit(pageSize);

	//retourner les auteurs trouvés
	return authorsFromPage;
}

/**
 * -------------------------------------------------------------
 */
