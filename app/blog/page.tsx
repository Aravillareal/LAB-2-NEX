import { blogSections } from "../data/blog-sections";
import ListItem from "../components/blog/ListItem";

function BlogPage() {

    return (
        <main className="min-h-[calc(100vh-81px)] bg-zinc-50 px-6 py-12 text-zinc-900 sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 border-b border-emerald-900/15 pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:pb-16">
                    <div>
                        <p className="mb-5 text-sm font-bold tracking-[0.16em] text-emerald-700">BLOG ACADEMICO</p>
                        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                            Ingeniería en Tecnologías de la Información e Innovación Digital
                        </h1>
                    </div>
                    <p className="max-w-md border-l-2 border-cyan-500 pl-5 text-base leading-7 text-zinc-600">
                        Conocimiento, creatividad y tecnología para diseñar soluciones que mejoran la forma en que vivimos, aprendemos y trabajamos.
                    </p>
                </div>

                <section className="pt-10 lg:pt-14" aria-labelledby="explora-el-blog">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 id="explora-el-blog" className="text-xl font-semibold text-emerald-950 sm:text-2xl">Explora el blog</h2>
                        <span className="hidden text-sm font-medium text-zinc-500 sm:block">Aprende. Crea. Innova.</span>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3">
                        {blogSections.map((section) => (
                            <ListItem key={section.href} section={section} />
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default BlogPage;