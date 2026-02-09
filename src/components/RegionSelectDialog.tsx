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
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0C4594] to-[#38B6FF] px-6 py-3 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Select Your Region</span>
            </div>

            {/* Region Options */}
            <div className="p-4 flex gap-3">
              <button
                onClick={() => onSelect('india')}
                className="flex items-center gap-3 px-5 py-3 rounded-lg border-2 border-gray-200 hover:border-[#0C4594] hover:bg-[#0C4594]/5 transition-all group"
              >
                <span className="text-2xl">🇮🇳</span>
                <span className="font-semibold text-[#0C4594]">India</span>
              </button>

              <button
                onClick={() => onSelect('usa')}
                className="flex items-center gap-3 px-5 py-3 rounded-lg border-2 border-gray-200 hover:border-[#0C4594] hover:bg-[#0C4594]/5 transition-all group"
              >
                <span className="text-2xl">🇺🇸</span>
                <span className="font-semibold text-[#0C4594]">USA</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
