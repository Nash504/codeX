"use client";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { ExternalLink, ArrowRight, Info } from "lucide-react";

export default function Project() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center font-mono">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.project.map((item, key) => (
          <Card
            key={key}
            className="max-w-md border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredCard(key)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardHeader className="flex justify-between items-center bg-gray-100 py-4">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">{item.title}</p>
                {item.subtitle && (
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                )}
              </div>
              {item.status && (
                <Chip
                  color={
                    item.status === "Completed"
                      ? "success"
                      : item.status === "In Progress"
                      ? "warning"
                      : "primary"
                  }
                  variant="flat"
                  size="sm"
                >
                  {item.status}
                </Chip>
              )}
            </CardHeader>
            <Divider className="bg-black" />
            <CardBody className="flex flex-col items-center justify-center gap-4 p-4">
              <div className="relative w-full overflow-hidden rounded-md">
                <Image
                  className="w-full object-cover transition-all duration-500 ease-in-out"
                  style={{
                    transform: hoveredCard === key ? "scale(1.05)" : "scale(1)",
                    height: "200px",
                  }}
                  alt={item.title}
                  src={item.img}
                />
                {hoveredCard === key && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
                    <Button
                      color="primary"
                      variant="solid"
                      endContent={<ExternalLink size={16} />}
                      onClick={() => window.open(item.more)}
                    >
                      View Project
                    </Button>
                  </div>
                )}
              </div>

              {item.description && (
                <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              )}

              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, i) => (
                    <Chip key={i} size="sm" variant="flat" color="default">
                      {tag}
                    </Chip>
                  ))}
                </div>
              )}
            </CardBody>
            <Divider className="bg-gray-200" />
            <CardFooter className="flex justify-between items-center p-4">
              <div className="text-xs text-gray-500">
                {item.date && `Created: ${item.date}`}
              </div>
              <Link
                href={item.more}
                color="primary"
                underline="hover"
                isExternal
                showAnchorIcon
                className="text-sm font-medium"
              >
                Learn more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
