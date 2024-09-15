import { Cell } from '@/lib/store/useGrid';
import React from 'react'
import Empty from './components/Empty';
import Home from './components/Home';
import Build from './components/Build';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';

type CellBaseProps = {
	readonly cell: Cell
	readonly children: React.ReactNode
	readonly button?: boolean
	readonly onClick?: () => void
}

export default function CellBase({ cell, children, button, onClick }: CellBaseProps) {
	const router = useRouter()


	const cellType = cell.type as keyof typeof cellDictionary

	const cellDictionary = {
		"empty": <Empty cell={cell} />,
		"build": <Build cell={cell} />,
		"Home": <Home cell={cell} />
	}

	return (
		<Stack
			component={button ? ButtonBase : Stack}
			onClick={() => onClick ? onClick() : router.push(`/${cell.cellId}`)}
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				borderRadius: '10px',
				color: 'white',
				fontSize: '1.5rem',
			}}
		>
			<Typography
			>
				{cell.build && 'Entra'}
			</Typography>
			{children}
		</Stack>
	)
}
