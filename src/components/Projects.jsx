export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-center fade-in">
      <h3 className="text-3xl font-bold mb-12 text-blue-400">Projects</h3>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-2">
            AI-Powered Crop Disease Detection
          </h4>
          <p className="text-gray-400 text-sm mb-3">
            Developed an ML-based crop disease classification system using 
            image preprocessing and model evaluation techniques.
          </p>
          <p className="text-xs text-gray-500">
            Tech Stack: Python, Machine Learning
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-2">
            Vulnerability Data REST API (Spring Boot)
          </h4>
          <p className="text-gray-400 text-sm mb-3">
            Developed a RESTful backend application using Spring Boot 
            with layered architecture (Controller, Service, Repository), 
            JSON response handling and pagination support.
          </p>
          <p className="text-xs text-gray-500">
            Tech Stack: Java, Spring Boot, MySQL
          </p>
        </div>

      </div>
    </section>
  )
}