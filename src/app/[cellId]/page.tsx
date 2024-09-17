import { DB } from "../db/abstractions/Db"
import { getUserData } from "../db/useDb"
import CellPageClient from "./page-client"

type CellPageProps = {
  readonly params: {
    readonly cellId: string
  }
}

export default async function CellPage({ params }: CellPageProps) {
  const db = await getUserData();  // Attendi la risoluzione del Promise

  if (!db || !db.game) {
    return <div>Errore: Database non trovato o 'game' mancante</div>; // Error handling
  }

  return <CellPageClient db={db} />;
}