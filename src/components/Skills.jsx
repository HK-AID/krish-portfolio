export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center">
      <h3 className="text-3xl font-bold mb-8 text-blue-400">Technical Skills</h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-300">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">Languages</h4>
          <p>Java</p>
          <p>Python</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">Web & Database</h4>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>MySQL</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">Tools & Platforms</h4>
          <p>Git & GitHub</p>
          <p>VS Code</p>
          <p>IntelliJ IDEA</p>
          <p>Eclipse</p>
          <p>Excel</p>
        </div>

      </div>
    </section>
  )
}