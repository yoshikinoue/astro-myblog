import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const distDir = './dist';
const adminDir = path.join(distDir, 'admin');
const tempAdminDir = './dist-admin-backup';

console.log('Starting post-build optimization...');

// 1. Move admin folder out of dist to prevent jampack from processing it
let adminMoved = false;
if (fs.existsSync(adminDir)) {
    console.log('Moving admin directory to safe location to skip optimization...');
    fs.renameSync(adminDir, tempAdminDir);
    adminMoved = true;
} else {
    console.log('No admin directory found in dist.');
}

try {
    // 2. Run jampack
    // Using npx to ensure we use the local dependency
    console.log('Running jampack on ./dist...');
    execSync('npx jampack ./dist', { stdio: 'inherit' });
} catch (error) {
    console.error('Jampack execution failed.');
    // We don't throw here to ensure we restore the admin directory
    process.exitCode = 1;
} finally {
    // 3. Restore admin folder
    if (adminMoved && fs.existsSync(tempAdminDir)) {
        console.log('Restoring admin directory...');
        // If dist/admin was somehow recreated, remove it first
        if (fs.existsSync(adminDir)) {
            fs.rmSync(adminDir, { recursive: true, force: true });
        }
        fs.renameSync(tempAdminDir, adminDir);
    }
}

// 4. Copy _redirects
try {
    if (fs.existsSync('./_redirects')) {
        console.log('Copying _redirects to dist...');
        fs.copyFileSync('./_redirects', path.join(distDir, '_redirects'));
    } else {
        console.log('_redirects file not found, skipping copy.');
    }
} catch (e) {
    console.error('Failed to copy _redirects:', e);
    process.exitCode = 1;
}

console.log('Post-build finished.');
