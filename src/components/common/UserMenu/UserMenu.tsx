'use client';

import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useRouter } from 'next/navigation';

import Exit from '@/components/common/Icons/Exit/Exit';
import Human from '@/components/common/Icons/Human/Human';
import { useAuthContext } from '@/contexts/authContext';

type Props = {
    windowDimensionHeight: number;
    isModalVisible?: boolean;
    toggleModal: () => void;
};

export function UserMenu({ windowDimensionHeight, isModalVisible = false, toggleModal }: Props) {
    const router = useRouter();
    const { logout } = useAuthContext();

    const [isAcountSettingHovered, setIsAcountSettingHovered] = useState(false);
    const [isLogoutHovered, setIsLogoutHovered] = useState(false);

    // リンククリック
    const handleLinkClick = (link: string) => {
        router.push(link);
        toggleModal();
    };

    // ログアウト
    const logoutSubmit = async (): Promise<void> => {
        await logout();
    };

    const styles = StyleSheet.create({
        modalBackground: {
            height: windowDimensionHeight,
        },
        container: {
            position: 'absolute',
            top: 96,
            right: 40,
            display: 'flex',
            flexDirection: 'column',
            width: 162,
            height: 102,
            backgroundColor: '#fff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            border: '1px #C0C0C0 solid',
        },
        menuItemContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            width: '100%',
            height: 50,
            transition: 'background-color 0.3s',
        },
        menuItemText: {
            pointerEvents: 'auto',
            marginLeft: 8,
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
        outHoverText: {
            color: '#000',
        },
        inHoverText: {
            color: '#0857C3',
        },
    });

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
        >
            <Pressable onPress={toggleModal}>
                <View style={styles.modalBackground}>
                    <View style={styles.container}>
                        <View>
                            <Pressable
                                style={styles.menuItemContainer}
                                onHoverIn={() => setIsAcountSettingHovered(true)}
                                onHoverOut={() => setIsAcountSettingHovered(false)}
                                onPress={() => handleLinkClick('/')} // TODO: アカウント設定に遷移
                            >
                                <Human fill={isAcountSettingHovered ? '#0857C3' : '#C0C0C0'} />
                                <Text
                                    style={[
                                        styles.menuItemText,
                                        isAcountSettingHovered
                                            ? styles.inHoverText
                                            : styles.outHoverText,
                                    ]}
                                >
                                    アカウント設定
                                </Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={styles.menuItemContainer}
                                onHoverIn={() => setIsLogoutHovered(true)}
                                onHoverOut={() => setIsLogoutHovered(false)}
                                onPress={logoutSubmit}
                            >
                                <Exit fill={isLogoutHovered ? '#0857C3' : '#C0C0C0'} />
                                <Text
                                    style={[
                                        styles.menuItemText,
                                        isLogoutHovered ? styles.inHoverText : styles.outHoverText,
                                    ]}
                                >
                                    ログアウト
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Pressable>
        </Modal>
    );
}
