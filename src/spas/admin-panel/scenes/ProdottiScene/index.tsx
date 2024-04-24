import React, { memo } from "react";
import { useProdottiScene } from "./index.hooks";
import Typography from "@mui/material/Typography";

type ProdottiSceneProps = {};

export const ProdottiScene = memo(({}: ProdottiSceneProps) => {
  const {} = useProdottiScene();

  return <Typography>Prodotti</Typography>;
});

ProdottiScene.displayName = "ProdottiScene";
