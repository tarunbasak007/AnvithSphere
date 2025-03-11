const Contact = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white text-center py-16">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg mt-2">We&apos;d love to hear from you! Reach out with any questions or comments.</p>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column - Contact Form */}
                    <section>
                        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
                        <p className="text-lg text-gray-700 mt-4">
                            Fill out the form below to send us a message. We&apos;ll get back to you as soon as possible.
                        </p>
                        <form className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="business">Business Proposal</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* Right Column - Contact Information & Map */}
                    <div className="space-y-8">
                        {/* Contact Information Card */}
                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600">📍</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-800">Address</h3>
                                        <p className="text-gray-600">123 Business Street, Suite 100<br />New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600">📧</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                        <p className="text-gray-600">contact@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600">📞</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Business Hours Card */}
                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Business Hours</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Monday - Friday</span>
                                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="font-medium">Closed</span>
                                </div>
                            </div>
                        </section>

                        {/* Social Media Card */}
                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect With Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-400">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.174.777-1.174 1.601v5.604h-3v-11h3v1.765c.517-.266 1.117-.412 1.75-.412 1.75 0 3.25 1.254 3.25 3.615v6.032z" />
                                    </svg>
                                </a>
                            </div>
                        </section>

                        {/* Map Section */}
                        <section className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Find Us</h2>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
