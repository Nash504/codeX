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
            className="max-w-[400px] rounded-lg bg-gradient-to-br from-black via-gray-900 to-violet-950/70 border-2 border-violet-900/30 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out backdrop-blur-sm"
            isHoverable
          >
            <CardBody className="p-0 overflow-hidden">
              <Image
                className="w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-none"
                alt={item.title}
                src={item.img}
                onClick={() => (window.location.href = item.more)}
                style={{
                  cursor: "pointer",
                  height: "220px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </CardBody>
            <Divider className="bg-violet-500" />
            <CardFooter className="flex justify-center pt-2">
              <div className="flex flex-row w-full justify-between">
                <p className="text-lg font-mono items-center font-bold">
                  {item.title}
                </p>
                {/* 
                <Link
                  className={buttonStyles({
                    color: "secondary",
                    size: "sm",
                    variant: "flat",
                    radius: "full",
                  })}
                  href={item.more}
                >
                  View Project
                </Link> */}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
