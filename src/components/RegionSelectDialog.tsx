import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface RegionSelectDialogProps {
  isOpen: boolean;
  onSelect: (region: 'india' | 'usa') => void;
  onClose: () => void;
}

export default function RegionSelectDialog({ isOpen, onSelect, onClose }: RegionSelectDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-[#1d1d1f] text-white"
        >
          <div className="flex items-center justify-center gap-4 px-4 py-2.5 text-sm relative">
            <span className="text-white/90">Choose your region.</span>
            
            <button
              onClick={() => onSelect('india')}
              className="inline-flex items-center gap-1.5 text-[#2997ff] hover:underline transition-all"
            >
              <span>🇮🇳</span>
              <span>India</span>
            </button>
            
            <span className="text-white/40">|</span>
            
            <button
              onClick={() => onSelect('usa')}
              className="inline-flex items-center gap-1.5 text-[#2997ff] hover:underline transition-all"
            >
              <span>🇺🇸</span>
              <span>USA</span>
            </button>

            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              aria-label="Close region selector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}