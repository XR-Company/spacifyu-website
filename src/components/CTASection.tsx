import { motion, useInView } from "framer-motion";
import appIcon from "@/assets/icon.png";
import { useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import SubscribeModal from "@/components/SubscribeModal";

const APP_STORE_URL = "https://apps.apple.com/us/app/endlessxr/id6751106381";

const capsuleBtn = "border border-foreground/30 bg-foreground/10 backdrop-blur-md text-foreground font-medium px-7 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-all duration-300 whitespace-nowrap";

const benefits = [
"Lower the barrier to XR content creation and consumption",
"Help the industry move beyond early adopters",
"Cross the chasm toward mainstream adoption"];


const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <section className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto">
          
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-10">
            <div className="absolute inset-0 rounded-[2.5rem] animate-glow-pulse" style={{ boxShadow: '0 0 40px rgba(107,79,168,0.5), 0 0 80px rgba(107,79,168,0.3), 0 0 120px rgba(107,79,168,0.12)' }} />
            <img src={appIcon} alt="Endless XR" className="relative w-full h-full rounded-[2.5rem]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-[0.02em]">
            Designed to close the
            <br />
            XR market gap.
          </h2>

          <div className="flex flex-col items-center gap-4 mb-16">
            {benefits.map((benefit, i) =>
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3">
              
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${btnHovered ? 'border-emerald-400' : 'border-border'}`}>
                  <Check className={`w-3 h-3 transition-colors duration-300 ${btnHovered ? 'text-emerald-400' : 'text-muted-foreground'}`} style={btnHovered ? { filter: 'drop-shadow(0 0 4px rgba(52,211,153,0.6))' } : {}} />
                </div>
                <span className="text-primary text-xl">{benefit}</span>
              </motion.div>
            )}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button onClick={() => setModalOpen(true)} onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)} className={capsuleBtn}>
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className={capsuleBtn}>
              
              Download
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>


      </div>

      <SubscribeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>);

};

export default CTASection;