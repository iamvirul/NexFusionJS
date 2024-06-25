#!/usr/bin/env node
import { Command } from 'commander';
import { createProject } from './commands/create';

const program = new Command();

program
  .version('1.0.0')
  .description('FusionJS CLI');

program
  .command('create <projectName>')
  .description('Create a new FusionJS project')
  .action(createProject);

program.parse(process.argv);
