import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all image directories to process
const imageDirectories = [
  {
    input: path.join(__dirname, 'public', 'images', 'Gallery_pics'),
    output: path.join(__dirname, 'public', 'images', 'Gallery_pics_webp')
  },
  {
    input: path.join(__dirname, 'public', 'images', 'Clients'),
    output: path.join(__dirname, 'public', 'images', 'Clients_webp')
  },
  {
    input: path.join(__dirname, 'public', 'images'),
    output: path.join(__dirname, 'public', 'images', 'webp')
  }
];

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

// Function to process a single directory
const processDirectory = async (inputDir, outputDir) => {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

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
    
    console.log(`Completed processing directory: ${inputDir}`);
  } catch (error) {
    console.error(`Error processing directory ${inputDir}:`, error);
  }
};

// Process all directories
const processAllDirectories = async () => {
  for (const dir of imageDirectories) {
    console.log(`\nProcessing directory: ${dir.input}`);
    await processDirectory(dir.input, dir.output);
  }
  console.log('\nAll images have been converted to WebP format!');
};

// Run the conversion
processAllDirectories(); 