import { create } from 'zustand'

export type Cell = {
  readonly cellId: string,
  readonly type: string
  readonly build?: Build
}

type Build = {
  readonly shop?:Shop,
  readonly unlocked?: boolean,
  readonly buildType?: string,
  readonly buildLevel?: number,
  readonly buildColor?: string,
  readonly buildCost?: number,
  readonly buildIncome?: number,
  readonly buildHealth?: number,
  readonly buildDamage?: number,
  readonly buildRange?: number,
  readonly buildSpeed?: number,
  readonly buildSpecial?: string,
  readonly buildSpecialValue?: number,
  readonly buildSpecial2?: string,
  readonly buildSpecialValue2?: number,
}

type Shop={
  readonly shopId: string,
  readonly shopName: string,
  readonly shopLevel: number,
  readonly shopColor: string,
}

type useGridType = {
  readonly gameGrid:Cell[][],
  readonly setGrid:(newGrid: Cell[][]) => void
}

export const useGrid = create<useGridType>((set) => ({
  gameGrid: [[]],
  setGrid: (newGrid:Cell[][]) => set({ gameGrid: newGrid })
}))