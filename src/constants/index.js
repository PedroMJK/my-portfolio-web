import project1 from "../assets/projects/project-1.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a motivated Full Stack Developer with a strong foundation in creating dynamic, responsive, and efficient web applications. Skilled in technologies such as TypeScript, React, Vue.js, Next.js, Angular, Node.js, SQL and MongoDB, I thrive on building seamless user interfaces and robust back-end systems. With experience in API integration, software testing, and agile methodologies, I aim to deliver high-quality solutions tailored to user needs. Passionate about continuous learning, I am always exploring new technologies to stay at the forefront of innovation and enhance my skills`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "Fenext",
    description: `I was responsible for designing and implementing dynamic, fully responsive user interfaces, seamlessly integrating API consumption to enhance functionality`,
    technologies: ["Typescript", "React.js", "Next.js", "MongoDB", "TailwindCSS"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A complete e-commerce platform featuring product listings, shopping cart functionality, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB" , "Express.js", "HTML", "CSS"],
    githubLink: "https://github.com/PedroMJK/Full_Stack_Ecommerce-react-nodejs",
    websiteLink: "https://task-management-app.com", 
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio site displaying projects, expertise, and contact details.",
    technologies: ["React", "Nodejs", "Tailwind"],
    githubLink: "https://github.com/PedroMJK/my-portfolio-web",
    websiteLink: "https://pedro-monteiro.vercel.app/#",
  },
  
  {
    title: "Login & Registration System",
    image: project2,
    description:
      "A responsive web app for user login and registration, built with JavaScript, HTML, and CSS, featuring client-side validation.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Threads App",
    image: project4,
    description:
      "Project in Progress.",
    technologies: ["Nextjs", "React", "TypeScript", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Downtown, Catende, PE ",
  phoneNo: "+55 11 9 5962-9362",
  email: "pedromonteiro.jk@gmail.com",
};
