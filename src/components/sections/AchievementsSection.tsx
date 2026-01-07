import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BadgeCheck, Shield, Star } from 'lucide-react';

const achievements = [
  { icon: Award, title: 'Google Cloud Premier Partner', year: '2024' },
  { icon: BadgeCheck, title: 'ISO 27001 Certified', year: '2023' },
  { icon: Shield, title: 'SOC 2 Type II Compliant', year: '2023' },
  { icon: Star, title: 'Google Workspace Specialist', year: '10+ Years' },
  { icon: Award, title: 'Microsoft Gold Partner', year: '2024' },
  { icon: BadgeCheck, title: 'AWS Advanced Partner', year: '2024' },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry certifications and partner accolades that reflect our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
                    {achievement.title}
                  </h3>
                  <span className="text-xs text-primary font-medium">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
