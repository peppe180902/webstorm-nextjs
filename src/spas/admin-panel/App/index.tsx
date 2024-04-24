import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";
import {
  DashboardScene,
  LoginScene,
  ProdottiScene,
  UtentiScene,
} from "@/spas/admin-panel/scenes";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/admin-panel">
        <Routes>
          <Route path="/" element={<span>TEST</span>} />
          <Route path="/login" element={<LoginScene />} />
          <Route path="/dashboard" element={<DashboardScene />}>
            <Route path="users" element={<UtentiScene />} />
            <Route path="products" element={<ProdottiScene />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <AppSnackbar
        open={open}
        message={message}
        severity={type}
        onClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default memo(App);
