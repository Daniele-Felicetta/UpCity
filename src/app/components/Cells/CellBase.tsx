import { Cell } from '@/lib/store/useGrid';
import React from 'react'
import Empty from './components/Empty';
import Home from './components/Home';
import Build from './components/Build';
import { Box } from '@mui/material';


type CellBaseProps = {
	readonly cell: Cell
}


export default function CellBase({ cell }: CellBaseProps) {
	const cellType = cell.type as keyof typeof cellDictionary

	const cellDictionary = {
		"empty": <Empty cell={cell} />,
		"build": <Build cell={cell} />,
		"Home": <Home cell={cell} />
	}


	return (
		<Box
			sx={{
				display: 'flex',
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
			{cellDictionary[cellType]
				?? cellDictionary.empty}
		</Box>
	)
}
