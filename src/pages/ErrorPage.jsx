import { motion } from "framer-motion";

export default function ErrorPage({
  statusCode = 404,
  message = "Sorry, the page you are looking for can't be found.",
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-50 p-6">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row items-stretch"
        role="alert"
        aria-live="polite"
      >
        {/* Left: Illustration */}
        <section className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-rose-500 text-white">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-xs text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="mx-auto mb-6 w-40 h-40"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
              />
              <path
                d="M9 9l6 6M15 9l-6 6"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Oops!
            </h2>
            <p className="mt-3 text-sm md:text-base opacity-90">
              Something went wrong
            </p>

            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 text-sm font-medium"
              >
                Go home
              </a>
              <button
                onClick={() => location.reload()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-sm"
              >
                Retry
              </button>
            </div>
          </motion.div>
        </section>

        {/* Right: Details */}
        <section className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex flex-col h-full justify-center">
            <div className="flex items-baseline gap-4">
              <span className="text-6xl md:text-7xl font-extrabold text-gray-900">
                {statusCode}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {message}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Please check the URL, or head back to the homepage. If the
                  problem persists, contact support.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/"
                className="block text-center py-3 px-4 rounded-lg bg-gray-800 text-white font-medium hover:scale-[1.01] transition-transform"
              >
                Return to Homepage
              </a>

              <a
                href="/contact"
                className="block text-center py-3 px-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                Contact Support
              </a>
            </div>

            <div className="mt-8 text-xs text-gray-400">
              <strong className="text-gray-600">Debug info:</strong>
              <pre className="mt-2 p-2 bg-gray-50 rounded-md text-xs text-gray-500 overflow-auto">{`time: ${new Date().toLocaleString()}`}</pre>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              If you reached this page from a link, it might be outdated.
            </p>
          </div>
        </section>
      </motion.main>

      {/* Footer small credit */}
      <footer className="mt-6 text-center text-xs text-gray-400">
        Built with ❤️ — Fancy Error Page
      </footer>
    </div>
  );
}
