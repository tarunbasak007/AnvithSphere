import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Blog Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Tarun&apos;s Blog</h1>
        <p className="text-gray-600 mt-2">
          Exploring Math, Coding, and Everything In Between!
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Featured Blog Posts */}
        <div className="md:col-span-2 space-y-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  <p className="text-blue-600 font-medium mt-4">Read More →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
          <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/category/${category}`} className="text-blue-600 hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">Recent Posts</h3>
          <ul className="mt-4 space-y-2">
            {blogPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-gray-700 hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">Newsletter</h3>
          <p className="text-gray-600 text-sm mt-2">
            Get the latest math & coding updates straight to your inbox!
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-3 p-2 border border-gray-300 w-full rounded-md"
          />
          <button className="mt-3 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </aside>
      </div>
    </div>
  );
};

// Dummy blog data
const blogPosts = [
  {
    slug: "measure-theory-for-beginners",
    title: "Measure Theory for Beginners",
    excerpt: "Understanding the basics of measure theory with simple examples.",
    image: "/images/measure-theory.jpg",
  },
  {
    slug: "react-vs-nextjs",
    title: "React vs Next.js: What to Choose?",
    excerpt: "Comparing React.js and Next.js for modern web development.",
    image: "/images/react-nextjs.jpg",
  },
  {
    slug: "stock-market-math",
    title: "Mathematics Behind the Stock Market",
    excerpt: "Exploring probability, statistics, and game theory in finance.",
    image: "/images/stock-market-math.jpg",
  },
];

const categories = ["Mathematics", "Coding", "Web Development", "Finance", "Blender"];

export default BlogPage;
