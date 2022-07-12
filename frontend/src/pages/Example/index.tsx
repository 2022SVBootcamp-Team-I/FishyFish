import * as React from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import mack from '../../assets/images/mack.png';

export default function Example() {
  return (
    <Grid>
      <p> 맛잇는 고등어 *^^*</p>
        <img src={mack} width={400} height={4000} alt="mack"/>
        <p></p>
        <Link to="/">
        <button>돌아가기</button>
        </Link>
    </Grid>
  );
}