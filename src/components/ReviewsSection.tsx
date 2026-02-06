import { Star } from "lucide-react";

const reviews = [
  {
    name: "Lucas",
    city: "Paris",
    text: "La peluche a fait pleurer ma chérie de joie ! Meilleure Saint-Valentin ever.",
    avatar: "L",
  },
  {
    name: "Marie",
    city: "Lyon",
    text: "Doux comme un baiser, elle la quitte plus ! Merci pour ce moment magique.",
    avatar: "M",
  },
  {
    name: "Alex",
    city: "Marseille",
    text: "Offrir l'amour en peluche ? Génial ! Elle adore. Recommandé à 100%.",
    avatar: "A",
  },
  {
    name: "Sophie",
    city: "Bordeaux",
    text: "Mon copain m'a offert Câlin Éternel, je ne dors plus sans ! Un amour de peluche.",
    avatar: "S",
  },
];

const ReviewsSection = () => {
  return (
    <section className="valentine-section" style={{ background: "var(--gradient-soft)" }}>
      <div className="valentine-container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Ce que les cœurs conquis{" "}
          <span className="valentine-gradient-text">en disent...</span>
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center font-body text-muted-foreground">
          +2 000 amoureux comblés cette saison 💕
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-valentine-rose"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mb-4 font-body text-base italic leading-relaxed text-foreground">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valentine-blush font-display text-sm font-bold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
