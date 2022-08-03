import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Media from 'react-media';
import styled from "styled-components";

export default function HowToSlider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const Image = styled.div`
  width: 100%;
  height: 100%;
  `;

  return (
    <Media query="(max-width: 420px)">
    {matches => 
        matches ? (
          <AutoplaySlider fillParent={true} bullets={false} buttons={true} play={true} interval={3000}>
            <Image data-src="/img/testing1.jpg" />
            <Image data-src="/img/testing2.jpg" />
            <Image data-src="/img/testing3.jpg" />
          </AutoplaySlider>
        ) :
          <AutoplaySlider fillParent={true} bullets={false} buttons={true} play={true} interval={3000}>
            <Image data-src="/img/testing1.jpg" />
            <Image data-src="/img/testing2.jpg" />
            <Image data-src="/img/testing3.jpg" />
          </AutoplaySlider>
    }
  </Media>
  );
}