import {replaceJsonValues} from "./utils/JsonUtils";

// ISO 639-1 standardized nomenclature, check them here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
const supportedLanguages = ['ar', 'da', 'de', 'es', 'fr', 'ja', 'nb', 'sv'];

// Source path where the translation files are located. Json files must be located without nested directories.
// TODO Replace by absolute path pointing to the origin translations directory and rename the files using the ISO 639-1.
const sourceDir = './Downloads/translations';

// Target path where the json target files are located.
// TODO Replace by absolute path pointing to the translations directory in the project.
const targetPath = './MyProject/src/translations';

supportedLanguages.forEach((language) => {
	console.log('\n-----------------------------------------------------------------------------------------');
	console.log(`📝 Replacing strings on ${language}.json.`);

	const sourceFile = `${sourceDir}/${language}.json`;
	const targetFile = `${targetPath}/${language}/${language}.json`;
	replaceJsonValues(sourceFile, targetFile);

	console.log('-----------------------------------------------------------------------------------------');
})

