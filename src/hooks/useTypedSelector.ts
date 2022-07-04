import {TypedUseSelectorHook, useSelector} from "react-redux";
import {useTypedSelector} from "../store";

export const useTypedSelectors:TypedUseSelectorHook<useTypedSelector> = useSelector