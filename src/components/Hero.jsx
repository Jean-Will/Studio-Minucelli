import React from "react";
import lulu from '../imgs/lulu.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden"
    >
      {/* 🔥 blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Realce a sua beleza com estilo
        </h1>

        <p className="text-lg mb-6 text-gray-300">
          Cortes modernos e atendimento profissional.
        </p>

        <a
          href="https://wa.me/351?text=Olá,%20gostaria%20de%20agendar%20um%20horário."
          target="_blank"
          rel="noreferrer"
          className="mb-10 inline-block bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full font-semibold transition hover:scale-105"
        >
          Agendar
        </a>

        {/* 🎥 VIDEO PREVIEW */}
        <div className="w-full max-w-md">
          <p className="mb-3 text-sm text-gray-400">
            Veja nosso trabalho em ação
          </p>

          <a
            href="https://www.instagram.com/reel/DOHPzd-jI4o/?igsh=MTh5cm44emc3cGIzZw=="
            target="_blank"
            rel="noreferrer"
            className="relative block group"
          >
            <img
              src={lulu}
              alt="video preview"
              className="rounded-xl shadow-lg"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-xl">
              <span className="text-3xl">▶</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}