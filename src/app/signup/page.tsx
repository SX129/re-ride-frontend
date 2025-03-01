import Footer from "@/shared/components/Footer";
import { SignupForm } from "@/shared/components/SignupForm";
import { Link } from "next-view-transitions";

export default function SignupPage() {
  return (
    <>
      <div className="landing-section">
        <video
          className="background-video"
          muted
          playsInline
          src="/videos/intro-video.mp4"
        />
        <div className="glass-effect w-[100%] h-[100%] bg-transparent flex flex-col justify-center items-center">
          <div className="header-section">
            <nav>
              <Link href="/" className="link-style">
                RE•RIDE
              </Link>
            </nav>
          </div>
          <SignupForm />
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
