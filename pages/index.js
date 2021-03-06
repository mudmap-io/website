import GridList from "../components/landing-page/Grid-List";
import Panels from "../components/landing-page/PanelList";
import Pricing from "../components/landing-page/Pricing";
import Banner from "../components/landing-page/Banner";
import CTA from "../components/layout/CTA";
import Footer from "../components/layout/Footer";
import HeadAndSeo from "../components/layout/HeadAndSeo";
import EmbedVideo from "../components/landing-page/EmbedVideo";

export default function Home() {
  return (
    <>
      <HeadAndSeo/>
      <Banner/>
      <GridList/>
      <EmbedVideo video={"https://youtube.com/embed/5gxZCmuNqBM"} />
      <Panels/>
      <Pricing/>
      <CTA />
      <Footer />
    </>
  )
}
