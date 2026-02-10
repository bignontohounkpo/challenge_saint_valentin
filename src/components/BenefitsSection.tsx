import { useState } from "react";
import { HeartHandshake, Clock, Tv, Infinity as InfinityIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "@/components/OrderModal";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Émotion pure",
    desc: "Chaque fois qu’elle la serre contre elle, elle ressent ton amour comme si tu étais juste là. C’est ce genre de cadeau qui réchauffe le cœur, rassure, et lui rappelle qu’elle compte énormément pour toi, même quand tu es loin.",
  },
  {
    icon: Clock,
    title: "Souvenir gravé",
    desc: "Ce n’est pas une simple peluche… c’est un symbole. Un souvenir vivant qui lui rappellera votre histoire, vos moments forts, vos promesses et vos rires. Même après le 14 février, elle la gardera près d’elle comme une preuve que ton amour est réel.",
  },
  {
    icon: Tv,
    title: "Magie quotidienne",
    desc: "Parfaite pour les soirées Netflix, les moments de repos, les voyages ou les nuits où elle a juste besoin de douceur. Elle devient rapidement son petit refuge émotionnel : une présence réconfortante qui rend chaque journée plus tendre.",
  },
  {
    icon: InfinityIcon,
    title: "Valeur infinie",
    desc: "C’est le genre de cadeau qu’on n’oublie jamais. Parce qu’il dit clairement : « Je pense à toi », « Je veux te voir sourire », « Tu es précieuse ». Une attention simple… mais qui touche profondément et crée un bonheur qui dure bien plus longtemps qu’un bouquet de fleurs.",
  },
];

const BenefitsSection = () => {
    const [openModal, setOpenModal] = useState(false);
  
  return (
     <>
    <section className="valentine-section bg-card">
      <div className="valentine-container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Offre-lui des frissons qui durent{" "}
            <span className="valentine-gradient-text">toute l'année</span>.
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Ton chéri(e) la chérira comme un trésor – parce que l'amour se nourrit de ces
            attentions qui touchent l'âme.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-valentine-blush transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <b.icon className="mb-4 h-10 w-10 text-valentine-pink" />
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-10 py-6 text-base md:text-lg"
            onClick={() => setOpenModal(true)}
          >
            <Heart className="mr-2 h-5 w-5" fill="currentColor" />
            Offrir maintenant
          </Button>
        </div>
      </div>
    </section>
     <OrderModal open={openModal} onClose={() => setOpenModal(false)} />   
    </>
  );
};

export default BenefitsSection;
