export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center">
        <div className="eyebrow text-pink mb-4 animate-pulse">
          MOMumental Moments<sup className="text-[8px]">®</sup>
        </div>
        <div className="font-serif text-3xl md:text-4xl text-navy italic">
          loading...
        </div>
      </div>
    </div>
  );
}
