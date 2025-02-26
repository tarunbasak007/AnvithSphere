"use client";

import { useState } from "react";

const LoginPage = () => {
  const [agreeToWhatsapp, setAgreeToWhatsapp] = useState(false);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    if (agreeToWhatsapp) {
      console.log("WhatsApp Number:", whatsapp);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* WhatsApp Consent */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="whatsappConsent"
              checked={agreeToWhatsapp}
              onChange={() => setAgreeToWhatsapp(!agreeToWhatsapp)}
              className="h-4 w-4"
            />
            <label htmlFor="whatsappConsent" className="text-sm text-gray-700">
              I agree to receive updates via WhatsApp.
            </label>
          </div>

          {/* WhatsApp Field (Only shows if agreed) */}
          {agreeToWhatsapp && (
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Enter your WhatsApp number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
          )}

          {/* Submit & Skip Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="text-gray-500 hover:underline"
              onClick={() => console.log("User skipped")}
            >
              Skip
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
