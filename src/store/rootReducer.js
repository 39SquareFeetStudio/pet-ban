import { authSlice } from "../features/auth/auth-Slice";
import mainNavSlice from "../features/mainNav/mainNav-Slice";

const rootReducer = {
  auth: authSlice.reducer,
  mainNav: mainNavSlice.reducer,
};

export default rootReducer;
