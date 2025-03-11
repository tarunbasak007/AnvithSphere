"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [agreeWhatsApp, setAgreeWhatsApp] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [showSubscription, setShowSubscription] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, whatsapp: agreeWhatsApp ? whatsapp : "Not Provided" });
    setShowSubscription(false);
    alert("Thank you for subscribing!");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid animate-grid"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome to My Digital Garden
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Exploring ideas through code, writing, and creative projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" 
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
              Read Blog
            </Link>
            <button
              onClick={() => setShowSubscription(true)}
              className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Posts</h2>
            <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
              View All Posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link href={post.link} key={post.title} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <Link href="/projects" className="text-purple-600 hover:text-purple-700 font-medium">
              View All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-white bg-white/20 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <Link 
                      href={project.link}
                      className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                    >
                      View Project →
                    </Link>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics & Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Topics I Write About</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link href={category.link} key={category.name}>
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-purple-200 mb-8">
            Get notified about new blog posts, projects, and exclusive content
          </p>
          <button
            onClick={() => setShowSubscription(true)}
            className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </section>

      {/* Subscription Modal */}
      {showSubscription && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Join the Newsletter</h2>
                <button
                  onClick={() => setShowSubscription(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="whatsappOptIn"
                    checked={agreeWhatsApp}
                    onChange={() => setAgreeWhatsApp(!agreeWhatsApp)}
                    className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                  />
                  <label htmlFor="whatsappOptIn" className="ml-2 text-gray-700">
                    Also receive updates via WhatsApp
                  </label>
                </div>

                {agreeWhatsApp && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-500"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>
                )}

                <div className="flex justify-between items-center pt-4">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Subscribe
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSubscription(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Maybe Later
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Sample data
const categories = [
  {
    name: "Web Development",
    icon: "💻",
    description: "Modern web technologies and best practices",
    link: "/blog/category/web-dev"
  },
  {
    name: "Data Science",
    icon: "📊",
    description: "Analytics, ML, and data visualization",
    link: "/blog/category/data-science"
  },
  {
    name: "UI/UX Design",
    icon: "🎨",
    description: "Creating beautiful user experiences",
    link: "/blog/category/design"
  },
  {
    name: "Tech Tutorials",
    icon: "📚",
    description: "Step-by-step guides and tutorials",
    link: "/blog/category/tutorials"
  }
];

const latestPosts = [
  {
    title: "Building a Modern Blog with Next.js",
    excerpt: "Learn how to create a fast, SEO-friendly blog using Next.js, MDX, and Tailwind CSS.",
    image: "/images/blog-nextjs.jpg",
    date: "March 15, 2024",
    tags: ["Next.js", "React", "Tutorial"],
    link: "/blog/modern-blog-nextjs"
  },
  {
    title: "Machine Learning Basics",
    excerpt: "An introduction to fundamental machine learning concepts and practical applications.",
    image: "/images/ml-basics.jpg",
    date: "March 10, 2024",
    tags: ["ML", "Python", "Data Science"],
    link: "/blog/ml-basics"
  },
  {
    title: "UI Design Principles",
    excerpt: "Essential principles for creating intuitive and beautiful user interfaces.",
    image: "/images/ui-design.jpg",
    date: "March 5, 2024",
    tags: ["Design", "UI/UX", "Tips"],
    link: "/blog/ui-design-principles"
  }
];

const projects = [
  {
    title: "Personal Blog Platform",
    description: "A modern blog platform built with Next.js, featuring dark mode, MDX support, and a beautiful responsive design.",
    image: "/images/project-blog.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "/projects/blog-platform",
    github: "https://github.com/yourusername/blog-platform"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets, built with D3.js and React.",
    image: "/images/project-dashboard.jpg",
    technologies: ["React", "D3.js", "Node.js"],
    link: "/projects/data-dashboard",
    github: "https://github.com/yourusername/data-dashboard"
  }
];
