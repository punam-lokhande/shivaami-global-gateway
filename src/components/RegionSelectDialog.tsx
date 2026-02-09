import { motion, AnimatePresence } from 'framer-motion';

interface RegionSelectDialogProps {
  isOpen: boolean;
  onSelect: (region: 'india' | 'usa') => void;
}

export default function RegionSelectDialog({ isOpen, onSelect }: RegionSelectDialogProps) {
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
          <div className="flex items-center justify-center gap-4 px-4 py-3 text-sm">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
