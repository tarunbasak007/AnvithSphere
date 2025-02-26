"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [agreeWhatsApp, setAgreeWhatsApp] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, whatsapp: agreeWhatsApp ? whatsapp : "Not Provided" });
    alert("Thank you for subscribing!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Subscribe to Our Newsletter</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          {/* WhatsApp Agreement Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="whatsappOptIn"
              checked={agreeWhatsApp}
              onChange={() => setAgreeWhatsApp(!agreeWhatsApp)}
              className="mr-2"
            />
            <label htmlFor="whatsappOptIn" className="text-gray-700">Receive updates via WhatsApp</label>
          </div>

          {/* WhatsApp Input (Only If Agreed) */}
          {agreeWhatsApp && (
            <div>
              <label className="block text-gray-700 font-medium">WhatsApp Number</label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Enter your WhatsApp number"
              />
            </div>
          )}

          {/* Submit & Skip Buttons */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Subscribe
            </button>
            <button
              type="button"
              onClick={() => alert("Skipped WhatsApp Subscription!")}
              className="text-gray-600 underline"
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
