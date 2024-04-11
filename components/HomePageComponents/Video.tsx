export default function Video() {
  return (
    <div className="w-full h-full overflow-hidden">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ objectPosition: 'center center' }}>
        <source src="/d644eac2-a292-498b-83ad-01a5e2854635.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
