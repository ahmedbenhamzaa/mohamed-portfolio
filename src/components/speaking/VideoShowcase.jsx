import { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import VideoModal from './VideoModal';

export default function VideoShowcase({ items }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <SectionWrapper background="dark" paddingSize="lg" className="speaking-video-stage">
      <SectionHeading
        eyebrow="Videos"
        title="Featured video moments."
        text="Each card opens a YouTube embed modal. Replace the placeholder YouTube IDs and thumbnails in speaking.json."
        inverse
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {items.map((video, index) => (
          <Reveal key={video.id} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group block h-full w-full border border-white/10 bg-white/[0.035] text-left transition duration-300 hover:border-electric-blue/70 hover:bg-white/[0.055]"
            >
              <div className="relative aspect-video overflow-hidden bg-light-navy">
                <img
                  src={video.thumbnail}
                  alt=""
                  className="h-full w-full object-cover opacity-72 grayscale transition duration-500 group-hover:scale-[1.035] group-hover:opacity-95 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/20 to-transparent" />
                <div className="absolute left-5 top-5 border border-white/20 bg-deep-navy/80 px-3 py-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">
                  Watch
                </div>
              </div>
              <div className="p-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-electric-blue">{video.year}</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug tracking-[-0.02em] text-white">{video.title}</h3>
                <p className="mt-3 font-sans text-sm font-semibold text-white/70">{video.organization}</p>
                <p className="mt-1 font-sans text-sm text-white/48">{video.event}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </SectionWrapper>
  );
}
