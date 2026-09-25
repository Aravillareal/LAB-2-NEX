import { BlogPost } from "../../types/blog";

export const blogPosts: Record<string, BlogPost> = {
    "actualidad-tecnologica": {
        title: "Actualidad tecnológica",
        paragraphs: [
            "La tecnología evoluciona a gran velocidad y abre nuevas posibilidades para resolver necesidades reales. La inteligencia artificial, la nube y la automatización están transformando la manera de crear productos y servicios.",
            "Mantenerse al día permite tomar mejores decisiones, identificar oportunidades y participar con criterio en la construcción de un entorno digital más útil y responsable.",
        ],
    },
    "areas-de-formacion": {
        title: "Áreas de formación",
        paragraphs: [
            "La formación en tecnologías de la información reúne conocimientos de desarrollo de software, redes, datos, ciberseguridad e innovación. Cada área aporta herramientas para comprender y transformar el mundo digital.",
            "Explorar distintas especialidades ayuda a construir un perfil versátil, capaz de colaborar, aprender continuamente y diseñar soluciones con impacto.",
        ],
    },
    "historias-que-inspiran": {
        title: "Historias que inspiran",
        paragraphs: [
            "Los proyectos y experiencias de nuestra comunidad muestran que las ideas crecen cuando se comparten. Cada reto superado deja aprendizajes que pueden inspirar a otras personas a comenzar.",
            "Conocer estas historias nos recuerda que la curiosidad, la colaboración y la constancia son parte esencial de cualquier camino de innovación.",
        ],
    },
};
