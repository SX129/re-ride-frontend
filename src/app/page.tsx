import About from "@/shared/components/About";
import Header from "@/shared/components/Header";

export default function Home() {
  return (
    <>
      <div className="landing-section">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/intro-video.mp4"
        />
        <header>
          <Header />
        </header>
        <section className="landing-content">
          <h1>RE•RIDE</h1>
          <p>SKIP THE WAIT</p>
        </section>
      </div>
      <main className="about-section">
        <About />
      </main>
    </>
  );
}
