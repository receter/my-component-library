import { readdir, readFile, writeFile } from 'node:fs/promises';

const corePackageJsonPath = new URL('../package.json', import.meta.url);
const corePackageJson = JSON.parse(await readFile(corePackageJsonPath, 'utf-8'));

const coreComponentsDirectoryPath = new URL('../lib/components/', import.meta.url);
const coreComponentsDirectory = await readdir(coreComponentsDirectoryPath);

const paths = {
	'.': {
		types: './dist/main.d.ts',
		default: './dist/main.js'
	}
};

for (const item of coreComponentsDirectory) {
	const filesInDirectory = await readdir(new URL(`${item}/`, coreComponentsDirectoryPath));
	if (filesInDirectory.length) {
		paths[`./${item}`] = {
			types: `./dist/components/${item}/${filesInDirectory[0].replace(/\.tsx$/, '.d.ts')}`,
			default: `./dist/components/${item}/${filesInDirectory[0].replace(/\.tsx$/, '.js')}`
		};
	}
}

corePackageJson.exports = paths;
corePackageJson.sideEffects = ["**/*.css", ...Object.values(paths).map(e => e.default)];

await writeFile(corePackageJsonPath, JSON.stringify(corePackageJson, null, '  '));
