import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export function createProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error(`Project ${projectName} already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(projectPath, { recursive: true });

  console.log(`Creating a new NexFusion project in ${projectPath}`);

  execSync('npm init -y', { cwd: projectPath, stdio: 'inherit' });
  execSync('npm install next react react-dom @nestjs/core @nestjs/common @nestjs/platform-express reflect-metadata rxjs tailwindcss postcss autoprefixer', { cwd: projectPath, stdio: 'inherit' });
  execSync('npm install typescript @types/node @types/react @types/react-dom ts-node-dev --save-dev', { cwd: projectPath, stdio: 'inherit' });
  execSync('npx tailwindcss init -p', { cwd: projectPath, stdio: 'inherit' });

}
