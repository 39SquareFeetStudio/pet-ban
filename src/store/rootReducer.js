import { authSlice } from "../features/auth/authSlice";

const rootReducer = {
  auth: authSlice.reducer,
};

export default rootReducer;
