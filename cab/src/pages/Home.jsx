import React from 'react'
import ServicesSection from '../components/ServicesCarrousel'
import ContactSection from '../components/ContactSection'


export default function Home() {
  return (
    <div>
      {/* HERO / HOME */}
      <section
        id="home"
        className="min-h-[600] flex items-center bg-gradient-to-r from-gray-800 to-white-400 text-white">

        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Salão de Cabeleleiro</h1>
          <p className="text-lg">Oferecemos os melhores serviços de beleza e cabelo.</p>
          <a href="https://wa.me/351? text=Olá,%20gostaria%20agendar%20um%20horario."
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-gray-600 font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-50">Agendar Horário no WhatssApp
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg text-slate-700">O nosso salão é especializado em cortes modernos, coloração e tratamentos capilares, com foco em atendimento
            personalizado e resultados que valorizam a sua identidade.
          </p>
          <p className="text-lg text-slate-700">  Trabalhamos com uma equipa experiente e produtos de qualidade profissional, num espaço confortável e
            acolhedor, para que cada visita seja uma experiência completa de cuidado e bem-estar.
          </p>
        </div>
        <div className="h-56 md:h-72 rounded-xl bg-slate-200">

          {/* Aqui depois você pode trocar por uma imagem real do salão */}

        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />
      {/*CONTACT */}
      <ContactSection />


    </div>
  )
}
