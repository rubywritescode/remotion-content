import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, interpolate } from 'remotion'
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`

export const AnimatedBackground = ({bgImage, children}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [1, 1.2])

  return(
    <Container bgImage={bgImage} style={{transform: `scale(${scale})`}}>
      {children}
    </Container>
  )
}