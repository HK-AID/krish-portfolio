export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-center">
      <h3 className="text-3xl font-bold mb-8 text-blue-400">Projects</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">Secure Weather API</h4>
          <p className="text-gray-400 text-sm">
            Spring Boot backend with JWT authentication and MySQL integration.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">CVE Tracker API</h4>
          <p className="text-gray-400 text-sm">
            Integrated NVD external API with filtering and pagination support.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">AI Crop Disease Detection</h4>
          <p className="text-gray-400 text-sm">
            Machine learning model to detect crop diseases using leaf images.
          </p>
        </div>

      </div>
    </section>
  )
}