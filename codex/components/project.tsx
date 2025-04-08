import React from "react";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
export default function Project() {
  return (
    <div className="flex-col justify-center item-center">
      <div className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.project.map((item, key) => (
          <Card
            key={key}
            className="max-w-[400px] border-2 border-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-2xl font-mono">{item.title}</p>
                <p className="text-md font-mono  text-default-500">
                  {item.url}
                </p>
              </div>
            </CardHeader>
            <Divider className="bg-white" />
            <CardBody>
              <p>{item.description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href={item.more}>
                Visit Documentation
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
