import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import corteFemin from "../imgs/minucelli_.jpg";

const SERVICES = [
  {
    id: 1,
    title: "Corte feminino",
    description: "Cortes modernos e clássicos, adaptados ao seu estilo.",
    image: corteFemin,
  },
  {
    id: 2,
    title: "Coloração e luzes",
    description: "Técnicas de coloração, luzes e mechas.",
  },
  {
    id: 3,
    title: "Escova e finalização",
    description: "Escova, styling e finalização para ocasiões especiais.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Serviços</h2>
        <p className="text-sm md:text-base text-slate-700 mb-8">
          Conheça alguns dos principais serviços que oferecemos no salão.
        </p>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {SERVICES.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="h-72 rounded-xl bg-slate-100 p-4 flex flex-col">
                <div className="h-32 rounded-lg overflow-hidden mb-3 flex-shrink-0 bg-slate-200">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <h3 className="font-semibold mb-1 text-sm md:text-base flex-shrink-0">
                  {service.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 flex-grow overflow-hidden">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ServicesSection;
