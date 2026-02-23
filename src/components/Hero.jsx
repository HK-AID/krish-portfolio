export default function Hero() {
  return (
    <section className="text-center py-32 px-4">
      <h2 className="text-5xl font-extrabold mb-6">
        Hi, I'm <span className="text-blue-400">Harikrishnaa</span> 👋
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Final-year CSE student with strong skills in 
        <span className="text-white"> Java, Python, and Data Structures.</span>
        Passionate about Backend Development and AI-driven applications.
        </p>

      <div className="mt-8 space-x-4">

        {/* Update resume file name */}
        <a
          href="/Harikrishnaa_Resume.pdf"
          download
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Download Resume
        </a>

        <a
          href="#projects"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}