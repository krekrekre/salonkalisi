import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="scroll-mt-24 bg-transparent py-16 sm:py-24 lg:py-28"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
        <header className="mb-12 flex flex-col items-center gap-6 text-center sm:mb-16 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <p className="label-md text-eyebrow mb-4 sm:mb-5">{site.blog.eyebrow}</p>
            <h2
              id="blog-heading"
              className="font-serif text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem]"
            >
              {site.blog.title}
            </h2>
          </div>
          <Link
            href={site.blog.listPath}
            className="w-fit border-b border-primary pb-1 text-[1.05rem] font-medium text-primary transition-colors hover:text-primary-dim"
          >
            {site.blog.viewAll}
          </Link>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {site.blog.posts.map((post) => (
            <li key={post.title}>
              <article className="h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1rem] bg-surface-container-low">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-serif text-[2rem] font-semibold leading-[1.2] text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-lg leading-8 text-body-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={site.blog.listPath}
                  className="label-md mt-6 inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
                >
                  {site.blog.readMore}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
