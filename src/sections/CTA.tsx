import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="bg-gray-light rounded-3xl p-8 lg:p-12 xl:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium">
                Let's make things happen
              </h2>
              <p className="text-base lg:text-lg text-gray-600 max-w-lg">
                Contact us today to learn more about how our digital marketing services
                can help your business grow and succeed online.
              </p>
              <Button className="bg-dark text-white hover:bg-dark/90 rounded-lg px-6 py-3 h-14 text-base font-normal transition-all duration-300 group">
                Get your free proposal
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:flex justify-end">
              <svg
                viewBox="0 0 300 200"
                className="w-full max-w-xs xl:max-w-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Decorative stars and shapes */}
                <path
                  d="M50 50 L55 65 L70 65 L58 75 L63 90 L50 80 L37 90 L42 75 L30 65 L45 65 Z"
                  fill="#B9FF66"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M250 30 L253 40 L263 40 L255 47 L258 57 L250 50 L242 57 L245 47 L237 40 L247 40 Z"
                  fill="black"
                />
                <circle cx="280" cy="150" r="20" fill="#B9FF66" stroke="black" strokeWidth="2" />
                <circle cx="30" cy="150" r="15" fill="black" />
                
                {/* Abstract lines */}
                <path
                  d="M100 100 Q150 50 200 100 T300 100"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M80 150 Q130 120 180 150 T280 140"
                  stroke="#B9FF66"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
