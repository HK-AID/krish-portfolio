export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 sticky top-0 bg-slate-950 z-50">
      <h1 className="text-2xl font-bold text-blue-400">Krish</h1>
      <div className="space-x-6 text-gray-300 hidden md:block">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </nav>
  )
}