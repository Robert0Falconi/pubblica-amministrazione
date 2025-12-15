import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '../node_modules/bootstrap-italia/dist');
const targetDir = join(__dirname, '../public/bootstrap-italia/dist');

function copyRecursiveSync(src, dest) {
  const exists = statSync(src, { throwIfNoEntry: false });
  if (!exists) {
    console.error(`❌ Source directory not found: ${src}`);
    return;
  }
  
  const isDirectory = exists.isDirectory();
  
  if (isDirectory) {
    mkdirSync(dest, { recursive: true });
    readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(join(src, childItemName), join(dest, childItemName));
    });
  } else {
    copyFileSync(src, dest);
  }
}

try {
  console.log('📦 Copiando assets Bootstrap Italia...');
  copyRecursiveSync(sourceDir, targetDir);
  console.log('✅ Assets Bootstrap Italia copiati in public/');
} catch (error) {
  console.error('❌ Errore durante la copia:', error);
  process.exit(1);
}