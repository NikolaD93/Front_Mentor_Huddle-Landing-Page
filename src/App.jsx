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
      {/* <Footer /> */}
    </div>
  );
};

export default App;
