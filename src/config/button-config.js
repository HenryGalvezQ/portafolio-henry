// src/config/button-config.js

export const getButtonTemplates = (t) => ({
  'demo': {
    text: t('buttons.demo'),
    icon: 'uil uil-play',
    animated: true,
    arrow: true,
    isSvg: false
  },
  'figma': {
    text: t('buttons.figma'),
    icon: 'figma',
    isSvg: true,
    animated: true,
    arrow: true
  },
  'github': {
    text: t('buttons.github'),
    icon: 'github',
    isSvg: true,
    animated: true,
    arrow: true
  },
  'presentation': {
    text: t('buttons.presentation'),
    icon: 'uil uil-presentation-play',
    animated: true,
    arrow: true,
    isSvg: false
  },
  'demo-simple': {
    text: t('buttons.demo'),
    icon: 'uil uil-arrow-right',
    animated: false,
    arrow: false,
    isSvg: false
  }
});