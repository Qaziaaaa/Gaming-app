import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Users, Zap, User } from 'lucide-react';

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create the most immersive and connected gaming experience for players worldwide.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Over 10 million active players forming the most vibrant gaming community.',
    },
    {
      icon: Zap,
      title: 'Our Technology',
      description: 'Cutting-edge VR and AR technology pushing the boundaries of gaming.',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&q=60&auto=format"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-gamer-playing-with-a-virtual-reality-headset-42987-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-black via-gaming-black/90 to-gaming-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gaming-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gaming-red">
              Origin.Protocol
            </span>
            <div className="h-[1px] w-12 bg-gaming-red" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-6">
            The <span className="text-gaming-red">BOARD</span> Legacy
          </h2>
          <p className="text-gaming-gray-light text-base max-w-2xl mx-auto border-x border-white/10 px-8 py-4 italic">
            Forged in the silicon fires of 2020. We don't just host games; we architecture
            new dimensions for the modern gladiator.
          </p>
        </motion.div>

        {/* Technical Insight Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto mb-20 group"
        >
          <div className="bg-gaming-black/80 border-l-8 border-gaming-red p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Grid Underlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="font-display text-4xl text-white leading-tight">
                  Architecture of <br /> <span className="text-gaming-red">Absolute Control</span>
                </h3>
                <p className="text-gaming-gray-light text-lg leading-relaxed">
                  Our network spans 48 global sectors, delivering sub-5ms latency
                  to 98% of the developed world. We've built an infrastructure
                  that treats every frame as sacred.
                </p>
                <div className="flex gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-2xl font-display text-white">48+</div>
                    <div className="text-[10px] uppercase tracking-widest text-gaming-red">Sectors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display text-white">5ms</div>
                    <div className="text-[10px] uppercase tracking-widest text-gaming-red">Latency</div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-72 aspect-square bg-gaming-black border border-white/5 relative flex items-center justify-center overflow-hidden group lg:flex-shrink-0 lg:ml-8 cursor-crosshair">
                {/* Tactical Grid Background */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:24px_24px]" />

                {/* Horizontal & Vertical Crosshairs */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gaming-red/40 group-hover:bg-gaming-red/80 transition-colors duration-300" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gaming-red/40 group-hover:bg-gaming-red/80 transition-colors duration-300" />

                {/* Center Reticle (Static) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-gaming-red/50 rounded-full" />
                  <div className="absolute w-2 h-2 bg-gaming-red rounded-full" />
                </div>

                {/* Scope Gradations (Tick marks) */}
                <div className="absolute top-1/2 left-4 right-4 flex justify-between px-8 text-gaming-red/50 text-[8px] font-mono select-none">
                  <span>-30</span><span>-15</span><span>0</span><span>+15</span><span>+30</span>
                </div>
                <div className="absolute left-1/2 top-4 bottom-4 flex flex-col justify-between py-8 text-gaming-red/50 text-[8px] font-mono select-none transform -translate-x-1/2 text-center">
                  <span>+30</span><span>+15</span><span>0</span><span>-15</span><span>-30</span>
                </div>

                {/* Animated Target (The "Enemy/Objective") */}
                <motion.div
                  animate={{
                    x: [-80, 40, -20, 0],
                    y: [-60, -20, 50, 0],
                    scale: [0.8, 1.2, 0.9, 1],
                    opacity: [0.5, 0.8, 0.6, 1]
                  }}
                  transition={{
                    duration: 6,
                    ease: "anticipate",
                    times: [0, 0.4, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="absolute z-10 w-8 h-8 flex items-center justify-center"
                >
                  {/* Human Target Blip */}
                  <div className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse">
                    <User className="w-5 h-5 opacity-90" strokeWidth={2.5} />
                  </div>
                  {/* Lock-on square converging */}
                  <motion.div
                    animate={{ scale: [2, 1, 1], rotate: [0, 90, 90], opacity: [0, 1, 1] }}
                    transition={{ duration: 6, times: [0, 0.8, 1], repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-[-4px] border border-gaming-red/80"
                  />
                  {/* Track line connecting to center */}
                  <svg className="absolute top-1/2 left-1/2 overflow-visible w-0 h-0 pointer-events-none opacity-50 z-[-1]">
                    <motion.line
                      x1="0" y1="0"
                      animate={{ x2: [-80, 40, -20, 0].map(v => -v), y2: [-60, -20, 50, 0].map(v => -v) }}
                      transition={{ duration: 6, ease: "anticipate", times: [0, 0.4, 0.7, 1], repeat: Infinity, repeatDelay: 2 }}
                      stroke="#cc0000" strokeWidth="1" strokeDasharray="3 3"
                    />
                  </svg>
                </motion.div>

                {/* Outer Scope Ring */}
                <div className="absolute inset-6 border-[1px] border-gaming-red/20 rounded-full" />
                <div className="absolute inset-8 border-[1px] border-dashed border-gaming-red/30 rounded-full animate-[spin_20s_linear_infinite]" />

                {/* Airplane/Sniper HUD Information */}
                <div className="absolute top-4 left-4 text-[9px] font-mono text-gaming-red/80 tracking-widest flex flex-col gap-1">
                  <span className="animate-pulse">REC ●</span>
                  <span>ALT: 4500</span>
                  <span>SPD: 850</span>
                </div>

                <div className="absolute bottom-4 right-4 text-[9px] font-mono text-gaming-red/80 tracking-widest text-right flex flex-col gap-1">
                  <span>TGT.LCK</span>
                  <span>DST: 2.4KM</span>
                  <span className="text-white">AWP_SNIPER</span>
                </div>

                {/* Aggressive Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gaming-red transition-all duration-300 group-hover:scale-90 origin-top-left" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gaming-red transition-all duration-300 group-hover:scale-90 origin-top-right" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gaming-red transition-all duration-300 group-hover:scale-90 origin-bottom-right" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gaming-red transition-all duration-300 group-hover:scale-90 origin-bottom-left" />

                {/* Flash Overlay on Target Lock */}
                <motion.div
                  animate={{ opacity: [0, 0, 0.8, 0, 0, 0] }}
                  transition={{ duration: 6, times: [0, 0.95, 0.96, 1, 1, 1], repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-gaming-red z-20 mix-blend-screen pointer-events-none"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid with sharper blocks */}
        <div className="grid md:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gaming-black-light p-8 border border-white/5 group hover:bg-gaming-black transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 mb-6 border border-white/10 flex items-center justify-center group-hover:border-gaming-red transition-colors">
                <feature.icon className="w-6 h-6 text-gaming-gray-light group-hover:text-gaming-red" />
              </div>
              <h4 className="font-display text-xl text-white mb-3 group-hover:text-gaming-red transition-colors">{feature.title}</h4>
              <p className="text-gaming-gray-light text-xs leading-relaxed uppercase tracking-wider opacity-60 group-hover:opacity-100">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
