// Librairie pour intéragir avec une BDD MongoDB
import mongoose from "mongoose";
import { multipleAuthors } from "./src/mock.js";
import { createAuthors } from "./src/model.js";
import {
	getAuthorByName,
	getAuthorsCount,
	getAuthorsAlive,
	getAuthorsAliveFrom,
} from "./src/1.recuperation.js";
import {
	getAuthorByRegex,
	getAuthorByTitleIn,
	getAuthorByTitleNotIn,
	getAuthorWithAll,
	getAuthorWithNumberOfTitles,
	getAuthorsAgedBetween,
	getAuthorsFromPlace,
	getAuthorsOlderThen,
} from "./src/2.filtres.js";
import {
	getAuthorsOnlyNameAndTitles,
	getAuthorsWithIgnore,
	getAuthorsWithLimit,
	getAuthorsWithPage,
} from "./src/3.limiter.js";

// Nom de la base de données à utiliser
const DBName = "ma-libraire-3";

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

		// Lancer le script principal
		lancerScript();
	})
	.catch((err) => {
		// Erreur lors de la connexion
		console.log("Pas connecté à la BDD");
		console.log(err);
	});

/**
 * -------------------------------------------------------------
 */

// Fonction pour ajouter des donnée à la BDD
async function mockData() {
	// Créer plusieurs auteurs si il n'existe pas
	return await createAuthors(multipleAuthors);
}

//  Script principale
async function lancerScript() {
	// Ajouter de la données dans la BDD pour les exemples:
	const newAuthors = await mockData();

	// 1.1 Récuperer un seul document
	console.log("1.1 Récuperer l'auteur Victor Hugo avec son nom");
	const victorHugo = await getAuthorByName("Victor Hugo");
	console.log(victorHugo);

	// 1.2 Récuperer plusieurs documents
	console.log("1.2 Récuperer tous les auteurs vivants");
	const auhtorsAlive = await getAuthorsAlive();
	console.log(auhtorsAlive);

	console.log("1.2 Récuperer tous les auteurs vivants provenant de USA");
	const auhtorsAliveFromFrance = await getAuthorsAliveFrom("USA");
	console.log(auhtorsAliveFromFrance);

	// 1.3 Récuperer le nombre
	console.log("1.3 Récuperer le nombre d'auteur provenant de France");
	const numberAuthorsFromFrance = await getAuthorsCount("France");
	console.log(`Nombre d'auteurs de France: ${numberAuthorsFromFrance}`);

	// 2.1 Opérateurs logiques
	console.log("2.1 Récuperer le auteur provenant de France");
	const auhtorsFromFrance = await getAuthorsFromPlace("France");
	console.log(auhtorsFromFrance);

	console.log("2.2 Récuperer les auteurs provenant de Paris");
	const auhtorsFromParis = await getAuthorsFromPlace("Paris");
	console.log(auhtorsFromParis);

	// 2.2 Opérateurs d'égalité
	console.log("2.2 Récuperer les auteurs dont age est entre 70 et 80");
	const authorsAgedBetween70And80 = await getAuthorsAgedBetween(70, 80);
	console.log(authorsAgedBetween70And80);

	// 2.3 Opérateurs regex
	console.log("2.3 Récuperer les auteurs dont nom contient J");
	const auhtorsContenantJ = await getAuthorByRegex(/J/);
	console.log(auhtorsContenantJ);

	// 2.4 Opérateurs tableaux

	// 2.4.1 Opérateur $in
	console.log("2.4.1 Récuperer les auteurs Journaliste ou Scénariste");
	const scenaristOrJournalist = await getAuthorByTitleIn(["Journaliste", "Scénariste"]);
	console.log(scenaristOrJournalist);

	// 2.4.1 Opérateur $nin
	console.log("2.4.1 Récuperer les auteurs non Journaliste et non Scénariste");
	const notScenaristAndNotJournalist = await getAuthorByTitleNotIn([
		"Journaliste",
		"Scénariste",
	]);
	console.log(notScenaristAndNotJournalist);

	// 2.4.2 Opérateur $all
	console.log("2.4.2 Récuperer les auteurs Ecrivain ET Scénartiste");
	const EcrivainEtScenarist = await getAuthorWithAll(["Ecrivain", "Scénariste"]);
	console.log(EcrivainEtScenarist);

	// 2.4.3 Opérateur $size
	console.log("2.4.3 Récuperer les auteurspossédant 3 titles");
	const auhorsWith3Titles = await getAuthorWithNumberOfTitles(3);
	console.log(auhorsWith3Titles);

	// 3.1 Limiter les champs
	console.log("3.1 Récuperer que le nom et titres des auteurs");
	const auhorsWithNameAndtitleOnly = await getAuthorsOnlyNameAndTitles();
	console.log(auhorsWithNameAndtitleOnly);

	// 3.2 Limiter les documents
	console.log("3.2 Récuperer que les 3 premier auteurs");
	const only3Authors = await getAuthorsWithLimit(3);
	console.log(only3Authors);

	// 3.3 igoner les documents
	console.log("3.3 Récuperer les auteurs en ignorant les 3 premier");
	const allBut3Authors = await getAuthorsWithIgnore(3);
	console.log(allBut3Authors);

	// 3.4 Pagination
	console.log("3.4 Récuperer les auteurs de la page 1");
	const authorsPage1 = await getAuthorsWithPage(1);
	console.log(authorsPage1);

	console.log("3.4 Récuperer les auteurs de la page 2");
	const authorsPage2 = await getAuthorsWithPage(2);
	console.log(authorsPage2);

	console.log("3.4 Récuperer les auteurs de la page 3");
	const authorsPage3 = await getAuthorsWithPage(3);
	console.log(authorsPage3);
}


