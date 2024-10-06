import { productConstants } from "./constants";
import axios from "axios";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

export const createProducts = (form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.CREATE_PRODUCT_REQUEST });
    try {
      const res = await axios.post(
        "http://localhost:5154/api/Product/add",
        form
      );

      if (res.status === 200) {
        dispatch({
          type: productConstants.CREATE_PRODUCT_SUCCESS,
          payload: res.data,
        });

        toast.success("New Product Added..!", { id: "t5" });
      } else {
        dispatch({ type: productConstants.CREATE_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t1" });
      }
    } catch (error) {
      if (error.response) {
        dispatch({ type: productConstants.CREATE_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t2" });
      } else if (error.request) {
        dispatch({ type: productConstants.CREATE_PRODUCT_FALIURE });
        toast.error("Server not respond..!", { id: "t3" });
      }
    }
  };
};

export const retriveProducts = () => {
  return async (dispatch) => {
    dispatch({ type: productConstants.FETCH_PRODUCT_REQUEST });

    try {
      const res = await axios.get("http://localhost:5154/api/product");

      if (res.status === 200) {
        dispatch({
          type: productConstants.FETCH_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({ type: productConstants.FETCH_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t1" });
      }
    } catch (error) {
      if (error.response) {
        dispatch({ type: productConstants.FETCH_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t2" });
      } else if (error.request) {
        dispatch({ type: productConstants.FETCH_PRODUCT_FALIURE });
        toast.error("Server not respond..!", { id: "t3" });
      }
    }
  };
};

export const DeleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.DELETE_PRODUCT_REQUEST });
    try {
      const res = await axios.delete(`http://localhost:5154/api/product/${id}`);
      if (res.status === 204) {
        dispatch({ type: productConstants.DELETE_PRODUCT_SUCCESS });

        Swal.fire("Deleted!", "Product has been Deleted.", "success").then(
          () => {
            window.location.reload();
          }
        );
      } else {
        dispatch({ type: productConstants.DELETE_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t1" });
      }
    } catch (error) {
      if (error.response) {
        dispatch({ type: productConstants.DELETE_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t2" });
      } else if (error.request) {
        dispatch({ type: productConstants.DELETE_PRODUCT_FALIURE });
        toast.error("Server not respond..!", { id: "t3" });
      }
    }
  };
};

export const updateProducts = (id, form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.UPDATE_PRODUCT_REQUEST });
    try {
      const res = await axios.put(
        `http://localhost:5154/api/product/${id}`,
        form
      );

      if (res.status === 204) {
        dispatch({
          type: productConstants.UPDATE_PRODUCT_SUCCESS,
        });
        toast.success("Product Updated..!", { id: "t5" });
        window.location.reload();
      } else {
        dispatch({ type: productConstants.UPDATE_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t1" });
      }
    } catch (error) {
      if (error.response) {
        dispatch({ type: productConstants.UPDATE_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t2" });
      } else if (error.request) {
        dispatch({ type: productConstants.UPDATE_PRODUCT_FALIURE });
        toast.error("Server not respond..!", { id: "t3" });
      }
    }
  };
};


export const retriveProductsByCategory = (type) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.FETCH_PRODUCT_CAT_REQUEST });

    try {
      const res = await axios.get(`http://localhost:5154/api/product/category/${type}`);

      if (res.status === 200) {
        dispatch({
          type: productConstants.FETCH_PRODUCT_CAT_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({ type: productConstants.FETCH_PRODUCT_CAT_FALIURE });
        toast.error("Something went wrong..!", { id: "t1" });
      }
    } catch (error) {
      if (error.response) {
        dispatch({ type: productConstants.FETCH_PRODUCT_CAT_FALIURE });
        toast.error("Something went wrong..!", { id: "t2" });
      } else if (error.request) {
        dispatch({ type: productConstants.FETCH_PRODUCT_CAT_FALIURE });
        toast.error("Server not respond..!", { id: "t3" });
      }
    }
  };
};


export const topUpStock = (id, form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.TOPUP_PRODUCT_REQUEST });
    try {
      const res = await axios.put(
        `http://localhost:5154/api/product/stock/update/${id}`,
        form
      );
      if (res.status === 200) {
        dispatch({
          type: productConstants.TOPUP_PRODUCT_SUCCESS,
        });
        toast.success("Item Quntity Top Uped..!", { id: "t5" });
        window.location.reload();
      } else {
        dispatch({ type: productConstants.TOPUP_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t1" });
      }
    } catch (error) {
      if (error.response) {
        dispatch({ type: productConstants.TOPUP_PRODUCT_FALIURE });
        toast.error("Something went wrong..!", { id: "t2" });
      } else if (error.request) {
        dispatch({ type: productConstants.TOPUP_PRODUCT_FALIURE });
        toast.error("Server not respond..!", { id: "t3" });
      }
    }
  };
};