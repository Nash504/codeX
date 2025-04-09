import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function AboutPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 ">
      <h1 className={title({ color: "violet" })}>Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-12">
        {/* Team Member 1 */}
        <div className="flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="w-full h-[300px] object-cover"
            src="john.jpg"
            alt="Johnathan"
          />
          <Card className="w-full">
            <CardHeader>
              <h1 className="text-xl font-semibold">Jonathan Correa ☀️</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="p-6 font-semibold font-mono">
                Python - C developer
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="w-full h-[300px] object-cover"
            src="deion.jpeg"
            alt="Deion"
          />
          <Card className="w-full">
            <CardHeader>
              <h1 className="text-xl font-semibold">Deion Dsouza</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="p-3 font-semibold font-mono">
                Frontend Developer - React & NextJS
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="w-full h-[300px] object-cover"
            src="Roldan.jpg"
            alt="Roldan"
          />
          <Card className="w-full">
            <CardHeader>
              <h1 className="text-xl font-semibold">Roldan Dsouza</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="p-3 font-semibold font-mono">
                Backend Developer - Javascript & Python
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col gap-3">
          <Image
            width={300}
            radius="lg"
            className="w-full h-[300px] object-cover"
            src="srijan.png"
            alt="Srijan"
          />
          <Card className="w-full">
            <CardHeader>
              <h1 className="text-xl font-semibold">Srijan K</h1>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="p-3 font-semibold font-mono">
                Full Stack Developer - Javascript & Python
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className={title()}>Vision Statement</h1>
        <p className="max-w-4xl mx-auto text-lg font-semibold mt-6">
          We just want to build more cool stuff and make the world a better
          place.
        </p>
      </div>
    </div>
  );
}
