export default function Hero() {
  return (
    <section className="text-center py-32 px-4">
      <h2 className="text-5xl font-extrabold mb-6">
        Hi, I'm <span className="text-blue-400">Krish</span> 👋
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Aspiring Backend Developer specializing in 
        <span className="text-white"> Java, Spring Boot, REST APIs, and SQL.</span>
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}