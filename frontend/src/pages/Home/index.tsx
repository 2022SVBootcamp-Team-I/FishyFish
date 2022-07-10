import * as React from "react";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <Grid>
      <p> 홈페이지 입니다</p>
        <Link to="/Example">
        <button>다른페이지로가기</button>
        </Link>
    </Grid>
  );
}