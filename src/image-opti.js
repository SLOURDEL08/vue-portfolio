// Version ESM du script d'optimisation d'images
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Pour obtenir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des tailles d'images
const sizes = {
  lg: 1200,
  md: 800,
  sm: 400
};

// Chemin relatif depuis ce script
const projectRoot = path.resolve(__dirname, '..');
const rootDir = path.join(projectRoot, 'src/assets/work');

// Formats à traiter
const formats = ['webp', 'png'];

// Fonction pour traiter un fichier image
async function processImage(filePath) {
  try {
    const directory = path.dirname(filePath);
    const fileName = path.basename(filePath, path.extname(filePath));
    
    // Vérifier si le fichier est déjà une version optimisée (contient -lg, -md ou -sm)
    if (fileName.match(/-(lg|md|sm)$/)) {
      console.log(`Ignoré: ${filePath} (déjà optimisé)`);
      return;
    }
    
    const originalExt = path.extname(filePath).toLowerCase().slice(1);
    
    console.log(`Traitement de l'image: ${filePath}`);
    
    // Chargement de l'image avec Sharp
    const image = sharp(filePath);
    
    // Récupérer les métadonnées pour s'assurer de ne pas agrandir les petites images
    const metadata = await image.metadata();
    
    // Génération des différentes tailles pour chaque format
    for (const format of formats) {
      for (const [sizeName, width] of Object.entries(sizes)) {
        // Ne pas créer si la largeur demandée est plus grande que l'original
        if (width > metadata.width) {
          console.log(`  Ignoré: ${fileName}-${sizeName}.${format} (taille originale trop petite)`);
          continue;
        }
        
        const outputFileName = `${fileName}-${sizeName}.${format}`;
        const outputPath = path.join(directory, outputFileName);
        
        // Vérifier si le fichier existe déjà
        if (fs.existsSync(outputPath)) {
          console.log(`  Ignoré: ${outputFileName} (existe déjà)`);
          continue;
        }
        
        // Redimensionnement et conversion
        let processedImage = image.clone().resize({ width, withoutEnlargement: true });
        
        // Application du format approprié
        if (format === 'webp') {
          processedImage = processedImage.webp({ quality: 80 });
        } else if (format === 'png') {
          processedImage = processedImage.png({ compressionLevel: 9 });
        }
        
        // Sauvegarde de l'image traitée
        await processedImage.toFile(outputPath);
        console.log(`  Créé: ${outputFileName}`);
      }
    }
  } catch (error) {
    console.error(`Erreur lors du traitement de ${filePath}:`, error);
  }
}

// Fonction pour explorer récursivement les dossiers
async function processDirectory(directory) {
  try {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        // Explorer récursivement le sous-dossier
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        
        // Traiter uniquement les images PNG et WebP non optimisées
        if ((ext === '.png' || ext === '.webp') && !entry.name.match(/-(lg|md|sm)\.(png|webp)$/)) {
          await processImage(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Erreur lors de l'exploration du dossier ${directory}:`, error);
  }
}

// Fonction principale
async function optimizeImages() {
  try {
    console.log(`Début de l'optimisation des images dans ${rootDir}...`);
    
    // Vérifier que le dossier racine existe
    if (!fs.existsSync(rootDir)) {
      console.error(`Le dossier ${rootDir} n'existe pas!`);
      return;
    }
    
    // Lancer le traitement récursif
    await processDirectory(rootDir);
    
    console.log('Optimisation terminée avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'optimisation des images:', error);
  }
}

// Exécution de la fonction principale
optimizeImages();