export default function Video() {
  return (
    <video controls preload="none" autoPlay muted loop  playsInline className="w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-3/12 mx-auto mt-16 mb-36 rounded-3xl">
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
