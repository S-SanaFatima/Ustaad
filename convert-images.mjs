import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'public/images/blogs';

const filesToProcess = [
  { file: 'hero-tutoring-session.jpg', type: 'hero' },
  { file: 'exam-hall-stress.jpg', type: 'inline' },
  { file: 'parent-teen-conversation.jpg', type: 'inline' },
  { file: 'cognitive-overload-diagram.jpg', type: 'diagram' },
  { file: 'callout-dependence-vs-confidence.jpg', type: 'diagram' },
  { file: 'callout-coaching-vs-spoonfeeding.jpg', type: 'diagram' },
  { file: 'igcse-vs-gcse-father-son-subject-list.png', type: 'hero' }
];

async function run() {
  for (const { file, type } of filesToProcess) {
    const inputPath = path.join(dir, file);
    if (!fs.existsSync(inputPath)) continue;

    const base = path.basename(file, path.extname(file));
    const outputPath = path.join(dir, base + '.webp');

    console.log('Processing', file);
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      let transform = image;
      if (type === 'hero' || type === 'inline') {
        const targetWidth = Math.min(metadata.width, 1600);
        const targetHeight = Math.round(targetWidth * (9/16));
        transform = transform.resize(targetWidth, targetHeight, {
          fit: 'cover',
          position: 'top'
        });
      } else {
        transform = transform.resize(Math.min(metadata.width, 1600), null, {
          withoutEnlargement: true
        });
      }

      await transform.webp({ quality: 80, effort: 4 }).toFile(outputPath);
      console.log('Saved', outputPath);
    } catch (e) {
      console.error(e);
    }
  }
}

run();
