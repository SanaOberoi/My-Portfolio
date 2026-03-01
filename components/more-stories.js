import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-4 text-3xl md:text-4xl leading-tight font-bold">
        <a
          href={`/projects`}
          className="hover:text-success duration-200 transition-colors p-4 block"
        >
          An Array of Projects
        </a>
      </h2>
      <p className="text-lg text-slate-500 mb-8 px-4">
        These projects highlight select initiatives I've led or collectively brought to life. While they represent some of my favorite work, they're just a snapshot of my broader portfolio. These examples demonstrate my approach to value creation and ecosystem building.
      </p>
      <div className="mb-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
