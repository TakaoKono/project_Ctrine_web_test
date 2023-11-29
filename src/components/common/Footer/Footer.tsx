'use client';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    windowDimensionWidth: number;
};

export function Footer({ windowDimensionWidth }: Props) {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: windowDimensionWidth > 1023 ? 'space-between' : 'flex-start',
            alignItems: windowDimensionWidth > 1023 ? 'center' : 'flex-start',
            padding: 40,
            width: '100%',
            backgroundColor: '#000',
            color: '#fff',
        },
        footerMenu: {
            display: 'flex',
            flexDirection: windowDimensionWidth > 1023 ? 'row' : 'column',
            justifyContent: 'space-around',
            alignItems: windowDimensionWidth > 1023 ? 'center' : 'flex-start',
            marginBottom: windowDimensionWidth > 1023 ? 20 : 40,
        },
        link: {
            pointerEvents: 'auto',
            marginRight: 24,
            marginBottom: windowDimensionWidth > 1023 ? 0 : 20,
            color: '#fff',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
        lastLink: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
        copylight: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.footerMenu}>
                <Text style={styles.link}>運営会社</Text>
                <Text style={styles.link}>利用規約</Text>
                <Text style={styles.link}>料金プラン</Text>
                <Text style={styles.link}>お問い合わせ</Text>
                <Text style={styles.lastLink}>プライバシーポリシー</Text>
            </View>
            <View>
                <Text style={styles.copylight}>© Datamix Co., Ltd. All rights reserved.</Text>
            </View>
        </View>
    );
}
