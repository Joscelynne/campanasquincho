export const SITE = {
  name: 'Mis Campanas Quincho',
  title: 'Campanas para Quincho a Medida | QuinchoWeb',
  description: 'Fabricación e instalación de campanas para quinchos a medida, con diseños personalizados y atención directa por WhatsApp.',
  url: 'https://www.tudominio.com', // Reemplaza con tu dominio real cuando lo tengas
  email: 'rorodeltasant@gmail.com',
  phone: '+56 9 3225 3354',
  whatsappNumber: '56932253354',
  whatsappDefaultMessage: 'Hola, quiero cotizar una campana para quincho',
  address: 'Andy Warhol 112, San Bernardo, Chile',
};

export const getWhatsAppUrl = (message = SITE.whatsappDefaultMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
