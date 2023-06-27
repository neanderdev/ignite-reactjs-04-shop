import { keyframes } from '@stitches/react';
import Image from 'next/image';
import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import { useContext, useState } from 'react';

import { CartShoppingContext } from '../../contexts/CartShoppingContext';

import { CartShopping } from '../CartShopping';

import { HeaderContainer, ShoppingCartButton } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
    const [cartShoppingIsOpen, setCartShoppingIsOpen] = useState(false)
    const [aimation, setAnimation] = useState('')

    const { cartShopping } = useContext(CartShoppingContext)

    const openAnimation = keyframes({
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
    });

    const closeAnimation = keyframes({
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
    });

    function openCartShopping() {
        setAnimation(`${openAnimation} 200ms`)

        setCartShoppingIsOpen(true)
    }

    function closeCartShopping() {
        setAnimation(`${closeAnimation} 200ms`)

        setTimeout(() => {
            setCartShoppingIsOpen(false)
        }, 150)
    }

    return (
        <HeaderContainer>
            <Link href="/">
                <Image src={logoImg} alt="" />
            </Link>

            <ShoppingCartButton
                onClick={openCartShopping}
            >
                {cartShopping.length > 0 && <span>{cartShopping.length}</span>}

                <Handbag weight="bold" size={24} />
            </ShoppingCartButton>

            {cartShoppingIsOpen &&
                <CartShopping
                    styles={{ animation: `${aimation}` }}
                    closeCartShopping={closeCartShopping}
                />
            }
        </HeaderContainer>
    )
}