import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-deep-navy/92 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-5xl border border-white/10 bg-light-navy p-3 shadow-2xl shadow-black/40 sm:p-5"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-electric-blue">{video.organization}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{video.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="border border-white/15 px-3 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:border-electric-blue hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="aspect-video w-full overflow-hidden bg-deep-navy">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-4 font-sans text-sm leading-7 text-white/60">{video.description}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
