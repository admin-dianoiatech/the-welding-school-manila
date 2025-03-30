export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#1d2947] to-[#334470] text-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-5 relative flex flex-col items-center">
            <a href="/" className="flex justify-center relative z-10">
              <div className="rounded-full bg-white p-2 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="The Welding School Manila"
                  className="h-20 w-20 object-contain"
                />
              </div>
            </a>
            <p className="text-gray-300 leading-relaxed relative z-10">
              The Welding School Manila is a premier welding training
              institution providing quality education and certification for
              professional welders in the Philippines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text gradient-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/certifications"
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text gradient-secondary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a
                  href="https://maps.google.com/?q=550+Trinidad+Ayala,+Ermita,+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  550 Trinidad Ayala, Ermita, Manila
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="space-y-1">
                  <a
                    href="tel:09273840120"
                    className="block text-gray-300 hover:text-white"
                  >
                    0927 384 0120
                  </a>
                  <a
                    href="tel:0283542792"
                    className="block text-gray-300 hover:text-white"
                  >
                    (02) 8354 2792
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:theweldingschoolmanila@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  theweldingschoolmanila@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 gradient-text gradient-secondary">
              Hours
            </h3>
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              Monday to Saturday
              <br />
              8:00 AM - 6:00 PM
            </p>
            <a
              href="/contact"
              className="block w-full text-center gradient-secondary hover:opacity-90 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 py-10 text-sm text-center">
          <p>
            &copy; {currentYear} The Welding School Manila and Tradetest Center
            Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
