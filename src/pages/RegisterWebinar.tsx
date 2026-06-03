import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import webinarHeroEdu from "@/assets/banners/webinar-hero-edu.jpg";

const RegisterWebinar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={webinarHeroEdu}
            alt="Online Meeting Webinar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-[#0C4594]/40" />
        </div>

        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
              Build Your Agentic Workforce with Gemini Enterprise for Education
            </h1>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegisterWebinar;
