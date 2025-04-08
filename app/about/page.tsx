import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
export default function AboutPage() {
  return (
    <div className="w-full ">
      <h1 className={title()}>Our Team</h1>

      <div className="flex flex-col items-center justify-center w-full gap-5 py-12 md:flex-row">
        <div className="flex flex-col gap-3 ">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="john.jpg"
            alt="Johnathan"
          />
          <div className="w-full ">
            <Card>
              <CardHeader>
                <h1 className="text-xl font-semibold ">Jonathan Correa ☀️</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Python - C developer</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="deion.jpeg"
            alt="Deion"
          />
          <div>
            <Card>
              <CardHeader>
                <h1 className="text-xl font-semibold ">Deion Dsouza</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Frontend Developer - React & NextJS</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="Roldan.jpg"
            alt="Deion"
          />
          <div>
            <Card>
              <CardHeader>
                <h1 className="text-xl font-semibold">Roldan Dsouza</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Backend Developer - Javascript & Python</p>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <Image
            width={300}
            radius="lg"
            className="  w-[300px] h-[300px] object-cover"
            src="Roldan.jpg"
            alt="Deion"
          />
          <div>
            <Card>
              <CardHeader>
                <h1 className="text-xl font-semibold">Srijan K</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Full Stack Developer - Javascript & Python</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <h1 className={title()}>Vision Statement</h1>
        <p className="max-w-4xl p-2 py-6 mx-auto text-lg font-semibold text-center ">
          {" "}
          We just want to build more cool stuff and make the world a better
          place.
        </p>
      </div>
    </div>
  );
}
