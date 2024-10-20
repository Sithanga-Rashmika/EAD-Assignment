// product reducer File
// IT21041716 Sandaruwan W.S.R
import { productConstants } from "../actions/constants";

const initState = {
  products: [],
  catProducts: [],
  notifications: [],
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.CREATE_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.CREATE_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
      break;
    case productConstants.CREATE_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.FETCH_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.FETCH_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload,
      };
      break;
    case productConstants.FETCH_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.FETCH_PRODUCT_CAT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.FETCH_PRODUCT_CAT_SUCCESS:
      state = {
        ...state,
        loading: false,
        catProducts: action.payload,
      };
      break;
    case productConstants.FETCH_PRODUCT_CAT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.DELETE_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.DELETE_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.DELETE_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.UPDATE_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.UPDATE_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.UPDATE_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.TOPUP_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.TOPUP_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.TOPUP_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.NOTIFICATION_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.NOTIFICATION_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        notifications: action.payload,
      };
      break;
    case productConstants.NOTIFICATION_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case productConstants.VENDOR_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.VENDOR_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload,
      };
      break;
    case productConstants.VENDOR_PRODUCT_FALIURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
