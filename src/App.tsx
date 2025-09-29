import ContactForm from "./ContactForm";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./Hero-section";
import Review from "./Review";

function App() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <HeroSection />
        <Features />
        <ContactForm />
        <Review />

        <Footer />
      </div>
    </>
  );
}

export default App;
