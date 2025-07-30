export default function Footer() {
  return (
    <footer
      className="py-12 text-center border-t border-white border-opacity-10 relative"
      style={{
        position: "relative",
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      <div className="flex justify-center w-full">
        <div className="max-w-4xl w-full px-4">
          {/* Brand */}
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                background: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Starfreut
            </h3>
            <p className="text-gray-400">Rock • R&B • Jazz • Houston, TX</p>
          </div>

          {/* Contact */}
          <div className="mb-8 flex justify-center items-center gap-8 flex-wrap">
            <a
              href="mailto:contact@starfreut.com"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              📧 Email Us
            </a>
            <a
              href="https://www.instagram.com/starfreutband.htx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              📱 @starfreutband.htx
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Starfreut. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
