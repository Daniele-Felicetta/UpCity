import { Cell } from '@/lib/store/useGrid'
import { Stack, StackProps } from '@mui/material'

type CellLayoutProps = {
	readonly cell: Cell
	readonly sx?: StackProps['sx']
	readonly children?:  React.ReactNode
}

export default function CellLayout({children, cell, sx }: CellLayoutProps) {
	return (
		<Stack
			sx={sx}
			direction='column'
		>
			{children}
			{cell.type}
		</Stack>
	)
}
