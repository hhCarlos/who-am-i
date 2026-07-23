export type CapabilitySectionData = {
  id: string;
  heading: string;
  description: string;
  gallery: string[];
  reverse?: boolean;
};

export const capabilitySections: CapabilitySectionData[] = [
  {
    id: 'frontend',
    heading: 'Frontend e interfaces',
    description:
      'Diseño y desarrollo interfaces claras, responsivas y reutilizables, enfocadas en ofrecer una experiencia consistente y fácil de mantener.',
    gallery: [
      'https://sm.ign.com/t/ign_latam/screenshot/default/evangangel_5ujp.1280.jpg',
      'https://sm.ign.com/t/ign_latam/screenshot/default/evamun_ut7k.1280.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Iky4TYPSVq_nQEKL0QVIbiZmpRlyNdMWsFRaa-eWQ&s=10',
      'https://m.media-amazon.com/images/S/pv-target-images/5aebe5495ba8d8233a7f7065aae472a0ccf6e7fb4b772e9835845a6b97cb10ad.png',
    ],
  },
  {
    id: 'backend',
    heading: 'Backend y APIs',
    description:
      'Construyo servicios y APIs que procesan información, aplican reglas de negocio y conectan las diferentes partes de una aplicación.',
    gallery: [
      'https://sm.ign.com/t/ign_latam/screenshot/default/evangangel_5ujp.1280.jpg',
      'https://sm.ign.com/t/ign_latam/screenshot/default/evamun_ut7k.1280.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Iky4TYPSVq_nQEKL0QVIbiZmpRlyNdMWsFRaa-eWQ&s=10',
      'https://m.media-amazon.com/images/S/pv-target-images/5aebe5495ba8d8233a7f7065aae472a0ccf6e7fb4b772e9835845a6b97cb10ad.png',
    ],
    reverse: true,
  },
  {
    id: 'data',
    heading: 'Datos y persistencia',
    description:
      'Modelo e integro soluciones para almacenar, consultar y administrar información de forma organizada, segura y eficiente.',
    gallery: [
      'https://sm.ign.com/t/ign_latam/screenshot/default/evangangel_5ujp.1280.jpg',
      'https://sm.ign.com/t/ign_latam/screenshot/default/evamun_ut7k.1280.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Iky4TYPSVq_nQEKL0QVIbiZmpRlyNdMWsFRaa-eWQ&s=10',
      'https://m.media-amazon.com/images/S/pv-target-images/5aebe5495ba8d8233a7f7065aae472a0ccf6e7fb4b772e9835845a6b97cb10ad.png',
    ],
  },
  {
    id: 'quality',
    heading: 'Calidad y automatización',
    description:
      'Valido el comportamiento de las aplicaciones mediante pruebas funcionales, de integración y flujos automatizados que reducen errores repetitivos.',
    gallery: [
      'https://sm.ign.com/t/ign_latam/screenshot/default/evangangel_5ujp.1280.jpg',
      'https://sm.ign.com/t/ign_latam/screenshot/default/evamun_ut7k.1280.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Iky4TYPSVq_nQEKL0QVIbiZmpRlyNdMWsFRaa-eWQ&s=10',
      'https://m.media-amazon.com/images/S/pv-target-images/5aebe5495ba8d8233a7f7065aae472a0ccf6e7fb4b772e9835845a6b97cb10ad.png',
    ],
    reverse: true,
  },
  {
    id: 'cloud',
    heading: 'Arquitectura y cloud',
    description:
      'Conecto frontend, backend, datos, seguridad y despliegue para construir soluciones modulares preparadas para evolucionar y operar en la nube.',
    gallery: [
      'https://sm.ign.com/t/ign_latam/screenshot/default/evangangel_5ujp.1280.jpg',
      'https://sm.ign.com/t/ign_latam/screenshot/default/evamun_ut7k.1280.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Iky4TYPSVq_nQEKL0QVIbiZmpRlyNdMWsFRaa-eWQ&s=10',
      'https://m.media-amazon.com/images/S/pv-target-images/5aebe5495ba8d8233a7f7065aae472a0ccf6e7fb4b772e9835845a6b97cb10ad.png',
    ],
  },
];
