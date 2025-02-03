// background.tsx
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  /* Base colorful background (could be a gradient or an image) */
  background: linear-gradient(135deg, #283048, #859398, #ff8c00, #6a11cb);
  /* SVG grid pattern overlay – note: URL-encode the SVG content */
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><rect x='0' y='0' width='30' height='30' fill='none' stroke='%23ffffff' stroke-opacity='0.2' stroke-width='1'/></svg>");
  background-repeat: repeat;
`;

export default Background;
