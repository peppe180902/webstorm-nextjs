import React, { memo } from "react";
import { useUtentiScene } from "./index.hooks";
import Typography from "@mui/material/Typography";

type UtentiSceneProps = {};

export const UtentiScene = memo(({}: UtentiSceneProps) => {
  const {} = useUtentiScene();

  return <Typography>Utenti</Typography>;
});

UtentiScene.displayName = "UtentiScene";
