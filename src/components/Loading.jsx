
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'


// const Div = styled(Typography)`

//   height: 50px;
//   aspect-ratio: 2.5;
//   --_g: no-repeat radial-gradient(farthest-side,#000 90%,#0000);
//   background:var(--_g), var(--_g), var(--_g), var(--_g);
//   background-size: 20% 50%;
//   animation: l43 1s infinite linear; 
// @keyframes l43 {
//   0%     {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
//   16.67% {background-position: calc(0*100%/3) 0   ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
//   33.33% {background-position: calc(0*100%/3) 100%,calc(1*100%/3) 0   ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
//   50%    {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 100%,calc(2*100%/3) 0   ,calc(3*100%/3) 50% }
//   66.67% {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 100%,calc(3*100%/3) 0   }
//   83.33% {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 100%}
//   100%   {background-position: calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% }
// }
// `;


// const DivTypo= styled(Typography)`
//   font-weight: bold;
//   font-family: monospace;
//   display: inline-grid;
//   font-size: 30px;
// :before,
// :after {
//   content:"Loading...";
//   grid-area: 1/1;
//   -webkit-mask-size: 2ch 100%,100% 100%;
//   -webkit-mask-repeat: no-repeat;
//   -webkit-mask-composite: xor;
//           mask-composite:exclude;
//   animation: l37 1s infinite;
// }
// :before {
//   -webkit-mask-image:
//     linear-gradient(#000 0 0),
//     linear-gradient(#000 0 0);
// }
// :after {
//   -webkit-mask-image:linear-gradient(#000 0 0);
//   transform: scaleY(0.5);
// }

// @keyframes l37{
//   0%    {-webkit-mask-position:1ch  0,0 0}
//   12.5% {-webkit-mask-position:100% 0,0 0}
//   25%   {-webkit-mask-position:4ch  0,0 0}
//   37.5% {-webkit-mask-position:8ch  0,0 0}
//   50%   {-webkit-mask-position:2ch  0,0 0}
//   62.5% {-webkit-mask-position:100% 0,0 0}
//   75%   {-webkit-mask-position:0ch  0,0 0}
//   87.5% {-webkit-mask-position:6ch  0,0 0}
//   100%  {-webkit-mask-position:3ch  0,0 0}
// }
// `;



const Loading = () => {
  const theme = useTheme();
  return (
    <>

      {/* <Box sx={{width:'100%',height:'100vh',background:theme.palette.background.default, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'auto'}}> */}

      <Typography>Loading</Typography>

      {/* </Box> */}
    </>
  )
}

export default Loading

