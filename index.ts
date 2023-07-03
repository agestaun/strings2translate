import {replaceJsonValues} from "./utils/JsonUtils";

const supportedLanguages = ['ar', 'da', 'de', 'es', 'fr', 'ja', 'nb', 'sv'];

// Source path where the translation files are located. Json files must be located without nested directories.
const sourceDir = './Downloads/translations';

// Target path where the json target files are located.
const targetPath = './MyProject/src/translations';

supportedLanguages.forEach((language) => {
	const sourceFile = `${sourceDir}/${language}.json`;
	const targetFile = `${targetPath}/${language}/${language}.json`;
	replaceJsonValues(sourceFile, targetFile);
})

