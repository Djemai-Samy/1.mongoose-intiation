import Author from "./model.js";

/**------------------------------------------------------------
 * 2.1 Opérateurs logiques
 */

// Fonction pour récuperer les auteurs provenant d'un pays ou d'un ville récu en paramaètre
export async function getAuthorsFromPlace(place) {
	// Récuperer la liste d'auteurs provenant de city ou country égale a place
	const authorFromPlace = await Author.find({
		$or: [{ "address.country": place }, { "address.city": place }],
	});

	//retourner l'auteur trouvé
	return authorFromPlace;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.2 Opérateurs d'égalité
 */

// Fonction pour récuperer les auteurs provenant d'un pays ou d'un ville récu en paramaètre
export async function getAuthorsOlderThen(minAge) {
	// Récuperer la liste d'auteurs provenant de city ou country égale a place
	const authorOlderThenMinAge = await Author.find({ age: { $gte: minAge } });

	//retourner l'auteur trouvé
	return authorOlderThenMinAge;
}

// Fonction pour récuperer les auteurs provenant d'un pays ou d'un ville récu en paramaètre
export async function getAuthorsAgedBetween(minAge, maxAge) {
	// Récuperer la liste d'auteurs provenant de city ou country égale a place
	const authorBetweenMinAgeAndMaxAge = await Author.find({
		age: { $gte: minAge, $lte: maxAge },
	});

	//retourner l'auteur trouvé
	return authorBetweenMinAgeAndMaxAge;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.3 opérateur regex
 */

// Fonction pour récuperer les auteurs en utilisant un regex sur leurs noms
export async function getAuthorByRegex(regex) {
	// Récuperer la liste d'auteurs avec un regex sur le nom
	const authorNameRegex = await Author.find({ name: { $regex: regex } });

	//retourner l'auteur trouvé
	return authorNameRegex;
}

/**
 * -------------------------------------------------------------
 */

/**------------------------------------------------------------
 * 2.4 opérateurs tableaux
 */

// 2.4.1 Opératur $in
// Fonction pour récuperer les auteurs possédant au moins un title de la liste titles
export async function getAuthorByTitleIn(titles) {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const authorsWithOneOfTitles = await Author.find({ titles: { $in: titles } });

	//retourner l'auteur trouvé
	return authorsWithOneOfTitles;
}

// 2.4.1 Opératur $nin
// Fonction pour récuperer les auteurs possédant au moins un title de la liste titles
export async function getAuthorByTitleNotIn(titles) {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const authorsWithOneOfTitles = await Author.find({ titles: { $nin: titles } });

	//retourner l'auteur trouvé
	return authorsWithOneOfTitles;
}

// 2.4.2 opérateur $all
// Fonction pour récuperer les auteurs possédant au moins tous les titles
export async function getAuthorWithAll(titles) {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const authorsWithAllTitles = await Author.find({ titles: { $all: titles } });

	//retourner les auteurs trouvés
	return authorsWithAllTitles;
}

// 2.4.3 opérateur $size
// Fonction pour récuperer les auteurs possédant un nombre de titles
export async function getAuthorWithNumberOfTitles(numberOftitles) {
	// Récuperer la liste d'auteurs possédant au moins un title de titles
	const authorsWithNumberOfTitltes = await Author.find({
		titles: { $size: numberOftitles },
	});

	//retourner les auteurs trouvés
	return authorsWithNumberOfTitltes;
}
/**
 * -------------------------------------------------------------
 */
