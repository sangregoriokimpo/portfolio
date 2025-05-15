import '../styles/Pages/About.css';
import { FaPython, FaJava, FaJs, FaRust, FaReact, FaCode } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiCss3 } from 'react-icons/si';

function About() {

  const technicalSkills = {
    Languages: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'C/C++', icon: <SiCplusplus /> },
      { name: 'C#', icon: <FaCode/> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Rust', icon: <FaRust /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'Verilog', icon: <FaCode />},
    ],
    'Developer Tools': ['Git', 'VS Code', 'JetBrains IDEs', 'Eclipse', 'Qt Creator', 'Unity', 'OpenCV', 'Jupyter Notebooks', 'React', 'ROS', 'Gazebo'],
    Software: ['Fusion 360', 'SolidWorks', 'Siemens NX', 'Vivado', 'Vitis', 'VirtualBox', 'LTSpice', 'Cadence'],
    'Operating Systems': ['Windows', 'macOS', 'Linux'],
    Certifications: [
      'Meta React Basics',
      'Robotics Backend - ROS2',
      'FIZ Soldering Certification'
    ],
    Coursework: [
      'Electronics', 'Microprocessor Systems', 'Electric Circuits I-II',
      'Digital Logic Design', 'Data Structures', 'Calculus I-III', 'Discrete Math', 'Linear Algebra'
    ]
  };
  
  const workExperience = [
    {
      title: "Electrical & Computer Hardware (CDH) Engineer – NASA L'SPACE Program",
      time: "Dec 2024 – Present",
      bullets: [
        "Participated in a virtual NASA academy focused on space mission formulation and teamwork.",
        "Followed the NASA mission lifecycle to submit a Preliminary Design Review for a robotic space mission.",
        "Attended weekly lectures led by NASA scientists, engineers, and managers.",
        "Contributed to the design of a spacecraft’s Electrical Power and Command/Data Handling subsystems.",
        "Researched heritage subsystems to improve design confidence.",
        "Conducted trade studies to align subsystem design with science goals and mission constraints.",
        "Completed CAD design in Siemens NX ensuring interface compatibility across subsystems."
      ]
    },
    {
      title: "Incoming Undergraduate Researcher – RISING Lab, University of Florida",
      time: "SAST REU | Summer 2025",
      bullets: [
        "Specializing in autonomous vehicles and robotics for public transportation applications."
      ]
    }
  ];

  const extracurriculars = [
    {
      title: "Design Team Member & Safety Captain – FRC 4512 Otter Chaos Robotics",
      time: "2019 – 2023",
      bullets: [
        "Led mechanical design using Fusion 360.",
        "Trained underclassmen in technical documentation and CAD workflows.",
        "Contributed to world title win in FIRST Robotics 2021 – INFINITE RECHARGE."
      ]
    },
    {
      title: "Boeing Mentorship Program – Boeing",
      time: "Oct 2024 – April 2025",
      bullets: [
        "Gained foundational knowledge in aerospace and GN&C systems.",
        "Mentorship reinforced career goals and academic focus in Mechanical Engineering."
      ]
    },
    {
      title: "CS Team Member – Palouse RoboSub",
      time: "2024 – Present",
      bullets: [
        "Developing an autonomous underwater vehicle (AUV) to inspect WSU’s TRIGA nuclear reactor.",
        "Built a ROS2 Jazzy-based underwater simulation in UUV Simulator.",
        "Mounted Intel NUC-powered electronics and integrated sensors on the AUV."
      ]
    },
    {
      title: "CS Team Member – WSU Robotics Club",
      time: "2025 – Present",
      bullets: [
        "Developed inverse kinematics for quadruped walking gait.",
        "Used CHAMP/CHVMP locomotion framework for stable robot control.",
        "Worked on robot “Marshall” powered by ROS1 Melodic and Raspberry Pi."
      ]
    }
  ];

   return (
    <section id="about">
      <div className="experience-section">
        <h3 className="experience-heading">About Me</h3>
        <div className="experience-container">
          <div className="experience-card">
            <p>
              I am currently pursuing a Bachelor of Science in Mechanical Engineering with a minor in Electrical Engineering at Washington State University. 
              My interests span Robotics and Mechatronics, Autonomous Systems, Avionics, Astronautical and Aerospace Engineering, Guidance, Navigation, and Control (GN&C) Engineering, 
              Control Theory, AI, and Robotic Perception.
            </p>
            <p>
              I am driven by a passion for innovation in automation and aerospace and thrive in multidisciplinary teams. 
              With experience in both academic research and hands-on projects, I strive to make meaningful contributions to science and engineering.
            </p>
          </div>
        </div>
      </div>


      <div className="experience-section">
        <h3 className="experience-heading">Work Experience</h3>
        <div className="experience-container">
          {workExperience.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h4>{exp.title}</h4>
              <em>{exp.time}</em>
              <ul>
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <h3 className="experience-heading">Extracurricular Experience</h3>
        <div className="experience-container">
          {extracurriculars.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h4>{exp.title}</h4>
              <em>{exp.time}</em>
              <ul>
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

          <div className="experience-section">
      <h3 className="experience-heading">Technical Skills</h3>
      <div className="experience-container">
       {Object.entries(technicalSkills).map(([category, items], index) => (
        <div className="experience-card" key={index}>
          <h4>{category}</h4>
          <div className="skill-tags">
            {items.map((item, idx) => (
              <span className="skill-tag" key={idx}>
                {typeof item === 'object' && item.icon && (
                  <span className="skill-icon">{item.icon}</span>
                )}
                {item.name || item}
              </span>
            ))}
          </div>
        </div>
      ))}

      </div>
    </div>

    </section>
  );
}

export default About;
