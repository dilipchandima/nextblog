"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";

import Image from "next/image";
import Link from "next/link";
import { loadFull } from "tsparticles";

const navLinks = [
  { name: "HOME", link: "/" },
  { name: "ABOUT ME", link: "/about" },
  { name: "PROJECTS", link: "/projects" },
  { name: "BLOG", link: "/blog" },
];

export default function Home() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <main className="h-screen flex flex-col justify-center container mx-auto">
      <Particles
        className="absolute -z-20"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#111827",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#4b5563",
            },
            links: {
              color: "#374151",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <p className="text-xl text-purple-500">Hi! My name is</p>
      <h1 className="text-9xl font-bold purple-shadow">
        Dileepa
        <br />
        Chandima
      </h1>
      <p className="text-4xl text-purple-500 font-extralight mt-5">
        I build things for web and mobile
      </p>
    </main>
  );
}
