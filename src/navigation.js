import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/#QuienesSomos'),
    },
    {
      text: 'Clientes',
      href: getPermalink('/clients'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/services'),
    },
    {
      text: 'Proyectos',
      href: getPermalink('/projects'),
    },
    /* {
      text: 'Contacto',
      href: getPermalink('/contact'),
    }, */
    {
      text: 'Soporte',
      href: 'https://gty.gtickets.cl/login',
    },
  ],
};

export const footerData = {
  links: [
    {
      links: [
        {
          text:'',
        },
      ],
    },
  ],
};
