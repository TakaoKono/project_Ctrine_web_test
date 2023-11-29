'use client';
import React, { useState } from 'react';

import { Header } from '@/components/common/Header/Header';
import { Footer } from '@/components/common/Footer/Footer';
import { UserMenu } from '@/components/common/UserMenu/UserMenu';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

export default function WindowDimensionsWrapper({ children }: { children: React.ReactNode }) {
    const { windowDimensions, ready } = useWindowDimensionsContext();

    const [isModalVisible, setModalVisible] = useState(false);

    // アカウントメニューの表示切替
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // 初期表示では windowDimensions.width: 0で描画されるため
    // ready で画面幅を取れてから描画する
    return ready ? (
        <>
            <Header toggleModal={toggleModal} />
            <main>{children}</main>
            <Footer windowDimensionWidth={windowDimensions.width} />
            <UserMenu
                windowDimensionHeight={windowDimensions.height}
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
        </>
    ) : null;
}
