import { create } from "zustand";

export enum EnumAction {
  ACTIVATE = 'activate',
  DEACTIVATE = 'deactivate',
}

export type State = {
  id: number;
  action: EnumAction;
}

export type Action = {
  openDialog: (id: number, action: EnumAction) => void;
}

export const usePropertyStore = create<State & Action>(set => ({
  id: 0,
  action: EnumAction.ACTIVATE,
  
  openDialog: (id: number, action: EnumAction) => set({ id, action }),
}))