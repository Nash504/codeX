"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
export default function Project() {
  return (
    <div className="flex-col justify-center item-center font-mono">
      <div className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.project.map((item, key) => (
          <Card
            key={key}
            className="max-w-[400px] bg-violet-500/10 border-4 border-violet-500 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <CardHeader className="flex gap-3">
              <div className="flex flex-col ">
                <p className="text-2xl font-mono items-center">{item.title}</p>
              </div>
            </CardHeader>
            <Divider className="bg-violet-500" />
            <CardBody className="flex flex-col items-center justify-center gap-2 h-300">
              <Image
                className="hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-violet-500"
                width={350}
                height={200}
                alt=""
                src={item.img}
                onClick={() => window.open(item.more)}
                style={{ cursor: "pointer", objectFit: "cover" }}
              />
            </CardBody>
            <Divider />
          </Card>
        ))}
      </div>
    </div>
  );
}
