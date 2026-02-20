import { Injectable, signal, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'es' | 'en';

export const ES_TRANSLATIONS = {
    nav: {
        home: 'Inicio',
        projects: 'Proyectos',
        about: 'Nosotros',
        contact: 'Contacto'
    },
    about: {
        title: 'Ingeniería con Propósito',
        subtitle: 'Transformamos ideas en estructuras robustas y funcionales.',
        history: {
            title: 'Nuestra Trayectoria',
            content: 'Nacimos con la visión de elevar los estándares de la industria metalmecánica en Chihuahua. Con años de experiencia en diseño industrial y fabricación especializada, ELISE se ha consolidado como un aliado estratégico para empresas que buscan soluciones de almacenamiento y mobiliario de alta gama.'
        },
        values: [
            { title: 'Innovación', desc: 'Diseño técnico de vanguardia en cada plano.' },
            { title: 'Calidad', desc: 'Materiales certificados y acabados de precisión.' },
            { title: 'Compromiso', desc: 'Entregas puntuales y soporte técnico continuo.' }
        ],
        badge: 'Precisión en Ingeniería',
        cta: {
            title: '¿Tienes un desafío técnico?',
            description: 'Estamos listos para diseñar y fabricar la solución que tu empresa necesita.',
            button: 'Iniciar Proyecto'
        }
    },
    design: {
        title: 'Planos y Diseño',
        subtitle: 'La precisión es nuestra firma en cada proyecto.',
        description: 'Utilizamos tecnología de modelado avanzado para garantizar que cada milímetro cuente. Nuestros planos integran especificaciones técnicas rigurosas para asegurar la máxima eficiencia estructural.',
        category: 'Ingeniería & Diseño',
        statusLabel: 'Estado',
        status: 'Diseño Técnico',
        features: [
            { title: 'Modelado 3D', desc: 'Visualización previa detallada.' },
            { title: 'Cálculo Estructural', desc: 'Resistencia garantizada.' }
        ],
        cta: 'Saber más sobre nosotros',
        img: 'assets/images/elise-project-plans-technical.webp'
    },
    hero: {
        title: 'INGENIERÍA Y DISEÑO INDUSTRIAL DE ALTO NIVEL',
        subtitle: 'Soluciones robustas en Chihuahua: Racks, Estaciones de Trabajo y Estructuras de Acero.',
        cta: 'Cotizar Proyecto'
    },
    projects: {
        title: 'Nuestros Proyectos',
        subtitle: 'Calidad certificada y materiales de resistencia industrial.',
        details: 'Detalle Técnico',
        material: 'Acero Calibre 14',
        viewAll: 'Ver todos los proyectos',
        items: [
            {
                id: 1,
                title: 'Rack para Almacenamiento (Modelo 1)',
                desc: 'Sistema de estantería industrial optimizado para cajas de alta densidad. Estructura modular reforzada.',
                img: 'assets/images/elise-rack-for-box-storage.webp'
            },
            {
                id: 2,
                title: 'Rack para Almacenamiento (Modelo 2)',
                desc: 'Variante técnica con configuración ajustable para diferentes dimensiones de empaque industrial.',
                img: 'assets/images/elise-rack-for-box-storage-alt.webp'
            },
            {
                id: 3,
                title: 'Rack para Almacenamiento (Modelo 3)',
                desc: 'Diseño especializado con enfoque en acceso rápido y organización logística de inventarios.',
                img: 'assets/images/elise-rack-for-box-storage-box.webp'
            },
            {
                id: 4,
                title: 'Estación de Trabajo Móvil',
                desc: 'Escritorio industrial con ruedas de alta resistencia y superficie de trabajo ergonómica.',
                img: 'assets/images/elise-mobile-workstation-desk.webp'
            },
            {
                id: 5,
                title: 'Mesa de Trabajo Reforzada',
                desc: 'Mesa de acero diseñada para soportar cargas pesadas y uso rudo en taller mecánico o industrial.',
                img: 'assets/images/elise-work-table.webp'
            },
            {
                id: 6,
                title: 'Cajonera de Herramientas',
                desc: 'Sistema de almacenamiento metálico para organización precisa de herramientas y componentes.',
                img: 'assets/images/elise-tool-drawer.webp'
            },
            {
                id: 7,
                title: 'Trabajos en Melamina',
                desc: 'Mobiliario técnico personalizado combinando durabilidad mecánica con acabados de alta calidad.',
                img: 'assets/images/elise-melamine-works.webp'
            },
            {
                id: 8,
                title: 'Instalación de Cerca de Acero',
                desc: 'Protección perimetral industrial con acabados resistentes a la corrosión y alta seguridad.',
                img: 'assets/images/elise-steel-fence-installation.webp'
            }
        ]
    },
    contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos listos para iniciar tu proyecto.',
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        phone: 'Teléfono',
        whatsapp: 'Enviar WhatsApp',
        success: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
        error: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.',
        sending: 'Enviando...'
    },
    footer: {
        rights: 'Todos los derechos reservados.'
    }
};

export const EN_TRANSLATIONS = {
    nav: {
        home: 'Home',
        projects: 'Projects',
        about: 'About Us',
        contact: 'Contact'
    },
    about: {
        title: 'Engineering with Purpose',
        subtitle: 'We transform ideas into robust and functional structures.',
        history: {
            title: 'Our Trajectory',
            content: 'We were born with the vision of raising the standards of the metalworking industry in Chihuahua. With years of experience in industrial design and specialized manufacturing, ELISE has established itself as a strategic partner for companies seeking high-end storage and furniture solutions.'
        },
        values: [
            { title: 'Innovation', desc: 'Cutting-edge technical design in every plan.' },
            { title: 'Quality', desc: 'Certified materials and precision finishes.' },
            { title: 'Commitment', desc: 'Punctual deliveries and continuous technical support.' }
        ],
        badge: 'Engineering Precision',
        cta: {
            title: 'Do you have a technical challenge?',
            description: 'We are ready to design and manufacture the solution your company needs.',
            button: 'Start Project'
        }
    },
    design: {
        title: 'Project Plans & Design',
        subtitle: 'Precision is our signature in every project.',
        description: 'We use advanced modeling technology to ensure every millimeter counts. Our plans integrate rigorous technical specifications to ensure maximum structural efficiency.',
        category: 'Engineering & Design',
        statusLabel: 'Status',
        status: 'Technical Design',
        features: [
            { title: '3D Modeling', desc: 'Detailed preview visualization.' },
            { title: 'Structural Calculation', desc: 'Guaranteed resistance.' }
        ],
        cta: 'Learn more about us',
        img: 'assets/images/elise-project-plans-technical.webp'
    },
    hero: {
        title: 'HIGH-LEVEL INDUSTRIAL ENGINEERING & DESIGN',
        subtitle: 'Robust solutions in Chihuahua: Racks, Workstations, and Steel Structures.',
        cta: 'Get a Quote'
    },
    projects: {
        title: 'Our Projects',
        subtitle: 'Certified quality and industrial-grade resistance materials.',
        details: 'Technical Detail',
        material: '14 Gauge Steel',
        viewAll: 'View all projects',
        items: [
            {
                id: 1,
                title: 'Storage Rack (Model 1)',
                desc: 'Industrial shelving system optimized for high-density box storage. Reinforced modular structure.',
                img: 'assets/images/elise-rack-for-box-storage.webp'
            },
            {
                id: 2,
                title: 'Storage Rack (Model 2)',
                desc: 'Technical variant with adjustable configuration for different industrial packaging dimensions.',
                img: 'assets/images/elise-rack-for-box-storage-alt.webp'
            },
            {
                id: 3,
                title: 'Storage Rack (Model 3)',
                desc: 'Specialized design focused on quick access and logistics inventory organization.',
                img: 'assets/images/elise-rack-for-box-storage-box.webp'
            },
            {
                id: 4,
                title: 'Mobile Workstation',
                desc: 'Industrial desk with high-duty casters and ergonomic workspace surface.',
                img: 'assets/images/elise-mobile-workstation-desk.webp'
            },
            {
                id: 5,
                title: 'Reinforced Work Table',
                desc: 'Steel table designed to withstand heavy loads and rough use in mechanical or industrial shops.',
                img: 'assets/images/elise-work-table.webp'
            },
            {
                id: 6,
                title: 'Tool Storage Drawer',
                desc: 'Metallic storage system for precise tools and component organization.',
                img: 'assets/images/elise-tool-drawer.webp'
            },
            {
                id: 7,
                title: 'Melamine Custom Furniture',
                desc: 'Custom technical furniture combining mechanical durability with high-quality finishes.',
                img: 'assets/images/elise-melamine-works.webp'
            },
            {
                id: 8,
                title: 'Steel Fence Installation',
                desc: 'Industrial perimeter protection with corrosion-resistant finishes and high security.',
                img: 'assets/images/elise-steel-fence-installation.webp'
            }
        ]
    },
    contact: {
        title: 'Contact Us',
        subtitle: 'We are ready to start your project.',
        name: 'Full Name',
        email: 'Email Address',
        message: 'Message',
        send: 'Send Message',
        phone: 'Phone',
        whatsapp: 'Send WhatsApp',
        success: 'Thank you! Your message has been sent successfully.',
        error: 'There was an error sending your message. Please try again or contact us via WhatsApp.',
        sending: 'Sending...'
    },
    footer: {
        rights: 'All rights reserved.'
    }
};

@Injectable({
    providedIn: 'root'
})
export class I18nService {
    private platformId = inject(PLATFORM_ID);
    readonly language = signal<Language>('es');

    readonly t = computed(() => {
        return this.language() === 'es' ? ES_TRANSLATIONS : EN_TRANSLATIONS;
    });

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            const saved = localStorage.getItem('lang') as Language;
            if (saved) this.language.set(saved);

            effect(() => {
                localStorage.setItem('lang', this.language());
                document.documentElement.lang = this.language();
            });
        }
    }

    toggleLanguage() {
        this.language.update(lang => lang === 'es' ? 'en' : 'es');
    }
}
