import { create } from 'zustand'

interface CommandStore {
    command: string,
    setCommand: (id: string) => void
}

export const useCommandStore = create<CommandStore>()((set) => ({
    command: '',
    setCommand: (id) => set(() => ({ command: id }))
}))