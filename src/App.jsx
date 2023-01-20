import {
  Conversations,
  CTA,
  Diagram,
  Footer,
  GrowTogether,
  Header,
  Hero,
  Users,
} from "./components";
import BackToTop from "react-back-to-top-button";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Diagram />
      <div className="my-[130px]">
        <GrowTogether />
        <Conversations />
        <Users />
      </div>
      <CTA />
      <Footer />
      <BackToTop
        showAt={200}
        speed={1500}
        easing="easeInOutQuint"
      >
        <ion-icon style={{color:'hsl(322, 100%, 66%)', fontSize: "4rem"}} name="caret-up-circle-outline"></ion-icon>
      </BackToTop>
    </div>
  );
};

export default App;
