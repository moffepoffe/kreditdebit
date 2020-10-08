import React, { useEffect } from "react";
import { connect, styled } from "frontity";

const size = {

  xs: '576px',
  s: '768px',
  md: '992px',
  lg: '1200px',
  desktop: '2560px'
}
const device = {
  xs: `(max-width: ${size.xs})`,
  s: `(max-width: ${size.s})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
};

export default connect(device);
