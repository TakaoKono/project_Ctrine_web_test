'use client';

import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';

import User from '@/components/common/Icons/User/User';

type Props = {
    toggleModal: () => void;
};

export function Header({ toggleModal }: Props) {
    const [isUserIconHovered, setIsUserIconHovered] = useState(false);

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 40,
            paddingLeft: 40,
            width: '100%',
            borderWidth: 1,
            borderColor: '#fff',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.40)',
        },
        logo: {
            marginTop: 30,
            marginBottom: 30,
            width: 143,
            height: 26,
        },
    });

    return (
        <header>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        source={{ uri: '/logo-pc.svg' }}
                        style={{ width: 143, height: 26 }}
                        alt="logo"
                    />
                </View>
                <View>
                    <Pressable
                        onHoverIn={() => setIsUserIconHovered(true)}
                        onHoverOut={() => setIsUserIconHovered(false)}
                        onPress={toggleModal}
                    >
                        <User fill={isUserIconHovered ? 'rgba(8, 87, 195, 0.4)' : '#0857C3'} />
                    </Pressable>
                </View>
            </View>
        </header>
    );
}

export default Header;
