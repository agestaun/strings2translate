import * as fs from 'fs';
import { IReplacement } from '../IReplacement';

export interface KeyValue {
	[key: string]: string;
}

export function replaceValues(source: KeyValue, target: KeyValue): IReplacement {
	let replaced = 0;
	let notFound = 0;

	for (const key in source) {
			if (Object.prototype.hasOwnProperty.call(target, key)) {
				target[key] = source[key];
				replaced++;
			} else {
				console.warn(`	The key "${key}" does not exist in the target "". Ignoring...`);
				notFound++;
			}
	}

	return { totalReplaced: replaced, totalNotFound: notFound };
}

export function replaceJsonValues(sourcePath: string, targetPath: string): void {
	const sourceData = fs.existsSync(sourcePath) ? JSON.parse(fs.readFileSync(sourcePath, 'utf8')) : {};
	const targetData = fs.existsSync(targetPath) ? JSON.parse(fs.readFileSync(targetPath, 'utf8')) : {};

	if (!sourceData || !targetData) {
		console.error('Source path or target path do not exist', sourcePath, targetData);
		return;
	}

	const { totalReplaced, totalNotFound } = replaceValues(sourceData, targetData);

	console.log(`👁️ Total replaced ${totalReplaced}. Total not found in target ${totalNotFound}.`);

	fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2));
}

