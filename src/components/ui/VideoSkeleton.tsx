import React from 'react';
import { Card } from "@heroui/react";

export function VideoSkeleton() {
  return (
    <Card className="border-none w-48 h-64 md:h-96 md:w-72 xl:w-96">
      <div className="w-full h-full bg-gray-200 animate-pulse" />
      <div className="absolute bottom-1 left-1 right-1 h-12 bg-gray-300 animate-pulse rounded-lg" />
    </Card>
  );
}