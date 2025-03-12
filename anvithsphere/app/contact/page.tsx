const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-8 mt-16 border border-gray-300 shadow-lg rounded-lg">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white text-center py-16">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg mt-2">We&apos;d love to hear from you! Reach out with any questions or comments.</p>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Contact Form Section */}
                <section className="mb-12">
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

                {/* Contact Information Section */}
                <section className="text-center py-12 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Contact Information</h2>
                    <p className="text-lg text-gray-700 mt-2">
                        Feel free to reach out to us through any of the following methods:
                    </p>
                    <p className="text-gray-600 mt-4">📍 Address: 123 Your Street, Your City</p>
                    <p className="text-gray-600 mt-2">📧 Email: contact@example.com</p>
                    <p className="text-gray-600 mt-2">📞 Phone: +1 234 567 890</p>
                </section>
            </div>
        </div>
    );
};

export default Contact;
