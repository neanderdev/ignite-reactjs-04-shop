import { createContext, ReactNode, useState } from 'react';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
    quantity?: number,
}

interface CartShoppingType {
    cartShopping: Product[];
    addItem: (item: Product) => void;
    removeItem: (item: Product) => void;
}

export const CartShoppingContext = createContext({} as CartShoppingType)

interface CartShoppingContextProviderProps {
    children: ReactNode;
}

export function CartShoppingContextProvider({
    children,
}: CartShoppingContextProviderProps) {
    const [cartShopping, setCartShopping] = useState<Product[]>([]);

    function addItem(item: Product) {
        const filter = cartShopping.filter(product => product.id === item.id)

        if (filter.length > 0) {
            return
        } else {
            setCartShopping(prevState => [...prevState, { ...item, quantity: 1 }])
        }
    }

    function removeItem(item: Product) {
        const updatedList = cartShopping.filter(product => product.id !== item.id)

        setCartShopping(updatedList)
    }

    return (
        <CartShoppingContext.Provider value={{
            cartShopping,
            addItem,
            removeItem,
        }}>
            {children}
        </CartShoppingContext.Provider>
    )
}