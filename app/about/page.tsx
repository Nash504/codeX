import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Link } from "@nextui-org/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMember = ({
  name,
  role,
  image,
  alt,
  bio,
  socialLinks,
}: TeamMemberProps) => (
  <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden font-mono rounded-md">
    <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
      <div className="relative flex justify-center w-full overflow-hidden rounded-full">
        <Image
          radius="full"
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          alt={alt}
        />
        {/* Optional: Image overlay on hover */}
        {/* <div className="absolute inset-0 bg-violet-500 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-full"></div> */}
      </div>
    </CardHeader>
    <CardBody className="text-center py-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-default-500 text-sm mb-2 font-semibold">{role}</p>
      {bio && (
        <p className="text-sm mt-2 text-default-600 leading-relaxed">{bio}</p>
      )}
      {/* Optional: Skills display */}
      {/* <div className="mt-3 flex justify-center gap-2">
        <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">React</span>
        <span className="bg-gray-100 text-gray-600 text-xs py-1 px-2 rounded-full">Node.js</span>
      </div> */}
    </CardBody>
    <Divider />
    <CardFooter className="gap-3 justify-center py-4">
      {socialLinks?.github && (
        <Tooltip content="GitHub">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            as={Link}
            href={socialLinks.github}
            target="_blank"
          >
            <FaGithub className="text-lg" />
          </Button>
        </Tooltip>
      )}
      {socialLinks?.linkedin && (
        <Tooltip content="LinkedIn">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            as={Link}
            href={socialLinks.linkedin}
            target="_blank"
          >
            <FaLinkedin className="text-lg" />
          </Button>
        </Tooltip>
      )}

      {/* Optional: View Profile Button */}
      {/* <Button color="primary" size="sm">View Profile</Button> */}
    </CardFooter>
  </Card>
);

const teamMembers = [
  {
    name: "Jonathan Correa ☀️",
    role: "Python - C developer",
    image: "john.jpg",
    alt: "Johnathan",
    bio: "Specializes in high-performance systems and algorithmic optimization",
    socialLinks: {
      github: "https://github.com/TheJonathanC",
      linkedin: "https://www.linkedin.com/in/jonathan-correa-a41093278/",
    },
  },
  {
    name: "Deion Dsouza",
    role: "Frontend Developer - React & NextJS",
    image: "deion.jpeg",
    alt: "Deion",
    bio: "UI/UX enthusiast with a passion for creating seamless user experiences",
    socialLinks: {
      github: "https://github.com/deiondz",
      linkedin: "https://linkedin.com/in/deion",
    },
  },
  {
    name: "Roldan Dsouza",
    role: "Backend Developer - Javascript & Python",
    image: "Roldan.jpg",
    alt: "Roldan",
    bio: "Database expert focused on scalable architecture and API development",
    socialLinks: {
      github: "https://github.com/shadow1951",
      linkedin: "https://linkedin.com/in/roldan",
    },
  },
  {
    name: "Srijan K",
    role: "Full Stack Developer - Javascript & Python",
    image: "srijan.jpg",
    alt: "Srijan",
    bio: "End-to-end developer with expertise in cloud infrastructure",
    socialLinks: {
      github: "https://github.com/srijankulal",
      linkedin: "https://www.linkedin.com/in/srijan-kulal/",
    },
  },
  {
    name: "Nash Fernandes",
    role: "Frontend Developer - React & NextJS",
    image: "srijan.jpg",
    alt: "nash",
    bio: "Building interactive and responsive web applications with a passion for clean code.",
    socialLinks: {
      github: "https://github.com/Nash504",
      linkedin: "https://www.linkedin.com/in/nash-fernandes-b55b0b2b8/",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 font-space-grotesk">
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className={title({ color: "violet" })}>Meet Our Team</h1>
          <p className="text-default-500 max-w-2xl mx-auto mt-4">
            We're a passionate group of developers committed to building
            innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      <Divider className="my-12" />

      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className={title()}>Our Vision</h2>
          <p className="max-w-4xl mx-auto text-lg mt-6">
            We strive to build more than just software - we create solutions
            that empower people and organizations to achieve their goals. Our
            mission is to leverage technology to make the world a better place,
            one project at a time.
          </p>
        </div>
      </section>
    </div>
  );
}
