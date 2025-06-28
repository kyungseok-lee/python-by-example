#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('Starting Next.js development server...');

const nextDev = spawn('npx', ['next', 'dev', '-p', '5000'], {
  stdio: 'inherit',
  shell: true
});

nextDev.on('close', (code) => {
  console.log(`Next.js dev server exited with code ${code}`);
});