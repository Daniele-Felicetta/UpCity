import { create } from 'zustand'

export type Cell = Readonly<Partial<{
  cellId: string,
  unlocked: boolean,
  buildType: string,
  buildLevel: number,
  buildColor: string,
  buildCost: number,
  buildIncome: number,
  buildHealth: number,
  buildDamage: number,
  buildRange: number,
  buildSpeed: number,
  buildSpecial: string,
  buildSpecialValue: number,
  buildSpecial2: string,
  buildSpecialValue2: number,
}>>;

type useGridType = {
  readonly gameGrid:Cell[][],
  readonly setGrid:(newGrid: Cell[][]) => void
}

export const useGrid = create<useGridType>((set) => ({
  gameGrid: [[]],
  setGrid: (newGrid:Cell[][]) => set({ gameGrid: newGrid })
}))