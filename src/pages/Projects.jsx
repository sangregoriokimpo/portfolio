import '../styles/Pages/Projects.css';


const projectList = [
  {
    title: 'Verilog Projects',
    video: '/assets/blackboard.mp4',
    description: 'Developed a stopwatch and calculator using Verilog, utilizing a Xilinx ZYNQ XC7007S MPSoC processor, a seven-segment display, switches, and push buttons for implementation. Designed and integrated core stopwatch functionalities. Implemented arithmetic operations through binary and bitwise computations.',
    link: 'https://github.com/sangregoriokimpo/EE214',
  },
  {
    title: 'React Chess Engine',
    video: '/assets/chess.mp4',
    description: 'Developed an interactive chess engine in React and TypeScript featuring full rule enforcement (pawn promotion, en passant, check detection), object-oriented move validation through a centralized Referee class, and a dynamic drag-and-drop interface with DOM-based tile snapping for real-time gameplay responsiveness.',
    link: 'https://github.com/sangregoriokimpo/chess-app',
  },
  {
    title: 'Autonomous Differential Drive Vehicle',
    video: '/assets/drive.mp4',
    description: 'Developed an autonomous differential-drive vehicle using the ROS2 Jazzy framework within the Gazebo Harmonic simulator, including teleoperation via Linux terminal and integration of a camera sensor for environmental perception.',
    link: 'https://github.com/sangregoriokimpo/Autonomous-Differential-Drive-Vehicle',
  },
  {
    title: 'Turtlesim Autonomous Navigation',
    video: '/assets/turtlesim.mp4', // 👈 Use video instead of image
    description: 'Designed and implemented a "Catch Them All" simulation utilizing ROS 2 Jazzy framework and Turtlesim packages. The simulation deploys an autonomous turtle object capable of dynamically navigating and capturing targets within a defined two-dimensional environment.',
    link: 'https://github.com/sangregoriokimpo/Turtlesim-Autonomous-Navigation',
  },
];


function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            {proj.video ? (
              <video src={proj.video} controls className="project-media" />
            ) : (
              <img src={proj.image} alt={proj.title} className="project-media" />
            )}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
  ))}
</div>

    </section>
  );
}

export default Projects;

