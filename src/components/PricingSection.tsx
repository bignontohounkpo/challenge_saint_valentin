import { useState } from "react";
import OrderModal from "@/components/OrderModal";
import { Heart, Gift, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
    const [openModal, setOpenModal] = useState(false);
  
  return (
    <>
    <section  id="pricing" className="valentine-section relative overflow-hidden bg-gradient" style={{ background: "var(--gradient-romantic)" }}>
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

      <div className="valentine-container relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-block rounded-lg bg-white/20 px-6 py-3 backdrop-blur-sm">
          <p className="font-body text-sm font-semibold text-white">
            ⏰ OFFRE FLASH LIMITED — 27% de réduction
          </p>
        </div>

        <h2 className="mb-2 font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          49€
        </h2>
        <p className="mb-1 font-display text-lg text-white/80">
          <span className="line-through">69€</span>
        </p>
        <p className="mb-8 font-display text-xl text-white/90 font-semibold">
          L'amour mérite-t-il moins ?
        </p>

        <div className="mx-auto mb-10 space-y-3 max-w-2xl">
          <p className="font-body text-base text-white/90 leading-relaxed">
            Pour le prix d'un dîner romantique, offrez un compagnon qui durera toute la vie.
          </p>
          <p className="font-body text-sm text-white/70">
             Prix  TTC — Aucun frais caché
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-2xl gap-3">
          {[
            { icon: Gift, text: ' Carte personnalisée "Mon câlin pour la vie"' },
            { icon: Truck, text: " Livraison express gratuite en 24h" },
            { icon: Star, text: " Emballage cadeau premium offert" },
            { icon: Heart, text: " Garantie 30 jours satisfait ou remboursé" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-lg bg-white/15 p-4 backdrop-blur-sm border border-white/10"
            >
              <item.icon className="h-5 w-5 text-white shrink-0" />
              <p className="font-body text-sm text-white text-left">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mb-6 font-body text-xs text-white/60 font-semibold">
           98.2% de satisfaction | 2,847 amoureux comblés
        </p>

        <Button
          size="lg"
          className="rounded-full bg-white px-5 sm:px-8 md:px-14 py-5 font-display text-sm md:text-base lg:text-lg font-bold text-valentine-rose shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/90"
          onClick={() => setOpenModal(true)}
        >
          <Heart className="mr-2 h-5 w-5" fill="currentColor" />
          OFFRIR MAINTENANT
        </Button>
        <p className="mt-4 font-body text-xs text-white/70">
           Processus sécurisé — Livraison avant le 14 février
        </p>
      </div>
    </section>
    <OrderModal open={openModal} onClose={() => setOpenModal(false)} />
  </>
  );
};

export default PricingSection;
