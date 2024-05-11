import { useCallback, useEffect, useMemo, useState } from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/admin-panel/redux-store";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { IProductFe } from "@/models/client/ProductFe";

export const useProdottiScene = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showProductForm, setShowProductForm] = useState(false);
  const productList = useSelector(selectors.getProductList);

  const handleDeleteProducts = useCallback(
    (productId: string) => {
      dispatch(actions.deleteProductsByProductId.request({ productId }));
    },
    [dispatch],
  );

  const columns = useMemo<
    GridColDef<{
      _id: string;
      name: string;
      description: string;
      price: number;
    }>[]
  >(() => {
    return [
      {
        field: "id",
      },
      {
        field: "name",
        flex: 1,
      },
      {
        field: "description",
        flex: 2,
      },
      {
        field: "price",
      },
      {
        field: "delete",
        headerName: " ",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => handleDeleteProducts(params.row._id)}>
              <DeleteIcon />
            </IconButton>
          );
        },
      },
      {
        field: "details",
        headerName: " ",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => navigate(params.row._id)}>
              <VisibilityIcon />
            </IconButton>
          );
        },
      },
    ];
  }, [handleDeleteProducts, navigate]);

  const rows = useMemo(() => {
    return productList.map((product) => ({
      ...product,
      id: product._id,
    }));
  }, [productList]);

  const handleNewProduct = useCallback(() => {
    setShowProductForm((prev) => !prev);
  }, []);

  useEffect(() => {
    // @ts-ignore
    dispatch(actions.getProducts.request({}));
  }, [dispatch]);

  return {
    handleNewProduct,
    rows,
    columns,
    showProductForm,
  };
};
