import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import OrderModal from "@/components/OrderModal";

const FinalCTA = () => {
  const peluchesRestantes = 147;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Section principale */}
      <section  id="finalcta" className="valentine-section relative overflow-hidden bg-white text-black pb-4">
        {/* Décorations */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-valentine-pink/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="valentine-container relative z-10 mx-auto max-w-3xl text-center">
          {/* Stock restant */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="animate-heartbeat text-lg">❤️</span>
            <span className="font-body text-sm font-medium">
              Il reste seulement {peluchesRestantes} peluches
            </span>
          </div>

          {/* Titre */}
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Ne fais pas attendre son sourire.
          </h2>

          {/* Sous-titre */}
          <p className="mb-2 font-display text-xl text-black md:text-2xl">
            Offre-lui <span className="text-valentine-rose">Ourson</span>{" "}
            MAINTENANT.
          </p>

          <p className="mb-5 font-body text-black">
            Cette Saint-Valentin, sois le héros de son cœur. Clique, commande, et
            vis la magie.
          </p>

          {/* Countdown */}
          <div className="mb-5 flex justify-center">
            <CountdownTimer />
          </div>

          {/* Infos complémentaires */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 font-body text-sm text-black/60">
            <span>
              Prix final : <strong className="text-black">30000 FCFA</strong>
            </span>
            <span>Livraison gratuite</span>
            <span>Stock épuisé vite !</span>
          </div>

          {/* Bouton principal */}
          <Button
            variant="hero"
            size="sm"
            className="rounded-full px-5 py-6 font-display text-sm sm:px-8 md:px-14 md:py-8 md:text-base lg:text-lg"
            onClick={() => setOpenModal(true)}
          >
            <Heart className="mr-2 h-6 w-6" fill="currentColor" />
            OFFRIR MAINTENANT
          </Button>

          {/* Footer */}
          <p className="mt-7 pb-0 text-center text-base text-black">
            © 2026 • Saint Valentin • Livraison rapide • Paiement sécurisé
          </p>
        </div>
      </section>

      {/* Modal réutilisable */}
      <OrderModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default FinalCTA;