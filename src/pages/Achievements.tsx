import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import { Award, Trophy, Star, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);
  const [expandedYears, setExpandedYears] = useState<string[]>(['2025', '2024']);

  const toggleYear = (year: string) => {
    setExpandedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year) 
        : [...prev, year]
    );
  };

  return (
    <>
      <Helmet>
        <title>Awards & Achievements | Shivaami Cloud Services</title>
        <meta name="description" content="Explore Shivaami's journey of excellence through our awards and recognitions. From Google Cloud Partner of the Year to industry-leading accolades, see why we're trusted by enterprises worldwide." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C4594] via-[#1a5ab8] to-[#0C4594]">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-[#38B6FF]/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#38B6FF]/10 rounded-full blur-2xl"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Trophy className="w-8 h-8 text-[#38B6FF]" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Awards & <span className="text-[#38B6FF]">Recognitions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our IT industry knowledge and technology expertise have earned us numerous honors throughout the years. We take great pride in highlighting our business and team members when accolades are received.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-1">{totalAwards}+</div>
              <div className="text-sm text-gray-600">Total Awards</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-1">10+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-1">15+</div>
              <div className="text-sm text-gray-600">Google Awards</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0C4594] mb-1">APAC</div>
              <div className="text-sm text-gray-600">Regional Recognition</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0C4594] mb-4">
              A Decade of <span className="text-[#38B6FF]">Excellence</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating our journey through industry recognition and partner accolades
            </p>
          </motion.div>

          {/* Year Accordion */}
          <div className="max-w-6xl mx-auto space-y-4">
            {awardsData.map((yearData, yearIndex) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: yearIndex * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Year Header */}
                <button
                  onClick={() => toggleYear(yearData.year)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-[#0C4594]">{yearData.year}</h3>
                      <p className="text-sm text-gray-500">{yearData.awards.length} award{yearData.awards.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#38B6FF]/10 text-[#0C4594] text-sm font-medium">
                      <Star className="w-4 h-4" />
                      {yearData.awards.length} Recognition{yearData.awards.length > 1 ? 's' : ''}
                    </span>
                    {expandedYears.includes(yearData.year) ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Awards Grid */}
                {expandedYears.includes(yearData.year) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {yearData.awards.map((award, awardIndex) => (
                        <motion.div
                          key={awardIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: awardIndex * 0.05 }}
                          onClick={() => setSelectedImage(award)}
                          className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#38B6FF]/30"
                        >
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-700">
                                <Trophy className="w-3 h-3 text-[#38B6FF]" />
                                Click to expand
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-[#0C4594] transition-colors">
                              {award.title}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Expand/Collapse All */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              onClick={() => setExpandedYears(awardsData.map(y => y.year))}
              className="border-[#0C4594] text-[#0C4594] hover:bg-[#0C4594] hover:text-white"
            >
              Expand All Years
            </Button>
            <Button
              variant="outline"
              onClick={() => setExpandedYears([])}
              className="border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Collapse All
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
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
              <div className="p-6 bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C4594] to-[#38B6FF] flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{selectedImage.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Shivaami Cloud Services</p>
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
