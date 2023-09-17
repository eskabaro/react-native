import {
   FC,
   useMemo,
   useState,
   Dispatch,
   createContext,
   SetStateAction,
   PropsWithChildren
} from "react"
import { IProduct } from "@/store/data"

type SetCatigoriesType<T> = Dispatch<SetStateAction<T>>
type StateType = ProductCartType | null

interface IContext {
   product: StateType
   setProduct: SetCatigoriesType<StateType>,
   totalPrice: number,
   setTotalPrice: SetCatigoriesType<number>
}

export interface ProductCartType extends IProduct {
   size: string
   quantity: number
}

export const Context = createContext<IContext>({
   product: null,
   setProduct: () => { },
   totalPrice: 1,
   setTotalPrice: () => { }
})

export const ContextProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
   const [product, setProduct] = useState<StateType>(null)
   const [totalPrice, setTotalPrice] = useState<number>(0)

   const contextValue: IContext = useMemo(
      () => ({
         product,
         setProduct,
         totalPrice,
         setTotalPrice
      }), [product, totalPrice]
   )

   return (
      <Context.Provider value={contextValue}>
         {children}
      </Context.Provider>
   )
}