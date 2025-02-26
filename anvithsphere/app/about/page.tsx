const About = () => {
    return (
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white text-center py-16">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg mt-2">A passionate software engineer, mathematician, and content creator.</p>
        </section>
  
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Who Am I?</h2>
            <p className="text-lg text-gray-700 mt-4">
              My name is **Tarun**, a software engineer currently working at HCL, with **6 years of experience** in React and .NET C#.
              I am also pursuing my **MSc in Mathematics**, specializing in Measure Theory, Abstract Algebra, and Algebraic Number Theory.
            </p>
          </section>
  
          {/* What I Do Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">What I Do?</h2>
            <p className="text-lg text-gray-700 mt-4">
              I work with **Microsoft** as a client at HCL, building scalable applications. Additionally, I am developing
              my own **Mathematical Quiz App** and working on a **personal blogging website** using Next.js.
            </p>
          </section>
  
          {/* Skills & Interests */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Skills & Interests</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 mt-4">
              <li>Frontend: React, Next.js</li>
              <li>Backend: .NET C#, Python</li>
              <li>Mathematics & UGC NET Preparation</li>
              <li>Game Development (Unity, Blender)</li>
              <li>Stock Market Analysis</li>
              <li>Guitar & Content Creation</li>
            </ul>
          </section>
  
          {/* Contact Section */}
          <section className="text-center py-12 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800">Want to Connect?</h2>
            <p className="text-lg text-gray-700 mt-2">Feel free to reach out for collaborations, projects, or just a chat!</p>
            <a
              href="mailto:your-email@example.com"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </section>
        </div>
      </div>
    );
  };
  
  export default About;
  