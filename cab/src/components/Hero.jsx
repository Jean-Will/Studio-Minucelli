import React from 'react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[600px] flex items-center bg-gradient-to-r from-gray-800 to-white text-white"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-4">
          Bem-vindo ao Salão de Cabeleireiro
        </h1>

        <p className="text-lg mb-6">
          Oferecemos os melhores serviços de beleza e cabelo.
        </p>

        <a
          href="https://wa.me/351?text=Olá,%20gostaria%20de%20agendar%20um%20horário."
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-gray-600 font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-50"
        >
          Agendar
        </a>
      </div>
    </section>
  )
}
