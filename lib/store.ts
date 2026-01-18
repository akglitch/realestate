import { create } from 'zustand'

interface UIStore {
    isMenuOpen: boolean
    toggleMenu: () => void
    closeMenu: () => void
}

export const useUIStore = create<UIStore>((set) => ({
    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isMenuOpen: false }),
}))
