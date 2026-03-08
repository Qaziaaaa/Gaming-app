import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ title, price, features, isPopular, delay }: { title: string; price: string; features: string[]; isPopular?: boolean; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{ y: -10 }}
        className={`card-premium card-premium-hover flex flex-col h-full bg-white relative transition-all duration-500 shadow-premium ${isPopular ? 'border-lime ring-4 ring-lime/20' : ''}`}
    >
        {isPopular && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <span className="bg-lime text-black text-xs font-black px-6 py-2 rounded-xl border-2 border-black uppercase tracking-widest shadow-premium">
                    Most Popular
                </span>
            </div>
        )}
        <div className="mb-10 pt-4">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">${price}</span>
                <span className="text-gray-500 font-bold">/month</span>
            </div>
        </div>
        <div className="space-y-5 mb-12 flex-1 border-t-2 border-neutral-100 pt-8">
            {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-lime border-2 border-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-black stroke-[3px]" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                </div>
            ))}
        </div>
        <Button className={`w-full h-16 text-xl rounded-2xl font-bold shadow-premium transition-all duration-300 ${isPopular ? 'btn-premium-primary' : 'btn-premium-secondary'
            }`}>
            Get Started
        </Button>
    </motion.div>
);

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="section-padding pt-32 pb-32">
            <header className="mb-16">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-4xl lg:text-6xl font-bold mb-10 flex flex-col items-center gap-4 text-center"
                >
                    <span className="bg-lime px-6 py-2 rounded-xl border-2 border-black -rotate-1">Simple Pricing</span>
                </motion.h1>

                {/* Toggle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <span className={`text-lg font-medium ${!isYearly ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="w-16 h-8 bg-gray-200 rounded-full relative p-1 transition-colors duration-300"
                    >
                        <motion.div
                            animate={{ x: isYearly ? 32 : 0 }}
                            className="w-6 h-6 bg-black rounded-full"
                        />
                    </button>
                    <span className={`text-lg font-medium ${isYearly ? 'text-black' : 'text-gray-400'}`}>
                        Yearly <span className="text-lime font-bold text-sm ml-1">(Save 20%)</span>
                    </span>
                </motion.div>
            </header>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <PricingCard
                    title="Basic"
                    price={isYearly ? "19" : "24"}
                    delay={0.1}
                    features={[
                        "5 Social Media Profiles",
                        "Basic Analytics",
                        "Post Scheduling",
                        "Community Support"
                    ]}
                />
                <PricingCard
                    title="Professional"
                    price={isYearly ? "49" : "59"}
                    isPopular
                    delay={0.2}
                    features={[
                        "20 Social Media Profiles",
                        "Advanced Analytics",
                        "Custom Reporting",
                        "Priority Support",
                        "Team Collaboration"
                    ]}
                />
                <PricingCard
                    title="Enterprise"
                    price={isYearly ? "99" : "119"}
                    delay={0.3}
                    features={[
                        "Unlimited Profiles",
                        "Real-time Data Sync",
                        "Dedicated Account Manager",
                        "Custom Onboarding",
                        "API Access"
                    ]}
                />
            </div>
        </div>
    );
}
