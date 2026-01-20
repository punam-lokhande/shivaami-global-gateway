import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { Award, Trophy, Star, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Banner image
import achievementsBanner from '@/assets/banners/achievements-banner.jpg';

interface AwardItem {
  title: string;
  image: string;
}

interface YearData {
  year: string;
  awards: AwardItem[];
}

const awardsData: YearData[] = [
  {
    year: '2025',
    awards: [
      { title: 'Best Cloud Solution Partner – VARINDIA 24th Star Nite Awards, 2025', image: 'https://www.shivaami.com/assets/images/award/VARINDIA-Star-Nite-Awards-2025.jpg' },
      { title: 'Google Workspace Partner of the Year - APAC, awarded at Google Cloud Next \'25 in Las Vegas', image: 'https://www.shivaami.com/assets/images/award/Google-Cloud-Partner-Award-2025.jpg' },
      { title: 'Top 20 DivHERsity Champions 2025 by herkey', image: 'https://www.shivaami.com/assets/images/award/DivHERsity-Award.jpg' },
      { title: 'Gemini Deals Champion 2024 at APAC Partner Gemini Competition 2024', image: 'https://www.shivaami.com/assets/images/award/Gemini-Deals-Champion-2024.jpg' },
      { title: 'Gemini Pipeline Champion 2024 at APAC Partner Gemini Competition 2024', image: 'https://www.shivaami.com/assets/images/award/Gemini-Pipeline-Champion-2024.jpg' },
      { title: 'Partner of the Year – APAC VAR by JumpCloud', image: 'https://www.shivaami.com/assets/images/award/APAC-VAR-JumpCloud.jpg' },
      { title: 'VARINDIA INFOTECH FORUM - Most Promising Partner in India 2025', image: 'https://www.shivaami.com/assets/images/award/VARINDIA-25.jpg' },
    ],
  },
  {
    year: '2024',
    awards: [
      { title: 'Top VAD Award 2024 at the prestigious 14th Channel Accelerator Awards', image: 'https://www.shivaami.com/assets/images/award/awards-2024-6.jpg' },
      { title: 'Best Cloud Solution Partner by VARINDIA 23rd Star Nite Awards 2024', image: 'https://www.shivaami.com/assets/images/award/starniteawards2024.jpg' },
      { title: 'Cloud as a Service - MSP India Summit 2024', image: 'https://www.shivaami.com/assets/images/award/MSP-2024.jpg' },
      { title: 'Tech Visionary Award 2024', image: 'https://www.shivaami.com/assets/images/award/Tech-Visionary-Award-24.jpg' },
      { title: 'VARINDIA INFOTECH FORUM - Most Promising Partner in India 2024', image: 'https://www.shivaami.com/assets/images/award/VARINDIA2024.jpg' },
      { title: 'Information Technology Services (Mid-Corporate)', image: 'https://www.shivaami.com/assets/images/award/IT-Services.jpg' },
    ],
  },
  {
    year: '2023',
    awards: [
      { title: 'Google Cloud Sales Partner of the Year – India 2023', image: 'https://www.shivaami.com/assets/images/award/Google-Cloud-Sales-Partner2023.jpg' },
      { title: 'Recognized and awarded in the category of Cloud as Service at MSP India Summit 2023', image: 'https://www.shivaami.com/assets/images/award/MSP-India-Summit-2023.jpg' },
      { title: 'SMB GWS Deal Titan 2023 at SMB Partner Forum', image: 'https://www.shivaami.com/assets/images/award/SMB2023.jpg' },
      { title: 'Best Cloud Solution Partner by VARINDIA 22nd Star Nite Awards 2023', image: 'https://www.shivaami.com/assets/images/award/VARINDIA-2023.jpg' },
    ],
  },
  {
    year: '2022',
    awards: [
      { title: 'Best Cloud Solution Partner by VARINDIA Star Nite Awards, 2022', image: 'https://www.shivaami.com/assets/images/award/StarNiteAwards2022.jpg' },
      { title: 'Google Cloud Expansion Partner of the Year - Asia Pacific, 2021', image: 'https://www.shivaami.com/assets/images/award/expansion_partner2022.jpg' },
      { title: "India's top cloud services provider 2022", image: 'https://www.shivaami.com/assets/images/award/ET2022.jpg' },
      { title: 'Best Cloud Solution Partner Western India From VARINDIA 2022', image: 'https://www.shivaami.com/assets/images/award/varindia2022.jpg' },
    ],
  },
  {
    year: '2021',
    awards: [
      { title: 'Best Cloud Solution Partner by VARINDIA Star Nite Awards (SNA) 2021', image: 'https://www.shivaami.com/assets/images/award/StarNiteAwards2021.jpg' },
      { title: 'Multi-Cloud by CRN Excellence Awards 2021', image: 'https://www.shivaami.com/assets/images/award/CRNExcellence2021.jpg' },
      { title: 'Google Cloud Expansion Partner of the Year, Asia Pacific 2020', image: 'https://www.shivaami.com/assets/images/award/GoogleCloudExpansion.jpg' },
      { title: 'Best Born in the Cloud Partner by The Economic Times - 2021', image: 'https://www.shivaami.com/assets/images/award/et2021.jpg' },
      { title: 'IT Cloud/SaaS Company of the Year By Vyapaar Jagat - 2021', image: 'https://www.shivaami.com/assets/images/award/vyapar2021.jpg' },
      { title: 'SME Channels Super Hero Award in the category of Cloud Specialist - 2021', image: 'https://www.shivaami.com/assets/images/award/SME-2021.jpg' },
      { title: 'Top 20 Companies in Diversity 2021 (SMEs/Startups)', image: 'https://www.shivaami.com/assets/images/award/SMEsStartups2021.jpg' },
      { title: "The CNBC TV18 and Team Marksmen 'Most Trusted Brands of India 2021", image: 'https://www.shivaami.com/assets/images/award/Most_Trusted_Brand.jpg' },
      { title: 'Cloud Summit & 100 Cloud Evangelists Awards - Cloud Partner of India 2021', image: 'https://www.shivaami.com/assets/images/award/CloudPartnerIndia.jpg' },
    ],
  },
  {
    year: '2020',
    awards: [
      { title: 'SME Channels – COVID19 SuperHero Partner Awards 2020', image: 'https://www.shivaami.com/assets/images/award/SME_Award_COVID19.jpg' },
      { title: 'Google Cloud Global Diversity & Inclusion Partner of the Year 2019', image: 'https://www.shivaami.com/assets/images/award/Diversity_Inclusion_Partner.jpg' },
    ],
  },
  {
    year: '2019',
    awards: [
      { title: 'The Economic Times Promising Brands 2019-20', image: 'https://www.shivaami.com/assets/images/award/EconomicTimesPromising.jpg' },
      { title: 'SME Channels Summit and Awards 2019', image: 'https://www.shivaami.com/assets/images/award/SME_Channels_Summit.jpg' },
      { title: 'ChannelWorld Premier 100 Award 2019', image: 'https://www.shivaami.com/assets/images/award/ChannelWorld.jpg' },
      { title: "Best Cloud Solution Partner – VARINDIA IT Magazine's Star Nite Award 2019", image: 'https://www.shivaami.com/assets/images/award/Partner_VARINDIA.jpg' },
      { title: 'Best Cloud Solution Partner for Western India WIITF-2019', image: 'https://www.shivaami.com/assets/images/award/VARINDIA.jpg' },
      { title: 'CIO Choice 2019 – Cloud E-mail Implementation Services (SME)', image: 'https://www.shivaami.com/assets/images/award/cio-choice-2019-Shivaami.jpg' },
    ],
  },
  {
    year: '2018',
    awards: [
      { title: 'Business Leader Awards 2018 – Most Impactful Tech Leaders', image: 'https://www.shivaami.com/assets/images/award/business-leader-awards-2018-shivaami.jpg' },
      { title: '8th Western India Information Technology Fair 2018 – Best Cloud Solution Partner', image: 'https://www.shivaami.com/assets/images/award/awards-2018-2.jpg' },
      { title: 'Implementation Partner of the Year – Hybrid Environment – IceWarp', image: 'https://www.shivaami.com/assets/images/award/awards-2018-1.jpg' },
      { title: 'ChannelWorld Hall Of Fame Award 2018', image: 'https://www.shivaami.com/assets/images/award/awards-2018-3.jpg' },
      { title: 'ChannelWorld Premier 100 Award 2018', image: 'https://www.shivaami.com/assets/images/award/awards-2018-4.jpg' },
    ],
  },
  {
    year: '2017',
    awards: [
      { title: 'ASCENT: Growth Strategy of the Year', image: 'https://www.shivaami.com/assets/images/award/awards-2017-4.jpg' },
      { title: "One of the winners of Zoho's Sell Big Contest", image: 'https://www.shivaami.com/assets/images/award/awards-2017-1.jpg' },
      { title: 'ChannelWorld Premier 100 Main Award: The Futurist 100', image: 'https://www.shivaami.com/assets/images/award/awards-2017-2.jpg' },
      { title: "GoDaddy: Major contribution in sales & getting SME's online", image: 'https://www.shivaami.com/assets/images/award/awards-2017-3.jpg' },
    ],
  },
  {
    year: '2016',
    awards: [
      { title: 'Winner of Super 50 SME Channel 2016', image: 'https://www.shivaami.com/assets/images/award/awards-2016-4.jpg' },
      { title: 'GoDaddy valued Partner from India – 2016', image: 'https://www.shivaami.com/assets/images/award/awards-2016-1-1.jpg' },
      { title: 'Channel World Premier 100 Special Award: Cloud', image: 'https://www.shivaami.com/assets/images/award/awards-2016-2-1.jpg' },
      { title: 'Best SMEs in cloud by Silicon India', image: 'https://www.shivaami.com/assets/images/award/awards-2016-3-1.jpg' },
    ],
  },
  {
    year: '2015',
    awards: [
      { title: 'ChannelWorld Premier 100 Main Award', image: 'https://www.shivaami.com/assets/images/award/awards-2015-1-2.jpg' },
    ],
  },
];

// Count total awards
const totalAwards = awardsData.reduce((acc, year) => acc + year.awards.length, 0);

// Hero Section with background image
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[45vh] lg:min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={achievementsBanner} 
          alt="Awards & Achievements" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4594]/95 via-[#0C4594]/80 to-transparent" />
      </motion.div>

      {/* Content - Left aligned */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-12">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]"
          >
            Awards & <span className="text-[#38B6FF]">Recognitions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            A decade of industry honors celebrating our commitment to cloud excellence.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#38B6FF]" />
              <span className="text-white font-semibold">{totalAwards}+ Awards</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#38B6FF]" />
              <span className="text-white font-semibold">10+ Years</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#38B6FF]" />
              <span className="text-white font-semibold">APAC Recognition</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Achievements() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedImage, setSelectedImage] = useState<AwardItem | null>(null);

  const currentYearData = awardsData.find(y => y.year === selectedYear) || awardsData[0];

  return (
    <>
      <Helmet>
        <title>Awards & Achievements | Shivaami Cloud Services</title>
        <meta name="description" content="Explore Shivaami's journey of excellence through our awards and recognitions. From Google Cloud Partner of the Year to industry-leading accolades." />
      </Helmet>
      
      <Header />
      <HeroSection />

      {/* Sidebar + Grid Layout */}
      <section className="bg-gray-50 py-10">
        <div className="px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Year Navigation */}
            <div className="lg:w-48 flex-shrink-0">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Browse by Year
              </h3>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {awardsData.map((yearData) => (
                  <button
                    key={yearData.year}
                    onClick={() => setSelectedYear(yearData.year)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all whitespace-nowrap flex-shrink-0 text-sm ${
                      selectedYear === yearData.year
                        ? 'bg-[#0C4594] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{yearData.year}</span>
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      selectedYear === yearData.year
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {yearData.awards.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Awards Grid */}
            <div className="flex-1">
              {/* Year Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0C4594]">{selectedYear} Awards</h2>
                  <p className="text-gray-500 text-xs">{currentYearData.awards.length} recognition{currentYearData.awards.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Awards Grid */}
              <motion.div 
                key={selectedYear}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {currentYearData.awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => setSelectedImage(award)}
                    className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#38B6FF]/40"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-800 line-clamp-2 group-hover:text-[#0C4594] transition-colors leading-snug">
                        {award.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-5 bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedImage.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">Shivaami Cloud Services • {selectedYear}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CTASection />
      <Footer />
    </>
  );
}
