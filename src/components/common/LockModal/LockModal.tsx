'use client';
import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

import Button from '@/components/common/Button/Button';

type Props = {
    windowDimensionWidth: number;
    handleClickButton: () => void;
    toggleModal: () => void;
};

const LockModal = ({ windowDimensionWidth, handleClickButton, toggleModal }: Props) => {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 40,
            paddingHorizontal: windowDimensionWidth > 768 ? 0 : 20,
            width: windowDimensionWidth > 768 ? 688 : 350,
            backgroundColor: '#fff',
            boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
        },
        headline: {
            marginBottom: 16,
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            fontFamily: 'YuGothic',
            fontWeight: '700',
            wordWrap: 'break-word',
        },
        description: {
            marginBottom: 40,
            textAlign: 'center',
            color: '#000',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
        closeText: {
            marginTop: 20,
            color: '#000',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
            textDecorationLine: 'underline',
        },
    });

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 80, height: 80, marginBottom: 24 }}
                source={{ uri: `/lock_icon.svg` }}
                alt="lock_icon"
            />
            <Text style={styles.headline}>{`続きを見るには${
                windowDimensionWidth > 768 ? '' : '\n'
            }会員登録が必要です。`}</Text>
            <Text style={styles.description}>{`会員登録いただくと、${
                windowDimensionWidth > 768 ? '' : '\n'
            }XXX以上のコースが学び放題！`}</Text>
            <Button text="会員登録する" isNext handleSubmit={handleClickButton} />
            <Pressable onPress={toggleModal}>
                <Text style={styles.closeText}>またあとで</Text>
            </Pressable>
        </View>
    );
};

export default LockModal;
