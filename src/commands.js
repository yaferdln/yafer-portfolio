const jokes = [
  "Why do JavaScript developers wear glasses? Because they don’t C#.",
  "I told my computer I needed a break, and now it won’t stop sending me Kit-Kat ads.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "What’s a programmer’s favorite hangout place? The Foo Bar.",
  "Why was the function feeling sad? It didn’t get called.",
  "How do you comfort a JavaScript bug? You console it.",
  "I changed my password to 'incorrect'. So whenever I forget, it says, 'Your password is incorrect.'",
  "Why don’t bachelors like Git? Because they are afraid to commit.",
  "What’s the object-oriented way to become wealthy? Inheritance.",
  "Why did the coder bring a ladder to work? Because they were working on a high-level language.",
];

const quotes = [
  `"Talk is cheap. Show me the code." – Linus Torvalds`,
  `"Programs must be written for people to read." – Harold Abelson`,
  `"First, solve the problem. Then, write the code." – John Johnson`,
  `"Code is like humor. When you have to explain it, it’s bad." – Cory House`,
  `"Simplicity is the soul of efficiency." – Austin Freeman`,
  `"Make it work, make it right, make it fast." – Kent Beck`,
  `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler`,
  `"Experience is the name everyone gives to their mistakes." – Oscar Wilde`,
  `"In order to be irreplaceable, one must always be different." – Coco Chanel (but applies to devs too)`,
  `"You miss 100% of the commits you don't push." – Wayne Gretzky via GitHub`,
];
function createRandomQueue(items) {
  let queue = [];

  function getNext() {
    if (queue.length === 0) {
      queue = [...items].sort(() => Math.random() - 0.5);
    }
    return queue.pop();
  }

  return getNext;
}
const getRandomJoke = createRandomQueue(jokes);
const getRandomQuote = createRandomQueue(quotes);

const commands = {
  help: `Available commands:
  about, careers, skills, projects, contact, services, certificates, resume, clear, quote, joke,`,

  about: `
--About Me--

Hi, I’m Yafer — a Web Developer with a background in IT Support and a strong entrepreneurial mindset.

I began my career as an IT Support Assistant at the Manila International Airport Authority, where I developed a solid foundation in technical troubleshooting and problem-solving. This experience sharpened my ability to think critically, work under pressure, and deliver effective solutions.

My involvement in business and cryptocurrency has helped me become more adaptive, resourceful, and user-centered — qualities that now drive my approach to software development.

I currently focus on frontend development, building responsive and modern interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS. To become a more versatile developer, I’m expanding my skills in backend technologies like Node.js, Express.js, and beyond — allowing me to build complete and scalable web applications.

I’m driven by a desire to create meaningful digital experiences and continuously grow through hands-on learning and collaboration. Whether working independently or in a team, I bring focus, discipline, and a strong commitment to delivering quality results.
`,

  careers: `
--Work Experience--

Position: IT Support Assistant
Company: LSERV CORPORATION
Duration: Dec 2018 – 2021

- Provided comprehensive technical support to end-users by diagnosing and resolving hardware and software issues.
- Set up workstations, managed system configurations, and ensured smooth operation of internal tools and IT infrastructure.
- Collaborated with cross-functional teams to optimize IT workflows and contributed to documentation and knowledge base resources.
`,

  skills: `
--My Tech Stack--

Frontend:
- HTML, CSS, JavaScript
- React.js, Tailwind CSS
- DaisyUI, Bootstrap
- React Router, TanStack Table, DataTables

Backend:
- Node.js, Express.js, PHP

Database:
- MySQL, MySQL2

Libraries & Utilities:
- JWT, Axios, Fetch API

Tools & Platforms:
- Git, Vite, Postman
- VS Code, MySQL Workbench, XAMPP

Learning:
- Next.js, Prisma, TypeScript, MongoDB
`,

  projects: `
--My Projects--

1. <a href="https://yaferdev.vercel.app/" target="_blank" class="underline text-green-400 hover:text-green-300"">Yafer Portfolio V1</a>
2. <a href="https://yaferdeleon.netlify.app/" target="_blank" class="underline text-green-400 hover:text-green-300"">Yafer Portfolio V2</a>
3. <a href="https://thebeautyspot.netlify.app/" target="_blank" class="underline text-green-400 hover:text-green-300"">The Beauty Spot Salon</a>
`,

  services: `
--Services I Offer--

- Web Development: Building responsive and modern websites or custom web applications tailored to business needs using clean code and best practices.
- UI/UX Design: Designing user-friendly and visually appealing interfaces.
- REST API Integration: Connecting frontend interfaces with backend services efficiently.
- Full-stack App Builds: Developing complete web apps using both frontend and backend technologies.
- SEO Optimization: Improving website visibility and ranking using SEO best practices.
- Website Maintenance: Keeping websites secure, updated, and running smoothly.
`,
  certificates: `
--Certifications--

1. <a href="/freecodecamp.org_certification_yaferdln_responsive-web-design.pdf" target="_blank" class="underline text-green-400 hover:text-green-300">Responsive Web Design - Freecodecamp</a>
  `,
  contact: `
--Let's connect--

Phone: <a href="tel:+639128023499" class="underline text-green-400 hover:text-green-300">+63 912 802 3499</a>
Email: <a href="mailto:deleonyafer@gmail.com" class="underline text-green-400 hover:text-green-300">deleonyafer@gmail.com</a>  
GitHub: <a href="https://github.com/yaferdln" target="_blank" class="underline text-green-400 hover:text-green-300">github.com/yaferdln</a>  
LinkedIn: I'm currently recovering access to my LinkedIn. You can still reach me through email or phone in the meantime.

Social Media:
- Facebook: <a href="https://www.facebook.com/yaferdeleon" target="_blank" class="underline text-green-400 hover:text-green-300">facebook.com/yaferdeleon</a>

(Click or copy the links to visit or contact)
`,

  resume: `
--Download my resume--

<a href="/resume.pdf" target="_blank" class="underline text-green-400 hover:text-green-300">Click here to view or download my resume</a>
`,
  joke: () => `😂 Joke: ${getRandomJoke()}`,
  quote: () => `💬 Quote: ${getRandomQuote()}`,
};

export default commands;
