import { useState } from 'react';

interface UseModalReturn extends Array<boolean | (() => void)> {
    0: boolean;
    1: () => void;
    2: () => void;
}

const useModal = (initialState: boolean = false): UseModalReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return [
        isOpen,
        open,
        close,
    ] as UseModalReturn;
};

export { useModal };
