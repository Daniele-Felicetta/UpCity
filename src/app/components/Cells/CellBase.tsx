import { Cell } from '@/lib/store/useGrid';
import React from 'react'
import Empty from './components/Empty';
import Home from './components/Home';
import Build from './components/Build';


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
		<>
			{cellDictionary[cellType]
				?? cellDictionary.empty}
		</>
	)
}
