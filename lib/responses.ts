export const precomputedResponses: Record<string, string> = {
  'latest project': `I recently worked on a full-stack web application using Next.js and TypeScript. The project involved:

- Building a responsive UI with Tailwind CSS
- Implementing real-time features with WebSockets
- Setting up authentication and authorization
- Integrating with third-party APIs
- Deploying to production with CI/CD pipelines

The most challenging part was optimizing performance for large datasets, which I solved by implementing virtual scrolling and efficient caching strategies.`,

  'technical skills': `My strongest technical skills include:

**Frontend:**
- React, Next.js, TypeScript
- Tailwind CSS, styled-components
- State management (Redux, Zustand)
- Testing (Jest, React Testing Library)

**Backend:**
- Node.js, Express
- PostgreSQL, MongoDB
- RESTful APIs, GraphQL
- Authentication & Authorization

**DevOps & Tools:**
- Git, GitHub Actions
- Docker, Kubernetes
- AWS, Vercel
- CI/CD pipelines

I'm constantly learning and staying up-to-date with the latest web technologies.`,

  'resume': `**Professional Summary:**

Experienced full-stack developer with 5+ years of building scalable web applications. Proficient in modern JavaScript frameworks, cloud infrastructure, and agile development practices.

**Experience:**
- Senior Software Engineer at Tech Company (2021-Present)
- Full Stack Developer at Startup Inc. (2019-2021)
- Junior Developer at Digital Agency (2018-2019)

**Education:**
- B.S. in Computer Science, University Name (2018)

**Key Achievements:**
- Led development of platform serving 100K+ users
- Reduced page load times by 60%
- Mentored 5+ junior developers`,

  'passionate': `I'm passionate about software engineering because it combines creativity with problem-solving. I love:

- **Building things that matter:** Creating products that solve real problems and improve people's lives
- **Continuous learning:** Technology evolves rapidly, and there's always something new to discover
- **Collaboration:** Working with talented teams to build something greater than the sum of its parts
- **Impact:** Seeing my code run in production and knowing it's helping users every day

The satisfaction of turning an idea into a working product, and the constant intellectual challenge, keeps me motivated and engaged in this field.`,

  'experience': `I have extensive experience in full-stack web development, including:

- 5+ years of professional software development
- Led multiple projects from conception to production
- Experience with modern frontend frameworks and backend technologies
- Strong understanding of software architecture and design patterns
- Agile/Scrum methodology expertise
- Code review and mentoring experience

I've worked on projects ranging from e-commerce platforms to SaaS applications, consistently delivering high-quality, maintainable code.`,

  'contact': `I'd love to connect! Here are the best ways to reach me:

- **Email:** Check the sidebar for my email address
- **LinkedIn:** Connect with me on LinkedIn (link in sidebar)
- **GitHub:** View my projects and contributions on GitHub
- **Resume:** Download my full resume from the sidebar

Feel free to reach out if you'd like to discuss opportunities, collaborations, or just chat about technology!`,

  'default': `Thank you for your question! While I have information about various topics related to my experience and skills, I'd be happy to provide more specific information if you could clarify your question.

You might want to ask about:
- My latest projects
- Technical skills and expertise
- Professional experience
- Why I'm passionate about software engineering
- How to get in touch

Feel free to ask anything!`,
};

export function getResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes('project') || message.includes('work on')) {
    return precomputedResponses['latest project'];
  }

  if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
    return precomputedResponses['technical skills'];
  }

  if (message.includes('resume') || message.includes('cv') || message.includes('background')) {
    return precomputedResponses['resume'];
  }

  if (message.includes('passion') || message.includes('why') || message.includes('love')) {
    return precomputedResponses['passionate'];
  }

  if (message.includes('experience') || message.includes('worked')) {
    return precomputedResponses['experience'];
  }

  if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
    return precomputedResponses['contact'];
  }

  return precomputedResponses['default'];
}
