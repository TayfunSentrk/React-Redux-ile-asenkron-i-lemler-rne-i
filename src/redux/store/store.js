import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";

import { thunk } from "redux-thunk";
import postReducer from "../reducers/PostReducer";
