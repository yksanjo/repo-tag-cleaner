#!/usr/bin/env node
const chalk = require('chalk');
const { execSync } = require('child_process');

async function main() {
  console.log(chalk.cyan('\n🏷️ Tag Cleaner v1.0.0\n'));
  console.log(chalk.yellow('Use: gh repo delete-ref owner/repo refs/tags/v1.0.0'));
}
if (require.main === module) main();
module.exports = { main };
