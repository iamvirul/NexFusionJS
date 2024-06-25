#!/usr/bin/env node
import { Command } from 'commander';
import { createProject } from './commands/create';

const program = new Command();

program
  .version('1.0.1')
  .description('NexFusion CLI');

program
  .command('create <projectName>')
  .description('Create a new NexFusion project')
  .action(createProject);

program.parse(process.argv);
