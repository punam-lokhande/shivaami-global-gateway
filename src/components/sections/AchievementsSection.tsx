import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BadgeCheck, Shield, Star } from 'lucide-react';

const achievements = [
  { icon: Award, title: '6X Google Cloud Partner of the Year', year: '2024' },
  { icon: BadgeCheck, title: 'ISO 27001 Certified', year: '2023' },
  { icon: Shield, title: 'SOC 2 Type II Compliant', year: '2023' },
  { icon: Star, title: 'JumpCloud Partner of the Year - APAC', year: '10+ Years' },
  { icon: Award, title: 'Microsoft Gold Partner', year: '2024' },
  { icon: BadgeCheck, title: 'AWS Advanced Partner', year: '2024' },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#38B6FF]/5 rounded-full blur-[120px]" />
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

        {/* Bento Achievement Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white text-center h-full rounded-2xl p-5 border border-[#e2e8f0] shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:border-[#38B6FF]/30 transition-all duration-300 relative overflow-hidden">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#0C4594] mb-1 line-clamp-2">
                    {achievement.title}
                  </h3>
                  {/* <span className="text-xs text-[#38B6FF] font-semibold">
                    {achievement.year}
                  </span> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}