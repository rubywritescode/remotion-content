import styled from "styled-components";

const Block = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 70px 300px 70px;
`

const Line = styled.p`
  margin: 0;
  padding: 8px 18px;
  border-radius: 12px;
  background: #c76566;
  font-weight: bold;
  color: white;
  font-size: 90px;
`

export const TextBlock = ({text}) => {
  const lines = text.split(`\n`)

  return (
    <Block>
      {lines.map(line => 
        <Line>{line}</Line>
      )}
    </Block>
  )
}