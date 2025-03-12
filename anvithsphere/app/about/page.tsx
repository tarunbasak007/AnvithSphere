const About = () => {
  return (
    <div className="container mx-auto px-6 py-8 mt-16 border border-gray-300 shadow-lg rounded-lg">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Exploring ideas, sharing knowledge, and connecting with fellow enthusiasts
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section with Cards */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a passionate writer and thinker who loves to explore various topics
              and share insights with my readers. Through this blog, I aim to create
              meaningful discussions and build a community of curious minds.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide valuable content that inspires, educates, and entertains.
              I believe in the power of sharing knowledge and creating connections
              through thoughtful writing.
            </p>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Topics I Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Technology', 'Lifestyle', 'Personal Growth'].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic}</h3>
                <p className="text-gray-600">Exploring insights and perspectives</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to my newsletter for the latest posts and exclusive content</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Let&apos;s Connect</h2>
          <div className="flex justify-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
  