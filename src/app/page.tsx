
export default function Home() {
  return (
    <div className="landing-page">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/intro-video.mp4"
      />
      <main className="content">
        <h1>RE-RIDE</h1>
        <p>SKIP THE WAIT</p>
      </main>
    </div>
  );
}
