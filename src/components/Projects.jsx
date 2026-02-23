export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-center">
      <h3 className="text-3xl font-bold mb-12 text-blue-400">Projects</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">Secure Weather API</h4>
          <p className="text-gray-400 text-sm mb-3">
            Spring Boot backend with JWT authentication and MySQL integration.
          </p>
          <a
            href="https://github.com/YOUR_USERNAME/weather-api"
            target="_blank"
            className="text-blue-400 text-sm"
          >
            View Code →
          </a>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">CVE Tracker API</h4>
          <p className="text-gray-400 text-sm mb-3">
            Integrated NVD external API with pagination and filtering.
          </p>
          <a
            href="https://github.com/YOUR_USERNAME/cve-tracker"
            target="_blank"
            className="text-blue-400 text-sm"
          >
            View Code →
          </a>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">AI Crop Disease Detection</h4>
          <p className="text-gray-400 text-sm mb-3">
            ML-based crop disease detection using leaf images.
          </p>
          <a
            href="https://github.com/YOUR_USERNAME/crop-disease"
            target="_blank"
            className="text-blue-400 text-sm"
          >
            View Code →
          </a>
        </div>

      </div>
    </section>
  )
}