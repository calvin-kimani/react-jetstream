#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (e) {
        console.error(e);
        return false;
    }

    return true;
}

const repoName = process.argv[2];

const gitCheckoutCommand = `git clone --depth 1 https://github.com/calvin-kimani/create-jetstream-app.git ${repoName}`;
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

rimraf.sync(path.join(repoName, 'screenshots'));
rimraf.sync(path.join(repoName, '.git'));


const packageJsonPath = `${repoName}/package.json`;
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
delete packageJson.bin;
packageJson.description = "";
packageJson.type = "module";
packageJson.author = "";
packageJson.name = `${repoName}`;
packageJson.private = true;
packageJson.version = '0.0.0';

console.log("\nCongratulations! Your React JetStream App is ready.")
console.log("run the following commands to start.")
console.log(` cd ${repoName}`);
console.log(` npm install`);
console.log(` npm run dev\n`);

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

rimraf.sync(path.join(repoName, 'bin'));
