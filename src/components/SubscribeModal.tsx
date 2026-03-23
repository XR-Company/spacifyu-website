import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
}

const SubscribeModal = ({ open, onClose }: SubscribeModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScABH4Ou1VNVqGj9RHuB3z0AhXKi_KmDETSEjOeAINufNHjFQ/formResponse";

    // Create a hidden iframe to submit the form without CORS issues
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = formUrl;
    form.target = "hidden_iframe";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "entry.690611847";
    input.value = email;
    form.appendChild(input);

    document.body.appendChild(form);
    form.submit();

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 2000);

    setSubmitted(true);
    setEmail("");
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/75"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-2xl border border-foreground/20 bg-background p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-2 text-foreground py-6">
                <Check className="w-8 h-8 mb-2" />
                <span className="font-display text-lg font-semibold">You're on the list!</span>
                <p className="text-sm text-muted-foreground">We'll keep you updated.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-semibold mb-2">Stay in the loop</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Sign up for new experiences, creator tools, and platform updates.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    maxLength={255}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Submit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
