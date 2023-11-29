'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ScaledSize, useWindowDimensions } from 'react-native';

// Contextの型
export type ContextType = {
    windowDimensions: ScaledSize;
    ready: boolean;
};

const WindowDimensionsContext = createContext<ContextType | undefined>(undefined);

// コンテキストの値を取得
export function useWindowDimensionsContext() {
    const context = useContext(WindowDimensionsContext);
    if (context === undefined) {
        throw new Error(
            'useWindowDimensionsContext must be used within a WindowDimensionsProvider'
        );
    }

    return context;
}

// コンテキストの設定
export function WindowDimensionsProvider({ children }: { children: React.ReactNode }) {
    const windowDimensions = useWindowDimensions();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (windowDimensions.width > 0) {
            setReady(true);
        }
    }, [windowDimensions.width]);

    return (
        <WindowDimensionsContext.Provider value={{ windowDimensions, ready }}>
            {children}
        </WindowDimensionsContext.Provider>
    );
}
