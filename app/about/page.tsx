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
  cardColor?: string;
}

const TeamMember = ({
  name,
  role,
  image,
  alt,
  bio,
  socialLinks,
  cardColor = "bg-gradient-to-br from-black via-gray-900 to-violet-950/70 border-2 border-violet-900/30",
}: TeamMemberProps) => (
  <Card
    className={` hover:shadow-xl transition-all duration-300 overflow-hidden font-mono ${cardColor}`}
  >
    <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
      <div className="flex justify-center w-full">
        <Image
          radius="full"
          className="w-fill h-52 object-fill "
          src={image}
          alt={alt}
        />
      </div>
    </CardHeader>
    <CardBody className="text-center py-4">
      <Divider className="bg-violet-500 mb-2" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-default-500 text-sm mb-2 font-semibold">{role}</p>

      {bio && <p className="text-sm mt-2 text-default-600">{bio}</p>}
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
      {socialLinks?.twitter && (
        <Tooltip content="Twitter">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            as={Link}
            href={socialLinks.twitter}
            target="_blank"
          >
            <FaTwitter className="text-lg" />
          </Button>
        </Tooltip>
      )}
    </CardFooter>
  </Card>
);

const teamMembers = [
  {
    name: "Jonathan Correa ☀️",
    role: "Python - C developer",
    image: "john.jpg",
    alt: "Johnathan",
    bio: "Expert in crafting efficient algorithms and optimizing system performance.",
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
    bio: "Passionate about designing intuitive interfaces and enhancing user engagement.",
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
    bio: "Specialist in building robust APIs and managing complex database systems.",
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
    bio: "Combines full-stack expertise with a deep understanding of cloud technologies.",
    socialLinks: {
      github: "https://github.com/srijankulal",
      linkedin: "https://www.linkedin.com/in/srijan-kulal/",
    },
  },
  {
    name: "Nash Fernandes",
    role: "Frontend Developer - React & NextJS",
    image: "nash.jpg",
    alt: "nash",
    bio: "Focused on creating dynamic and visually appealing web applications.",
    socialLinks: {
      github: "https://github.com/Nash504",
      linkedin: "https://www.linkedin.com/in/nash-fernandes-b55b0b2b8/",
    },
  },
  {
    name: "Sion Lobo",
    role: "Frontend Developer - React & NextJS",
    image: "sion.jpg",
    alt: "sion",
    bio: "Dedicated to delivering seamless and responsive user experiences.",
    socialLinks: {
      github: "http://github.com/sionnn9",
    },
  },
  {
    name: "Vinish Machado",
    role: "Frontend Developer - React & NextJS",
    image: "vinish.jpg",
    alt: "nash",
    bio: "Enthusiastic about writing clean, maintainable, and efficient code.",
    socialLinks: {
      github: "https://github.com/VinshMachado",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 -py-12 font-space-grotesk">
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1
            className={`${title()} text-5xl md:text-6xl lg:text-7xl font-thin  text-white`}
          >
            Meet Our Team
          </h1>
          <p className="text-default-500 max-w-2xl mx-auto mt-4">
            We're a passionate group of developers committed to building
            innovative solutions that make a difference.
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
