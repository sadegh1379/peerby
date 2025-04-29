"use client"
import { DirectionProvider as RadixDirectionProvider } from '@radix-ui/react-direction';

const DirectionProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <RadixDirectionProvider dir='rtl'>{children}</RadixDirectionProvider>;
};

export default DirectionProvider;
