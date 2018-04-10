import * as fs from 'fs';
import * as path from 'path';

export function getFileAsBase64(filePath: string): string {
    let absolutePath = path.join(__dirname, filePath);
    return fs.readFileSync(absolutePath).toString('base64');
}