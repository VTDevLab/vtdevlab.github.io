export const site = {
  name: 'Costa Serena',
  tagline: 'Apartamentos con encanto junto al mar',
  heroSubtitle: 'Descubre el Mediterráneo desde la comodidad de tu propio apartamento',
  heroCta: 'Consultar disponibilidad',
  phone: '+34 600 123 456',
  email: 'info@costaserena.com',
  address: 'Paseo Marítimo 42, 29780 Nerja, Málaga',
  cleaningFee: 45,
};

export const navLinks = [
  { label: 'Apartamentos', href: '#apartamentos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

export const apartments = [
  {
    id: 1,
    name: 'Suite Mediterránea',
    description: 'Amplio apartamento con terraza privada y vistas panorámicas al mar. Perfecto para familias que buscan espacio y tranquilidad.',
    capacity: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    size: 75,
    price: 120,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&auto=format',
    amenities: ['wifi', 'ac', 'kitchen', 'terrace', 'washingMachine', 'tv'],
  },
  {
    id: 2,
    name: 'Ático Brisa Marina',
    description: 'Ático luminoso con solárium privado y jacuzzi. La opción ideal para parejas que buscan una experiencia especial.',
    capacity: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    size: 55,
    price: 95,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format',
    amenities: ['wifi', 'ac', 'kitchen', 'terrace', 'tv', 'jacuzzi'],
  },
  {
    id: 3,
    name: 'Villa Jardín',
    description: 'Planta baja con jardín privado y acceso directo a la piscina comunitaria. Ideal para disfrutar del aire libre.',
    capacity: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    size: 95,
    price: 155,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format',
    amenities: ['wifi', 'ac', 'kitchen', 'pool', 'parking', 'washingMachine', 'tv', 'garden'],
  },
];

export const amenityLabels = {
  wifi: 'Wi-Fi gratuito',
  ac: 'Aire acondicionado',
  kitchen: 'Cocina equipada',
  terrace: 'Terraza privada',
  washingMachine: 'Lavadora',
  tv: 'TV de pantalla plana',
  jacuzzi: 'Jacuzzi',
  pool: 'Piscina',
  parking: 'Parking privado',
  garden: 'Jardín privado',
};

export const amenityIcons = {
  wifi: 'wifi',
  ac: 'snowflake',
  kitchen: 'cooking-pot',
  terrace: 'sun',
  washingMachine: 'shirt',
  tv: 'tv',
  jacuzzi: 'bath',
  pool: 'waves',
  parking: 'car',
  garden: 'flower-2',
};

export const services = [
  { icon: 'wifi', title: 'Wi-Fi de alta velocidad', description: 'Conexión gratuita en todos los apartamentos y zonas comunes.' },
  { icon: 'snowflake', title: 'Climatización completa', description: 'Aire acondicionado y calefacción en todas las estancias.' },
  { icon: 'car', title: 'Parking privado', description: 'Plaza de aparcamiento gratuita para cada apartamento.' },
  { icon: 'cooking-pot', title: 'Cocina equipada', description: 'Cocina completa con electrodomésticos y menaje.' },
  { icon: 'waves', title: 'Piscina comunitaria', description: 'Piscina al aire libre con tumbonas y zona de relax.' },
  { icon: 'shirt', title: 'Lavandería', description: 'Lavadora en cada apartamento y servicio de lavandería disponible.' },
];

export const aboutText = {
  title: 'Tu hogar junto al mar',
  paragraphs: [
    'Costa Serena nació con una idea sencilla: ofrecer apartamentos donde los viajeros se sientan como en casa, pero con el mar como vecino.',
    'Cada uno de nuestros apartamentos ha sido cuidadosamente decorado para combinar comodidad y estilo. Estamos situados a pocos minutos a pie de las mejores playas y del centro histórico, con restaurantes, tiendas y actividades al alcance de la mano.',
    'Tanto si buscas una escapada romántica como unas vacaciones en familia, nuestros apartamentos se adaptan a ti.',
  ],
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&h=500&fit=crop&auto=format',
};

export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format', alt: 'Piscina del complejo' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop&auto=format', alt: 'Dormitorio luminoso' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format', alt: 'Cocina moderna' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format', alt: 'Playa cercana' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format', alt: 'Baño reformado' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?w=600&h=400&fit=crop&auto=format', alt: 'Exterior del edificio' },
  { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop&auto=format', alt: 'Salón con vistas' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&auto=format', alt: 'Vista aérea del resort' },
];

export const faqs = [
  {
    question: '¿Cuál es el horario de entrada y salida?',
    answer: 'La entrada (check-in) es a partir de las 15:00 y la salida (check-out) es antes de las 11:00. Si necesitas flexibilidad, consúltanos y haremos lo posible por adaptarnos.',
  },
  {
    question: '¿Se admiten mascotas?',
    answer: 'Sí, admitimos mascotas de tamaño pequeño y mediano en algunos de nuestros apartamentos. Por favor, indícalo al hacer tu reserva para asignarte un alojamiento adecuado.',
  },
  {
    question: '¿Cuál es la política de cancelación?',
    answer: 'Cancelación gratuita hasta 7 días antes de la llegada. Entre 7 y 2 días antes se cobra el 50% de la estancia. Cancelaciones con menos de 48 horas no son reembolsables.',
  },
  {
    question: '¿Hay aparcamiento disponible?',
    answer: 'Sí, todos nuestros apartamentos incluyen una plaza de parking privada sin coste adicional. Además, hay plazas de cortesía para segundos vehículos según disponibilidad.',
  },
  {
    question: '¿Se proporcionan sábanas y toallas?',
    answer: 'Por supuesto. Todos los apartamentos disponen de ropa de cama, toallas de baño y toallas de piscina. Se renuevan a mitad de estancia para reservas de una semana o más.',
  },
];

export const locationData = {
  title: 'Cómo llegar',
  description: 'Nos encontramos en el corazón del Paseo Marítimo, a tan solo 5 minutos a pie de la playa y a 10 minutos del centro histórico. El aeropuerto de Málaga está a 50 minutos en coche.',
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-3.8850%2C36.7440%2C-3.8650%2C36.7560&layer=mapnik&marker=36.7500%2C-3.8750',
  highlights: [
    { icon: 'footprints', text: '5 min a la playa' },
    { icon: 'store', text: '10 min al centro' },
    { icon: 'plane', text: '50 min del aeropuerto' },
  ],
};

export const heroImage = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop&auto=format';

export const themes = [
  { id: 'mediterranean', label: 'Mediterráneo' },
  { id: 'premium', label: 'Premium' },
  { id: 'natural', label: 'Natural' },
  { id: 'modern', label: 'Moderno' },
];

export const fontUrls = {
  mediterranean: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap',
  premium: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Montserrat:wght@300;400;500;600&display=swap',
  natural: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;600;700&display=swap',
  modern: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap',
};
