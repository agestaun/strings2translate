import fs from "fs";

export interface KeyValue {
	[key: string]: string;
}

export function replaceValues(source: KeyValue, target: KeyValue): void {
	for (const key in source) {
		if (source.hasOwnProperty(key)) {
			if (target.hasOwnProperty(key)) {
				target[key] = source[key];
			} else {
				console.warn(`The key "${key}" does not exist in the destiny. Ignoring...`);
			}
		}
	}
}

export function replaceJsonValues(sourcePath: string, targetPath: string): void {
	const sourceData = fs.existsSync(sourcePath) ? JSON.parse(fs.readFileSync(sourcePath, 'utf8')) : {};
	const targetData = fs.existsSync(targetPath) ? JSON.parse(fs.readFileSync(targetPath, 'utf8')) : {};

	if (!sourceData || !targetData) {
		console.error('Source path or target path do not exist', sourcePath, targetData);
		return;
	}

	replaceValues(sourceData, targetData);

	fs.writeFileSync(targetPath, JSON.stringify(targetData, null, 2));
}

