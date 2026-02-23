import { useEffect, useState } from "react"

export default function Hero() {
  const roles = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Machine Learning Enthusiast",
    "Problem Solver"
  ]

  const [displayedRoles, setDisplayedRoles] = useState([])
  const [currentText, setCurrentText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (roleIndex < roles.length) {
      if (charIndex < roles[roleIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + roles[roleIndex][charIndex])
          setCharIndex((prev) => prev + 1)
        }, 40)
        return () => clearTimeout(timeout)
      } else {
        setDisplayedRoles((prev) => [...prev, currentText])
        setCurrentText("")
        setCharIndex(0)
        setRoleIndex((prev) => prev + 1)
      }
    }
  }, [charIndex, roleIndex, roles, currentText])

  return (
    <section className="text-center py-32 px-4">
      <h2 className="text-5xl font-extrabold mb-6">
        Hi, I'm <span className="text-blue-400">Harikrishnaa</span> 👋
      </h2>

      <div className="text-xl text-gray-300 space-y-2">
        {displayedRoles.map((role, index) => (
          <p key={index} className="text-white">{role}</p>
        ))}
        {currentText && (
  <p className="text-white">
    {currentText}
    <span className="cursor"></span>
  </p>
)}
      </div>

      <div className="mt-10 space-x-4">
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