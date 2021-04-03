import commander from 'commander';

import pkg from '../package.json';

import { clean, run, runBuild } from './commands';

const program = new commander.Command(pkg.name).version(pkg.version);

program
  .command('dev', { isDefault: true })
  .option('--vite', 'The flag indicates whether to open the vite server.')
  .action(async (options: { vite: boolean }) => {
    await run({ withVite: options.vite });
  });

program.command('build').action(async () => {
  await runBuild();
});

program.command('clean').action(clean);

program.parseAsync(process.argv).then();
