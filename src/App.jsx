import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, PerspectiveCamera } from "@react-three/drei"
import { Briefcase, GraduationCap, Mail, MapPin, Phone, Github, Linkedin, Gamepad2, Music, Globe, Download } from 'lucide-react'
import resume from "./assets/Guru_Prasath_Resume.pdf";
import guru from "./assets/guru.jpg";

export default function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    document.body.classList.add("dark")
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <mesh>
                <torusGeometry args={[2, 0.2, 16, 100]} />
                <meshStandardMaterial color="#0ea5e9" />
              </mesh>
            </Float>
            <Environment preset="night" />
          </Canvas>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center space-y-4">
          {/* <img className="max-h-40 max-w-40 place-self-center rounded-lg shadow-lg shadow-sky-400" src="https://media.licdn.com/dms/image/v2/D5603AQGbhMniNcRfdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710159740826?e=1745452800&v=beta&t=FgpTq8KQcOoKIE6rdZC4F6XC7vFVAUCCw8tTYYlgISo" /> */}
          <img className="max-h-40 max-w-40 place-self-center rounded-lg shadow-lg shadow-sky-400" src={guru} />
          <h1 className="text-6xl font-bold">Guru Prasath M</h1>
          <p className="text-2xl text-sky-400">Full Stack Developer</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-6">
        <motion.div style={{ y }} className="max-w-4xl mx-auto p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold text-sky-400">Objective</h2>
          <p className="text-gray-300 text-justify">
             <b>Proficient Software Engineer</b> with expertise in the <b>MERN stack (MongoDB, Express.js, React, Node.js)</b> and containerization using <b>Docker</b> and <b>Kubernetes</b>. Experienced in building <b>scalable web applications</b>, <b>RESTful APIs</b>, and <b>microservices</b>. Strong in <b>Agile</b> practices, <b>CI/CD</b>, <b>Git</b>, and cloud platforms like <b>AWS</b> and <b>Azure</b>. Focused on delivering <b>efficient</b>, <b>high-performance solutions</b> to drive business success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2"><Mail className="text-sky-400" /><span>m.guruprasath12@gmail.com, guruprasath.m12@gmail.com</span></div>
                <div className="flex items-center gap-2"><Phone className="text-sky-400" /><span>+91 80724 81563</span></div>
                <div className="flex items-center gap-2"><MapPin className="text-sky-400" /><span>Coimbatore, India</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Profiles</h3>
              <div className="space-y-3">
                <a href="https://github.com/guruprasathm12" target="_blank" className="text-sky-400 flex items-center gap-2"><Github />GitHub</a>
                <a href="https://www.linkedin.com/in/guru-prasath-m-83414a212/" target="_blank" className="text-sky-400 flex items-center gap-2"><Linkedin />LinkedIn</a>
                <a href={resume} target="_blank" className="text-sky-400 flex items-center gap-2"><Download />Resume</a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-sky-400">Experience</h2>
          <div className="space-y-8">
            <div className="neumorphic border border-sky-900 rounded-md p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <p className="text-sky-400">Nplus Technologies <span className="text-sky-300">(Mar 2024 - Jun 2025)</span></p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                  <li> Built and maintained scalable <b>MERN stack</b> apps for the <b>TaxiAppz</b> platform with responsive UI and modular backend.</li>
                  <li> Integrated <b>REST APIs</b>, third-party services, and deployed solutions on <b>Microsoft Azure</b> for enhanced reliability.</li>
                  <li> Worked in Agile teams using <b>Git</b>, CI/CD, and DevOps practices to streamline development and releases.</li>
                </ul>
              </div>
            </div>
            <div className="neumorphic border border-sky-900 rounded-md p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Associate Software Engineer</h3>
                    <p className="text-sky-400">Kovai.co <span className="text-sky-300">(Apr 2023 - Feb 2024)</span></p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                  <li> Built <b>Document360tools</b>, an internal productivity tool using the <b>MERN stack</b>, designed to support and extend the functionality of the Document360 platform.</li>
                  <li> Implemented features for data handling, UI components, and system automation; deployed and managed services on <b>Microsoft Azure</b>.</li>
                  <li> Collaborated in Agile teams using <b>Git</b>, <b>CI/CD pipelines</b>, and modern DevOps practices to ensure smooth delivery and integration.</li>
                </ul>
              </div>
            </div>
            <div className="neumorphic border border-sky-900 rounded-md p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Intern Product Engineer</h3>
                    <p className="text-sky-400">Codingmart Technologies  <span className="text-sky-300">(Jan 2023 - Feb 2023)</span></p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                  <li>Assisted in the development of scalable web applications</li>
                  <li>Worked with ReactJs, NodeJs, ExpressJs, MongoDB</li>
                  <li>Gained experience in API integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-sky-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Full Stack Development",
              "MERN Stack Development",
              "Python",
              "C++",
              "Java",
              "C",
              "Data Structures",
              "OOP",
              "Azure",
              "AWS",
              "MySQL",
              "MongoDB",
              "MSSQL",
            ].map((skill) => (
              <div key={skill} variant="secondary" className="neumorphic border border-sky-900 rounded-md p-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-sky-400">Education</h2>
          <div className="neumorphic border border-sky-900 rounded-md p-6">
            <div className="flex gap-4">
              <GraduationCap className="text-sky-400 w-6 h-6" />
              <div>
                <h3 className="text-xl font-semibold">B.E Computer Science and Engineering</h3>
                <p className="text-sky-400">Dr.Mahalingam College of Engineering and Technology</p>
                <p className="text-gray-300">March 2023 | CGPA: 8.5</p>
              </div>
            </div>
          </div>
          <div className="neumorphic border border-sky-900 rounded-md p-6">
            <div className="flex gap-4">
              <GraduationCap className="text-sky-400 w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Diploma in Computer Technology</h3>
                <p className="text-sky-400">Nachimuthu Polytechnic College</p>
                <p className="text-gray-300">April 2020 | Grade: 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-sky-400">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neumorphic border border-sky-900 rounded-md p-6 flex items-center gap-4"><Gamepad2 className="text-sky-400 w-6 h-6" /><span>Playing Shuttle</span></div>
            <div className="neumorphic border border-sky-900 rounded-md p-6 flex items-center gap-4"><Music className="text-sky-400 w-6 h-6" /><span>Listening Music</span></div>
            <div className="neumorphic border border-sky-900 rounded-md p-6 flex items-center gap-4"><Globe className="text-sky-400 w-6 h-6" /><span>Surfing Technologies</span></div>
          </div>
        </div>
      </section>
    </div>
  )
}
