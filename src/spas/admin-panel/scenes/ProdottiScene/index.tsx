import React, { memo } from "react";
import { useProdottiScene } from "./index.hooks";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AddProductForm } from "@/components/AddProductForm";

type ProdottiSceneProps = {};

export const ProdottiScene = memo(({}: ProdottiSceneProps) => {
  const { handleNewProduct, rows, columns, showProductForm } =
    useProdottiScene();

  console.log(process.env.ADMIN_SECRET_COOKIE_PASSWORD); // Assicurati di rimuovere questo dopo la verifica!

  return (
    <Stack
      sx={{
        p: 2,
        width: "100%",
        height: "100vh",
      }}
      spacing={2}
    >
      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNewProduct}>
          {showProductForm ? "Chiudi form nuovo" : "Mostra form nuovo"} prodotto
        </Button>
      </Stack>
      {showProductForm && <AddProductForm />}
      <DataGrid sx={{ flex: 1 }} columns={columns} rows={rows} />
    </Stack>
  );
});

ProdottiScene.displayName = "ProdottiScene";
