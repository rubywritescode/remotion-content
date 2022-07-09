import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, interpolate } from 'remotion'
import styled from 'styled-components'
import backgroundImage from './Content/assets/pink-clouds.jpeg';
import { AnimatedBackground } from './Content/AnimatedBackground';
import { TextBlock } from './Content/TextBlock';

import './styles.css';

const text = "here is an inexplicably\nlong block of text that\nis probably plagiarized\nfrom an uncredited\nsource and lazily\nrepackaged as video\nwith a trendy sound\nin order to farm\nengagement by\ntricking your brain into\nreading all this way to\nplease the algorithm.\nclouds are pretty."

export const Content1 = () => {
  return (
    <>
      <AnimatedBackground bgImage={backgroundImage} />
      <TextBlock text={text} />
    </>
  )
}