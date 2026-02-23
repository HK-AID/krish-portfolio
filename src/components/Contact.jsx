export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center fade-in"
    >
      <h3 className="text-3xl font-bold mb-8 text-blue-400">Contact</h3>

      <div className="space-y-3 text-gray-400 text-lg">

        <p>
          📧 
          <a
            href="mailto:harikbe2006@gmail.com"
            className="hover:text-white ml-2"
          >
            harikbe2006@gmail.com
          </a>
        </p>

        <p>
          💻 
          <a
            href="https://github.com/HK-AID"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white ml-2"
          >
            github.com/HK-AID
          </a>
        </p>

        <p>
          🔗 
          <a
            href="https://www.linkedin.com/in/harikrishnaa-s-8b09bb29a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white ml-2"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          🧠 
          <a
            href="https://leetcode.com/u/Harikrish2626/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white ml-2"
          >
            LeetCode Profile
          </a>
        </p>

        <p>
          🏆 
          <a
            href="https://www.hackerrank.com/profile/harikbe2006"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white ml-2"
          >
            HackerRank Profile
          </a>
        </p>

      </div>

      <p className="mt-12 text-sm text-gray-500">
       © {new Date().getFullYear()} Harikrishnaa S. All rights reserved.
      </p>
    </section>
  )
}