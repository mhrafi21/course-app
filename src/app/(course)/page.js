import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import PopularCourse from "@/Component/PopularCourse/PopularCourse";
import Questions from "@/Component/Questions/Questions";
import Testimonial from "@/Component/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <div>
      <Header />
        <PopularCourse />
        <Questions />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
