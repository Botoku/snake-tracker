import { create } from "zustand";
import { Snake } from "./types";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: null | User;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
}
interface SnakeList {
  snakes: null | Snake[];
  setSnakes: (snakes: Snake[]) => void;
  addSnake: (snake: Snake) => void;
}

export const useUserInfoStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  setUser: (user) => set({ user, isAuthenticated: true }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
}));

export const useSnakeListStore = create<SnakeList>((set) => ({
  snakes: null,
  setSnakes: (snakes) => set({ snakes }),
  addSnake: (snake) =>
    set((state) => ({ snakes: [...(state.snakes ?? []), snake] })),
}));
