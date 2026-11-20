import { MessageCircle } from "lucide-react";
import { generalUrl } from "@/lib/whatsapp";

/** Fixed WhatsApp button, shown on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={generalUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-xl transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
