import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import appLogo from "@/assets/logo.png";
import SubscribeModal from "@/components/SubscribeModal";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const capsuleBtn = "border border-foreground/30 bg-foreground/10 backdrop-blur-md text-foreground font-medium px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all duration-300 whitespace-nowrap";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/tiUy_a7fT_E?autoplay=1&mute=1&loop=1&playlist=tiUy_a7fT_E&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 border-0 pointer-events-none"
            style={{
              width: '300vh',
              height: '170vh',
              transform: 'translate(-50%, -50%) scale(1.15)',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-0">
          
          <div className="inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 mb-3 border border-foreground/30 bg-foreground/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)] animate-pulse" />
            <span className="text-base font-medium text-foreground">Now available on Apple Vision Pro</span>
          </div>
        </motion.div>

        <motion.img

          alt="Endless XR"
          className="h-14 md:h-[7.5rem] lg:h-[8.75rem] mx-auto mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }} src="/lovable-uploads/1f79a93a-2a71-4450-a0fc-f39d97e3c4c5.png" />
        

        <motion.h1
          className="font-display text-3xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-[0.02em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          
          Create, Share, Explore XR
          <br />
          All in One Place.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          The all-in-one short-form XR platform where you can effortlessly create
          and discover immersive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button onClick={() => setModalOpen(true)} className={capsuleBtn}>
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={capsuleBtn}>
            
            Download
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2">
          
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-foreground/60"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
            
          </div>
        </motion.div>
      </div>

      <SubscribeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>);

};

export default HeroSection;