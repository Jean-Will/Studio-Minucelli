export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-slate-50">  {/* py-6 → py-16 pra respirar */}
      <div className="max-w-5xl mx-auto px-4">  {/* 5x1 → 5xl */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Contactos 
        </h2>
        <p className="text-sm md:text-base text-slate-700 mb-6">
          Agende seu horario. 
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp */}
          <div className="rounded-xl bg-white border border-slate-200 p-4">
            <h3 className="font-semibold mb-2 text-sm md:text-base">WhatsApp</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4">
              Fale diretamente com a nossa equipa.
            </p>
            <a 
              href="https://wa.me/+351912345678?text=Ola,%20gostaria%20de%20agendar%20um%20horario."
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-emerald-500 px-5 py-2 text-xs md:text-sm font-semibold text-white hover:bg-emerald-600"
            >
            WhatsApp
            </a>
          </div>

          {/* Instagram */}
          <div className="rounded-xl bg-white border border-slate-200 p-4">
            <h3 className="font-semibold mb-2 text-sm md:text-base">Instagram</h3>
            <p className="text-xs md:text-sm text-slate-600 mb-4">Acompanhe nossas novidades !</p>
            <a 
              href="https://www.instagram.com/henriqueminucelli?igsh=anpkMDMwbjh0cWM5"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-slate-900 px-5 py-2 text-xs md:text-sm font-semibold text-white hover:bg-slate-800"
            >
              Instagram
            </a>
          </div>

          {/* Contactos */}
          <div className="rounded-xl bg-white border border-slate-200 p-4">
            <h3 className="font-semibold mb-2 text-sm md:text-base">Contactos</h3>
            <p className="text-xs md:text-sm text-slate-600">Horario de funcionamento por marcações</p>
            <p className="text-xs md:text-sm text-slate-600">Telefone: +351 000 000 000</p>
            <p className="text-xs md:text-sm text-slate-600">Email: seuEmail@.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
