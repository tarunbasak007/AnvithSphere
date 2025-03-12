import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-6 py-8 mt-16 border border-gray-300 shadow-lg rounded-lg">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Tarun&apos;s Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring Math, Coding, and Everything In Between!
        </p>
      </header>

      {/* Featured Post */}
      <div className="mb-12">
        <Link href={`/blog/${featuredPost.slug}`} className="block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-blue-600 font-semibold">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mt-6">
                  <div className="flex items-center">
                    <Image
                      src="/images/avatar.jpg"
                      alt="Author"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="ml-3 text-gray-700">Tarun</span>
                  </div>
                  <span className="mx-2">•</span>
                  <span className="text-gray-500">{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Latest Posts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Latest Posts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="block"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-blue-600 text-sm font-semibold">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800 mt-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center mt-4">
                        <span className="text-gray-500 text-sm">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Topics */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Popular Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularTopics.map((topic) => (
                <div
                  key={topic.name}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    {topic.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{topic.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {topic.postCount} posts
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category}`}
                    className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>{category}</span>
                    <span className="text-sm text-gray-500">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm text-blue-100 mb-4">
              Get the latest math & coding updates straight to your inbox!
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="mt-3 w-full bg-white text-blue-600 p-2 rounded-md hover:bg-blue-50 transition">
              Subscribe
            </button>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Posts
            </h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Dummy data
const featuredPost = {
  slug: "measure-theory-for-beginners",
  title: "Measure Theory for Beginners: A Comprehensive Guide",
  excerpt:
    "Dive deep into the fundamentals of measure theory with practical examples and intuitive explanations. Perfect for those starting their journey in advanced mathematics.",
  image: "/images/measure-theory.jpg",
  category: "Mathematics",
  date: "March 15, 2024",
};

const blogPosts = [
  {
    slug: "react-vs-nextjs",
    title: "React vs Next.js: What to Choose?",
    excerpt: "Comparing React.js and Next.js for modern web development.",
    image: "/images/react-nextjs.jpg",
    category: "Web Development",
    date: "March 10, 2024",
  },
  {
    slug: "stock-market-math",
    title: "Mathematics Behind the Stock Market",
    excerpt: "Exploring probability, statistics, and game theory in finance.",
    image: "/images/stock-market-math.jpg",
    category: "Finance",
    date: "March 8, 2024",
  },
  {
    slug: "blender-tutorial",
    title: "Getting Started with Blender 3D",
    excerpt: "Learn the basics of 3D modeling with Blender.",
    image: "/images/blender-tutorial.jpg",
    category: "Blender",
    date: "March 5, 2024",
  },
  {
    slug: "typescript-tips",
    title: "Essential TypeScript Tips and Tricks",
    excerpt: "Boost your TypeScript skills with these practical tips.",
    image: "/images/typescript.jpg",
    category: "Coding",
    date: "March 3, 2024",
  },
];

const categories = [
  "Mathematics",
  "Coding",
  "Web Development",
  "Finance",
  "Blender",
];

const popularTopics = [
  { name: "Mathematics", postCount: 12, icon: "📐" },
  { name: "Web Dev", postCount: 8, icon: "🌐" },
  { name: "Finance", postCount: 6, icon: "💰" },
  { name: "3D Design", postCount: 4, icon: "🎨" },
  { name: "Programming", postCount: 10, icon: "💻" },
  { name: "Tutorials", postCount: 7, icon: "📚" },
];

const recentPosts = [
  {
    slug: "measure-theory-for-beginners",
    title: "Measure Theory for Beginners",
    image: "/images/measure-theory.jpg",
    date: "March 15, 2024",
  },
  {
    slug: "react-vs-nextjs",
    title: "React vs Next.js: What to Choose?",
    image: "/images/react-nextjs.jpg",
    date: "March 10, 2024",
  },
  {
    slug: "stock-market-math",
    title: "Mathematics Behind the Stock Market",
    image: "/images/stock-market-math.jpg",
    date: "March 8, 2024",
  },
];

export default BlogPage;
