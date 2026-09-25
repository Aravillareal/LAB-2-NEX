import BlogPostContent from "@/app/components/utils/BlogPostContent";
import { blogPosts } from "../../data/blog/posts";

async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = blogPosts[slug] ?? {
        title: slug.replace(/-/g, " "),
        paragraphs:[
            "Este espacio reúne ideas, experiencias y aprendizajes sobre tecnología, innovación y desarrollo profesional. Cada publicación busca inspirar, informar y motivar a quienes desean crecer en el mundo digital.",
            "Explora nuestras secciones y descubre contenido que te ayudará a mantenerte actualizado, aprender nuevas habilidades y conectar con una comunidad apasionada por la tecnología.",
        ],
    };
    return <BlogPostContent post={post} />;
}
export default BlogPostPage;