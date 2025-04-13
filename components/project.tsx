"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Project() {
  return (
    <div className="flex-col justify-center item-center font-mono">
      <div className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.project.map((item, key) => (
          <Card
            key={key}
            className="max-w-[400px] bg-violet-500/10 border-2 border-violet-500 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out backdrop-blur-sm"
            isHoverable
          >
            <CardHeader className="flex gap-3 pb-0">
              <div className="flex flex-col w-full">
                <p className="text-2xl font-mono items-center font-bold">
                  {item.title}
                </p>
              </div>
            </CardHeader>
            <Divider className="bg-violet-500 my-2" />
            <CardBody className="flex flex-col items-center justify-center gap-2 py-4">
              <Image
                className="hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-violet-500 rounded-lg shadow-lg"
                width={350}
                height={200}
                alt={item.title}
                src={item.img}
                onClick={() => window.open(item.more)}
                style={{ cursor: "pointer", objectFit: "cover" }}
              />
            </CardBody>
            <Divider className="bg-violet-500" />
            <CardFooter className="flex justify-center pt-2">
              <Link
                className={buttonStyles({
                  color: "primary",
                  size: "sm",
                  variant: "flat",
                  radius: "full",
                })}
                onClick={() => window.open(item.more)}
              >
                View Project
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
