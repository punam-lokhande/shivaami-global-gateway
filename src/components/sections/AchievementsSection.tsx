import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Award, BadgeCheck, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const achievements = [
  { icon: Award, title: '6X Google Cloud Partner of the Year', year: '2024' },
  { icon: BadgeCheck, title: 'ISO 27001 Certified', year: '2023' },
  { icon: Shield, title: 'SOC 2 Type II Compliant', year: '2023' },
  { icon: Star, title: 'JumpCloud Partner of the Year - APAC', year: '10+ Years' },
  { icon: Award, title: 'Microsoft Gold Partner', year: '2024' },
  { icon: BadgeCheck, title: 'AWS Advanced Partner', year: '2024' },
];

function AchievementCard({ achievement, index, isInView }: {
  achievement: typeof achievements[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = achievement.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="bg-white text-center h-full rounded-2xl p-5 border border-[#e2e8f0] shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:border-[#1b9dd8]/30 transition-all duration-300 relative overflow-hidden">
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#1b9dd8] flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-semibold text-sm text-[#0C4594] mb-1">
          {achievement.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedDot, setSelectedDot] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedDot(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  const dotCount = emblaApi?.scrollSnapList().length || 0;

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1b9dd8]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0C4594]/5 rounded-full blur-[100px]" />
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C4594] mb-4">
            Achievements & <span className="text-[#010203]">Recognition</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Industry certifications and partner accolades that reflect our commitment to excellence
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="flex-[0_0_75%] min-w-0">
                  <AchievementCard achievement={achievement} index={index} isInView={isInView} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots + Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={scrollPrev} className="w-8 h-8 rounded-full bg-[#0C4594]/10 flex items-center justify-center text-[#0C4594] hover:bg-[#0C4594]/20 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${i === selectedDot ? 'w-6 bg-[#0C4594]' : 'w-2 bg-[#0C4594]/30'}`}
                />
              ))}
            </div>
            <button onClick={scrollNext} className="w-8 h-8 rounded-full bg-[#0C4594]/10 flex items-center justify-center text-[#0C4594] hover:bg-[#0C4594]/20 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
