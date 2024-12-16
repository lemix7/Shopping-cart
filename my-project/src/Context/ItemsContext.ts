import { createContext } from "react"
import { ItemContextType } from "@/Types/ItemContextType"

export const ItemsContext = createContext<ItemContextType>({data:[]});

