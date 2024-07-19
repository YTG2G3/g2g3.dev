import Project from './project';

const projects: {
  name: string;
  date: string;
  description: string;
  image: string;
  url?: string;
  code?: string;
}[] = [
  {
    name: 'MyExtraDuty',
    date: '2024',
    description:
      'This innovative schoolwide event management website is revolutionizing how educational institutions organize and coordinate activities. Initially developed for and successfully implemented at Centennial High School, the platform is now poised to expand its services to other schools throughout Riverside County, California. Featuring cutting-edge serverless API management utilizing Next.JS, the project is in the process of registering as an official vendor for the Corona-Norco Unified School District. Proudly student-developed, it showcases a user-friendly interface for easy event creation and registration, a comprehensive administrative dashboard, mobile responsiveness, and integration capabilities with existing school systems.',
    image: '/myextraduty.png',
    url: 'https://myextraduty.com',
  },
  {
    name: 'Corona Lions Club Website',
    date: '2024',
    description:
      "The Corona Lions Club Website project represents a significant collaboration between a local non-profit organization and aspiring young developers. Utilizing cutting-edge web technologies, including Next.JS and deployed on Vercel, this website serves as a digital hub for the Corona Lions Club's activities and outreach efforts. The integration of Stripe for secure online donations demonstrates a commitment to modernizing the organization's fundraising capabilities. Notably, this project was entrusted to the Cen10 Coding Club, providing students with invaluable real-world experience in the software engineering industry.",
    image: '/coronalions.png',
    url: 'https://coronalions.org',
  },
  {
    name: 'Minefarm: Kingdoms',
    date: '2024',
    description:
      "Minefarm: Kingdoms represents an ambitious Minecraft server project that showcases technical prowess and creative game design. Developed and maintained for a week, the server attracted over 20 cumulative players, demonstrating its appeal and engagement. The project's core gameplay was meticulously crafted using Minecraft's command block system, allowing for custom mechanics and unique experiences. A standout feature of Minefarm: Kingdoms is its innovative integration of the in-game environment with an external website. This was achieved through the creation of a custom public npm package named ScriptBukkit, which leverages Express.JS to facilitate seamless communication between the Minecraft server (running on the Java Development Kit) and the web interface.",
    image: '/minefarm.png',
    code: 'https://github.com/YTG2G3/minefarm-kingdoms-website',
  },
  {
    name: 'Cen10 Huskies',
    date: '2023',
    description:
      "Cen10 Huskies is a purpose-built mobile application designed to enhance communication within the Centennial High School community. Developed using React Native, this app serves as a digital nexus connecting students, parents, and campus staff, streamlining information sharing and fostering a more connected school environment. The project was a collaborative effort, bringing together student developers from Centennial High School who pooled their skills and insights to create a solution tailored to their school's specific needs. The app's effectiveness and innovation were recognized beyond the school grounds when it was submitted to the FBLA Mobile App Development competition in 2023. Its success in the competition was evident as it progressed to the prestigious National Leadership Conference, showcasing the students' technical prowess and their ability to develop practical, community-focused solutions.",
    image: '/cen10huskies.png',
    url: 'https://vimeo.com/808994768',
    code: 'https://github.com/YTG2G3/cen10-huskies',
  },
  {
    name: 'Box Spots',
    date: '2022',
    description:
      "Box Spots is an innovative digital platform developed for the Congressional App Challenge 2022, designed to replace traditional paper guidance pamphlets in public venues like museums and amusement parks. Created collaboratively by Coding Club teammates, the project consists of two components: a mobile app for visitors and a website for facility management. The system allows venues to create virtual 'spots' through the website, each associated with a unique QR code that can be displayed at physical locations. Visitors use the mobile app to scan these codes, instantly locating themselves on an interactive map and accessing detailed information about exhibits or attractions. This eco-friendly solution not only promotes sustainability by reducing paper waste but also enhances the visitor experience through interactive, easily updateable digital content, effectively bridging the gap between physical spaces and digital information.",
    image: '/boxspots.png',
    url: 'https://vimeo.com/766026086',
    code: 'https://github.com/boxspots',
  },
  {
    name: 'Map of the Modern World Quiz',
    date: '2022',
    description:
      'Map of the Modern World Quiz is an innovative geographical quiz platform developed through a collaborative effort between high school students and their counterparts at Georgetown University. Submitted to MesoHacks 2022, this educational tool leverages Next.JS to create an interactive and engaging user experience. The platform goes beyond traditional quiz formats by incorporating competitive features designed to boost student engagement and motivation. These elements likely include leaderboards, timed challenges, or multiplayer modes, encouraging users to improve their geographical knowledge while enjoying a game-like atmosphere.',
    image: '/mapquiz.png',
    url: 'https://motmwquiz.vercel.app',
    code: 'https://github.com/MMWQ/motmwquiz',
  },
  {
    name: 'Imposter Bot',
    date: '2022',
    description:
      "Imposter Bot is an innovative Discord-based minigame that brings the popular Among Us gameplay mechanics to the messaging platform. Submitted to Citrus Hack 2022, this project demonstrates a creative fusion of gaming and social media interaction. The bot utilizes a robust tech stack, combining Firebase for backend services and data management, Discord.JS for seamless integration with Discord's API, and React.JS for any associated web interfaces or dashboards. This combination allows for real-time gameplay, user authentication, and potentially persistent game states across sessions. Players likely engage in rounds of deception and detective work directly within Discord channels, mirroring the core elements of Among Us.",
    image: '/imposterbot.png',
    url: 'https://youtu.be/HH5ND2O6EJ0',
    code: 'https://github.com/YTG2G3/imposter-bot',
  },
];

export default function Portfolio() {
  return (
    <main className="flex flex-col justify-center px-10 py-5 space-y-3">
      {projects.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </main>
  );
}
