import { motion } from 'framer-motion';

export default function ProvenExcellenceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Animated Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#38B6FF] to-[#0ea5e9] rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0ea5e9]/20 to-[#8b5cf6]/20 rounded-full blur-[80px]" 
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#38B6FF]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#8b5cf6]/20 to-transparent" />
      </div>
      
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with better alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10"
            >
              <span className="w-2 h-2 bg-[#38B6FF] rounded-full animate-pulse" />
              <span className="text-[#38B6FF] text-sm font-medium tracking-wide">Award-Winning Partnership</span>
            </motion.div>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Proven Excellence,{' '}
              <span className="bg-gradient-to-r from-[#38B6FF] via-[#60a5fa] to-[#8b5cf6] bg-clip-text text-transparent">
                Recognized Leadership
              </span>
            </h2>
            
            {/* Description - properly aligned */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                We're a <span className="text-white font-semibold">7X Google Cloud Partner of the Year</span> with 
                Diamond Co-Sell and Services Partner recognition.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                We deliver proven expertise across security, infrastructure, and work transformation. 
                Our solutions help organizations maximize their Google Cloud investment.
              </p>
            </div>
            
            {/* Decorative separator */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-32 h-1 bg-gradient-to-r from-[#38B6FF] to-[#8b5cf6] rounded-full mx-auto mt-10"
            />
          </motion.div>

          {/* Badge Display with Prominent Boxes */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24"
          >
            {/* 7X Award Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div 
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-3 bg-gradient-to-br from-[#38B6FF] via-[#0ea5e9] to-[#38B6FF] rounded-[2rem] blur-xl"
                />
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Shimmer effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  
                  {/* Badge label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#38B6FF] to-[#0ea5e9] rounded-full">
                    <span className="text-white text-xs font-semibold">7X Winner</span>
                  </div>
                  
                  <div className="relative z-10 pt-4">
                    <img 
                      src="/badges/7x-award.png" 
                      alt="7X Google Cloud Partner of the Year APAC 2025"
                      className="w-[240px] sm:w-[280px] md:w-[320px] h-auto object-contain mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Diamond Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div 
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -inset-3 bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#fbbf24] rounded-[2rem] blur-xl"
                />
                
                {/* Card */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50 overflow-hidden">
                  {/* Shimmer effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2, delay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  
                  {/* Badge label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full">
                    <span className="text-white text-xs font-semibold">Diamond Partner</span>
                  </div>
                  
                  <div className="relative z-10 pt-4">
                    <img 
                      src="/badges/tier_gws_cosell_and_service_diamond.png" 
                      alt="Google Workspace Diamond Co-sell & Services Partner"
                      className="w-[240px] sm:w-[280px] md:w-[320px] h-auto object-contain mx-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
