import { useState } from "react";
import { X } from "lucide-react";

type OrderModalProps = {
  open: boolean;
  onClose: () => void;
};

const OrderModal = ({ open, onClose }: OrderModalProps) => {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Bonjour, je veux commander la peluche Saint-Valentin ❤️

Nom : ${nom}
Adresse : ${adresse}
Téléphone : ${telephone}
Email : ${email}

Merci !`;

    const whatsappLink = `https://wa.me/22956904489?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Box */}
        <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-fadeIn smmax-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute right-4 top-4 rounded-full bg-black/10 p-2 hover:bg-black/20 transition"
            onClick={onClose}
          >
            <X className="h-4 w-4 text-black" />
          </button>

          {/* Title */}
          <h3 className="font-display mb-2 text-center text-2xl font-bold text-gray-900">
            Finaliser la commande
          </h3>

          <p className="mb-4 text-center text-sm text-gray-600">
            Remplis ce formulaire puis clique sur envoyer pour continuer sur
            WhatsApp.
          </p>

          {/* Prix */}
            <p className="text-pink-600 font-bold text-xl mb-2 text-center">
              Prix Saint-Valentin : 30000 FCFA
            </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium">Nom & Prénom</label>
              <input
                type="text"
                required
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Ex : John Doe"
                className="mt-1 w-full rounded-xl px-4 py-3 outline-none bg-pink-50 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:ring-opacity-50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Adresse de livraison</label>
              <input
                type="text"
                required
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder="Ex : Cotonou"
                className="mt-1 w-full rounded-xl px-4 py-3 outline-none bg-pink-50 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:ring-opacity-50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Numéro de téléphone</label>
              <input
                type="tel"
                required
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Ex : +229 56 90 70 89"
                className="mt-1 w-full rounded-xl px-4 py-3 outline-none bg-pink-50 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:ring-opacity-50 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex : john@example.com"
                className="mt-1 w-full rounded-xl px-4 py-3 outline-none bg-pink-50 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:ring-opacity-50 transition"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="block w-full rounded-full bg-pink-600 py-4 text-center font-bold text-white hover:bg-pink-700 transition"
            >
              Envoyer sur WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeInUp 0.4s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default OrderModal;