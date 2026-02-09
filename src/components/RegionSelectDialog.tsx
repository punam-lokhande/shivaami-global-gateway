import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface RegionSelectDialogProps {
  isOpen: boolean;
  onSelect: (region: 'india' | 'usa') => void;
}

export default function RegionSelectDialog({ isOpen, onSelect }: RegionSelectDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0C4594] to-[#38B6FF] p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to Shivaami</h2>
              <p className="text-white/90 text-sm">
                Please select your region for localized content and services
              </p>
            </div>

            {/* Region Options */}
            <div className="p-6 space-y-4">
              <button
                onClick={() => onSelect('india')}
                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-[#0C4594] hover:bg-[#0C4594]/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 via-white to-green-600 flex items-center justify-center text-2xl shadow-md">
                  🇮🇳
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-[#0C4594] text-lg group-hover:text-[#0C4594]">India</div>
                  <div className="text-sm text-gray-500">Mumbai, Delhi, Bangalore, Chennai</div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-[#0C4594] group-hover:bg-[#0C4594] transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>

              <button
                onClick={() => onSelect('usa')}
                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-[#0C4594] hover:bg-[#0C4594]/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-white to-red-600 flex items-center justify-center text-2xl shadow-md">
                  🇺🇸
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold text-[#0C4594] text-lg group-hover:text-[#0C4594]">USA</div>
                  <div className="text-sm text-gray-500">Iselin, New Jersey</div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-[#0C4594] group-hover:bg-[#0C4594] transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            </div>

            {/* Footer Note */}
            <div className="px-6 pb-6">
              <p className="text-xs text-center text-gray-400">
                You can change your region anytime using the toggle in the header
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
