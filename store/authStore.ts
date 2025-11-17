import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: (value: boolean) => set({isAuthenticated: value}),
}));

export default useAuthStore;