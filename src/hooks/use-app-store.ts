import { RootState } from "@/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// Typed version of useSelector for better state inference
export const useAppStore: TypedUseSelectorHook<RootState> = useSelector;
