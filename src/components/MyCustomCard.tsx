"use client";

import React from "react";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

type MyCustomCardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function MyCustomCard({ title, children }: MyCustomCardProps) {
  const top = title ? (
    <>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col items-center">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
    </>
  ) : null;

  return (
    <Card className="min-w-full">
      {top}
      <CardBody className="">{children}</CardBody>
    </Card>
  );
}
