export type CapabilitySectionData = {
  id: string;
  heading: string;
  description: string;
  gallery: string[];
};

export const capabilitySections: CapabilitySectionData[] = [
  {
    id: 'frontend',
    heading: 'Frontend',
    description:
      'Construyo interfaces claras, responsivas y reutilizables.',
    gallery: ['url1', 'url2', 'url3', 'url4'],
  },
  {
    id: 'backend',
    heading: 'Backend y APIs',
    description:
      'Desarrollo servicios, APIs y lógica de negocio para aplicaciones.',
    gallery: ['url1', 'url2', 'url3', 'url4'],
  },
  {
    id: 'data',
    heading: 'Datos y persistencia',
    description:
      'Diseño soluciones para almacenar, consultar y administrar información.',
    gallery: ['url1', 'url2', 'url3', 'url4'],
  },
  {
    id: 'quality',
    heading: 'Calidad y automatización',
    description:
      'Diseño pruebas y automatizo los flujos críticos de una aplicación.',
    gallery: ['url1', 'url2', 'url3', 'url4'],
  },
  {
    id: 'cloud',
    heading: 'Arquitectura y cloud',
    description:
      'Integro aplicaciones, infraestructura y procesos de despliegue.',
    gallery: ['url1', 'url2', 'url3', 'url4'],
  },
];
