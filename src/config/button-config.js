// src/config/button-config.js

/**
 * Diccionario central para las plantillas de botones.
 * Cada clave (ej: 'demo', 'figma') representa un tipo de botón.
 * El objeto contiene todas las propiedades que se repiten para ese tipo.
 */

export const buttonTemplates = {
  'demo': {
    text: 'Demo', // Texto añadido
    icon: 'uil uil-play',
    animated: true,
    arrow: true,
    isSvg: false
  },
  'figma': {
    text: 'Diseño', // Texto añadido
    icon: 'figma',
    isSvg: true,
    animated: true,
    arrow: true
  },
  'github': {
    text: 'Código', // Texto añadido
    icon: 'github',
    isSvg: true,
    animated: true,
    arrow: true
  },
  'presentation': {
    text: 'Slides', // Texto añadido
    icon: 'uil uil-presentation-play',
    animated: true,
    arrow: true,
    isSvg: false
  },
  'demo-simple': {
    text: 'Demo', // Texto añadido
    icon: 'uil uil-arrow-right',
    animated: false,
    arrow: false,
    isSvg: false
  }
};