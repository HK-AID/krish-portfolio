export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center">
      <h3 className="text-3xl font-bold mb-8 text-blue-400">Skills</h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-300">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">Backend</h4>
          <p>Java</p>
          <p>Spring Boot</p>
          <p>REST APIs</p>
          <p>JWT Authentication</p>
          <p>MySQL</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">Frontend</h4>
          <p>React</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Tailwind CSS</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">Tools</h4>
          <p>Git</p>
          <p>GitHub</p>
          <p>Postman</p>
          <p>VS Code</p>
        </div>

      </div>
    </section>
  )
}