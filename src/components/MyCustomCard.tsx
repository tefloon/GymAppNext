"use client";

import React from "react";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

type MyCustomCardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function MyCustomCard({ title, children }: MyCustomCardProps) {
  const top = title ? (
    <>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
    </>
  ) : null;

  return (
    <Card className="min-w-full">
      {top}
      <CardBody className="flex flex-row items-start justify-items-start ">
        {children}
      </CardBody>
    </Card>
  );
}
