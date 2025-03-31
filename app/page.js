import Carousel from "@/components/full-components/Carrousel";
import SectionParrafos from "@/components/full-components/SectionParrafos";
import SectionResumen from "@/components/full-components/SectionResumen";
import SectionSobreGabow from "@/components/full-components/SectionSobreGabow";
import { Fade, Slide } from "react-awesome-reveal";


export default function Home() {
  return (
    <>
      <Fade>
        <Carousel />
      </Fade>
      <Slide>
        <SectionSobreGabow />
        <SectionParrafos />
        <SectionResumen />
      </Slide>
    </>
  );
}
