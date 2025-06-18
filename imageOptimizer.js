import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory paths
const inputDir = path.join(__dirname, 'public', 'images', 'Gallery_pics');
const outputDir = path.join(__dirname, 'public', 'images', 'Gallery_pics_webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to convert image to WebP
const convertToWebP = async (inputPath, outputPath) => {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`Converted: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`Error converting ${inputPath}:`, error);
    }
};

// Process all images in the directory
const processImages = async () => {
    try {
        const files = fs.readdirSync(inputDir);
        
        for (const file of files) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
            
            // Only process image files
            if (['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
                await convertToWebP(inputPath, outputPath);
            }
        }
        
        console.log('All images have been converted to WebP format!');
    } catch (error) {
        console.error('Error processing images:', error);
    }
};

// Run the conversion
processImages(); 