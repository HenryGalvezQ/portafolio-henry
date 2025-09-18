// src/utils/image-loader.js

// 1. Usamos la función mágica de Vite para importar todos los archivos
//    de imagen que estén dentro de cualquier subcarpeta de /portafolio/.
const imageModules = import.meta.glob('/src/assets/img/portafolio/**/*.+(png|jpg|jpeg|gif|svg|webp)', { eager: true });

const projectsImages = {};

// 2. Procesamos el objeto que nos devuelve Vite.
for (const path in imageModules) {
  // Extraemos el nombre de la carpeta del proyecto desde la ruta del archivo.
  // Ejemplo: de '/src/assets/img/portafolio/Sigepro/img1.jpg' extraemos 'Sigepro'.
  const match = path.match(/portafolio\/(.*?)\//);
  const folderName = match ? match[1] : null;

  if (folderName) {
    // Si es la primera vez que vemos esta carpeta, creamos un array para ella.
    if (!projectsImages[folderName]) {
      projectsImages[folderName] = [];
    }
    // Añadimos la URL de la imagen al array correspondiente.
    // Usamos new URL(path, import.meta.url).href para obtener la ruta correcta
    // que Vue utilizará en el build final.
    projectsImages[folderName].push(imageModules[path].default);

  }
}

/**
 * Exportamos un objeto donde cada clave es el nombre de un proyecto (carpeta)
 * y su valor es un array con las URLs de todas sus imágenes.
 * Ejemplo:
 * {
 * 'Sigepro': ['/assets/imagen1.hash.jpg', '/assets/screen2.hash.png'],
 * 'Diseño de Marca': ['/assets/branding.hash.jpg', ...]
 * }
 */
export default projectsImages;