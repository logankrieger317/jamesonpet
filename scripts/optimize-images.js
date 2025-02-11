import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(__dirname, '..', 'src', 'Images');
const outputDir = join(__dirname, '..', 'src', 'Images', 'optimized');
const backupDir = join(__dirname, '..', 'src', 'Images', 'originals');

const optimizeImage = async (inputPath, filename) => {
  const outputPath = join(outputDir, filename.replace(/\.[^.]+$/, '.webp'));
  
  try {
    // Get image metadata first
    const metadata = await sharp(inputPath).metadata();
    
    // Calculate new dimensions maintaining aspect ratio
    const targetHeight = 1800; // Fixed height for consistency
    const aspectRatio = metadata.width / metadata.height;
    const width = Math.round(targetHeight * aspectRatio);
    const height = targetHeight;

    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF data
      .webp({ 
        quality: 95,
        effort: 6
      })
      .resize({
        width,
        height,
        fit: 'contain',
        withoutEnlargement: false
      })
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${filename} (${width}x${height})`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error);
  }
};

const setupDirectories = async () => {
  try {
    await mkdir(outputDir, { recursive: true });
    await mkdir(backupDir, { recursive: true });
    console.log('✅ Directories created');
  } catch (error) {
    console.error('Error creating directories:', error);
  }
};

const moveOriginals = async (files) => {
  for (const file of files) {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const sourcePath = join(sourceDir, file);
      const destPath = join(backupDir, file);
      try {
        await sharp(sourcePath).toFile(destPath);
        console.log(`✅ Backed up: ${file}`);
      } catch (error) {
        console.error(`❌ Error backing up ${file}:`, error);
      }
    }
  }
};

const optimizeAllImages = async () => {
  try {
    await setupDirectories();
    
    const files = await readdir(sourceDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);
    
    // First optimize all images
    for (const file of imageFiles) {
      const inputPath = join(sourceDir, file);
      await optimizeImage(inputPath, file);
    }
    
    // Then move originals to backup
    await moveOriginals(imageFiles);
    
    console.log('✨ Image optimization complete!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
};

optimizeAllImages();
