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
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
    {
      text: 'Soporte',
      href: 'https://gtickets-v2.gty.cl/login',
    },
  ],
};

export const footerData = {
  links: [
    {
      links: [
        
        
        {
          text: `
            <div>
            <span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white">
            <svg width="190" height="101" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden"><defs>
            <clipPath id="clip1"><rect x="0" y="0" width="403.949" height="197"/></clipPath></defs><g transform="translate(-90 -590)"><g><g transform="matrix(0.480952 0 0 0.480952 93.8476 592.405)"><g clip-path="url(#clip1)" transform="matrix(1.0026 0 0 1 8.06194e-07 4.16122e-05)"><use width="100%" height="100%" xlink:href="#img0" transform="scale(1.9899 1.9899)"></use></g></g></g></g></svg>
            </span>
            <div class="flex items-center pl-5">
            <a class="mr-2">Siguenos en:</a>
            <a href="https://www.linkedin.com/company/gty" class="inline-block">
              <img
                height="30px"
                width="30px"
                src="/backgroundImages/brand-linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
            <a>GTY SpA, Copyright © 2023</a>
             
            </div>`
            
            ,
        }
      ],
    },
  ],
};
