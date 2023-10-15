const projects = [
  {
    title: "Farm Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://farm-logistics-puce.vercel.app/",
    imgSrc: "/work1.png",
  },
  {
    title: "Farm Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://pizzaa-website.netlify.app/",
    imgSrc: "/work2.png",
  },
  {
    title: "Farm Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://blockchain-krypt-react-app.netlify.app/",
    imgSrc: "/work3.png",
  },
  {
    title: "Farm Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://calculate-it.netlify.app",
    imgSrc: "/work4.png",
  },
  {
    title: "Farm Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://react-note-taking-app.netlify.app",
    imgSrc: "/work5.png",
  },
  {
    title: "Farm Logistics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://movie-box-tymr.vercel.app/",
    imgSrc: "/work6.PNG",
  },
];

const Projects = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="work-container bd-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-item">
            <a target="_blank" href={project.link} className="work-img">
              <img src={project.imgSrc} alt="" />
            </a>
            <div className="work-info">
              <h3 className="work-title">{project.title}</h3>
              <p className="work-description">{project.description}</p>
              <a target="_blank" href={project.link} className="work-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
