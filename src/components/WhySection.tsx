import { useState } from "react";
import OrderModal from "@/components/OrderModal";
import { Heart, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhySection = () => {

    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <section className="valentine-section bg-card">
      <div className="valentine-container mx-auto max-w-4xl text-center">
        <h2 className="mb-6 font-display text-xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Parce que les mots s'envolent, mais un câlin{" "}
          <span className="valentine-gradient-text">reste gravé à jamais</span>.
        </h2>

        <p className="mx-auto mb-12 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Les fleurs fanent, les chocolats fondent... Mais{" "}
          <strong className="text-foreground">Ourson Éternel</strong> ? Elle est
          le geste qui dit "Tu es mon monde" sans un mot. Parfaite pour la
          Saint-Valentin&nbsp;: elle ravive la flamme, crée des souvenirs
          inoubliables et transforme une soirée en moment magique.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Ravive la flamme",
              desc: "Un geste d'amour qui parle plus fort que mille mots.",
            },
            {
              icon: Sparkles,
              title: "Moment magique",
              desc: "Imagine son sourire émerveillé quand elle la serrera contre elle.",
            },
            {
              icon: Gift,
              title: "Plus qu'un cadeau",
              desc: "C'est une promesse d'amour doux et éternel.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-valentine-blush p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] max-w-sm mx-auto md:last:col-span-2 lg:last:col-span-1"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon
                  className="h-7 w-7 text-primary"
                  fill="currentColor"
                />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground">{item.desc}</p>
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

export default WhySection;
