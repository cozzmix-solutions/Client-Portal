"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Card, CardFooter, Button } from "@heroui/react";
import { Play, Pause } from "lucide-react";
import { useInView } from 'react-intersection-observer';

interface VideoCardProps {
  title: string;
  clientName: string;
  videoUrl: string;
  thumbnailUrl: string;
  transcript: string;
}

export default function VideoCard({ 
  title, 
  clientName, 
  videoUrl,
  thumbnailUrl,
  transcript 
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use Intersection Observer to load video only when in view
  const { ref: containerRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  // Pause video when it goes out of view
  useEffect(() => {
    if (!inView && isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView, isPlaying]);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        if (!isLoaded) {
          videoRef.current.load();
          setIsLoaded(true);
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying, isLoaded]);

  return (
    <Card 
      ref={containerRef}
      isFooterBlurred 
      className="border-none w-48 h-64 md:h-96 md:w-72 xl:w-96" 
      role="article"
      aria-label={`Video testimonial from ${clientName} at ${title}`}
    >
      <div className="relative w-full h-full">
        {/* Thumbnail image */}
        <img
          src={thumbnailUrl}
          alt={`${clientName} from ${title}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        
        {/* Video element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          preload="none"
          poster={thumbnailUrl}
          aria-label={`Testimonial video from ${clientName}`}
        >
          <source 
            src={videoUrl} 
            type="video/webm" 
          />
          <track
            kind="captions"
            src={`data:text/vtt;base64,${btoa(transcript)}`}
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <CardFooter className="justify-around before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-col items-start pl-1">
          <span className="text-xs md:text-sm font-bold text-white">{title}</span>
          <span className="text-[9px] md:text-xs font-light text-white">{clientName}</span>
        </div>
        
        <Button
          onPress={togglePlay}
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="md"
          variant="flat"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}