import { createContext, ReactNode, useEffect, useState } from 'react';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    unitAmount: number;
    price: string;
    defaultPriceId: string;
    quantity: number,
}

interface CartShoppingType {
    cartShopping: Product[];
    amount: string;
    addItem: (item: Product) => void;
    removeItem: (item: Product) => void;
    decreaseItemQuantity: (item: Product) => void;
    increaseItemQuantity: (item: Product) => void;
}

export const CartShoppingContext = createContext({} as CartShoppingType)

interface CartShoppingContextProviderProps {
    children: ReactNode;
}

export function CartShoppingContextProvider({
    children,
}: CartShoppingContextProviderProps) {
    const [cartShopping, setCartShopping] = useState<Product[]>([]);
    const [amount, setAmount] = useState('');

    function addItem(item: Product) {
        const filter = cartShopping.filter(product => product.id === item.id)

        if (filter.length > 0) {
            return
        } else {
            setCartShopping(prevState => [...prevState, item])
        }
    }

    function removeItem(item: Product) {
        const updatedList = cartShopping.filter(product => product.id !== item.id)

        setCartShopping(updatedList)
    }

    function decreaseItemQuantity(item: Product) {
        if (item.quantity <= 1) {
            return
        }

        const updatedList = cartShopping.map(product => {
            if (product.id === item.id) {
                return {
                    quantity: product.quantity--,
                    ...product,
                }
            }

            return {
                ...product,
            }
        })

        setCartShopping(updatedList)
    }

    function increaseItemQuantity(item: Product) {
        const updatedList = cartShopping.map(product => {
            if (product.id === item.id) {
                return {
                    quantity: product.quantity++,
                    ...product,
                }
            }

            return {
                ...product,
            }
        })

        setCartShopping(updatedList)
    }

    useEffect(() => {
        const total = cartShopping.reduce((acc, product) => {
            return (acc + (product.unitAmount * product.quantity));
        }, 0)

        const totalFormatted = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total / 100)

        setAmount(totalFormatted)
    }, [cartShopping])

    return (
        <CartShoppingContext.Provider value={{
            cartShopping,
            amount,
            addItem,
            removeItem,
            decreaseItemQuantity,
            increaseItemQuantity,
        }}>
            {children}
        </CartShoppingContext.Provider>
    )
}