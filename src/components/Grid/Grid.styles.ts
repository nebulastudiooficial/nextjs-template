import { styled } from "@/stitches.config";


export const Grid = styled('div', {
  width: '100%',
  maxWidth:'1250px',

  margin: '0 auto',
  padding: "$20 $5",

  variants: {
    bgColor: {
      white: {
        backgroundColor: '$white',
      },
      dark: {
        backgroundColor: "$dark"
      }
    }
  }
})