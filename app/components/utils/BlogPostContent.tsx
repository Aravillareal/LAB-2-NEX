import { BlogPost } from "@/app/types/blog";

type BlogPostContentProps = {
    post: BlogPost;
};

function BlogPostContent({ post }: BlogPostContentProps) {
    return (
        <article className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {post.title}
            </h1>
            {post.paragraphs.map((paragraph, index) => (
                <p
                    key={`${post.title}-${index}`}
                    className={index === 0 ? "mb-4 text-lg leading-8 text-gray-600" : "text-lg leading-8 text-gray-600"}
                >
                    {paragraph}
                </p>
            ))}
        </article>
    );
}

export default BlogPostContent;
