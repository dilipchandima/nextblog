"use client";

import Particle from "@/components/ui/Particle";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center container mx-auto">
      <Particle />
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
