'use client';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import Chapter from '@/components/common/Icons/Chapter/Chapter';
import Code from '@/components/common/Icons/Code/Code';
import Discription from '@/components/common/Icons/Discription/Discription';
import Document from '@/components/common/Icons/Document/Document';

type Props = {
    windowDimensionWidth: number;
    target: string;
    handleClickIcon: (target: string) => void;
};

const VideoMenu = ({ windowDimensionWidth, target, handleClickIcon }: Props) => {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: windowDimensionWidth > 1023 ? 'column' : 'row',
            alignItems: 'center',
            paddingVertical: 40,
            paddingHorizontal: 144,
            backgroundColor: '#fff',
            boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
        },
        iconButton: {
            display: 'flex',
            alignItems: 'center',
            width: 70,
            height: 69,
        },
        activeBgcolor: {
            backgroundColor: '#0857C3',
        },
        iconContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
            marginBottom: 4,
            width: 'auto',
            height: 40,
        },
        discriptionIcon: {
            width: 30,
            height: 7.5,
        },
        chapterIcon: {
            width: 30,
            height: 30,
        },
        documentIcon: {
            width: 30,
            height: 30,
        },
        codeIcon: {
            width: 30,
            height: 30,
        },
        text: {
            color: '#C0C0C0',
            fontSize: 10,
            fontFamily: 'YuGothic',
            fontWeight: '700',
            wordWrap: 'break-word',
        },
        nomalColor: {
            color: '#C0C0C0',
        },
        activeColor: {
            color: '#fff',
        },
    });

    return (
        <View style={styles.container}>
            <View>
                <Pressable
                    style={[styles.iconButton, target === 'discription' && styles.activeBgcolor]}
                    onPress={() => handleClickIcon('discription')}
                >
                    <View style={styles.iconContainer}>
                        <Discription fill={target === 'discription' ? '#fff' : '#C0C0C0'} />
                    </View>
                    <Text
                        style={[
                            styles.text,
                            target === 'discription' ? styles.activeColor : styles.nomalColor,
                        ]}
                    >
                        動画概要
                    </Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={[styles.iconButton, target === 'chapter' && styles.activeBgcolor]}
                    onPress={() => handleClickIcon('chapter')}
                >
                    <View style={styles.iconContainer}>
                        <Chapter fill={target === 'chapter' ? '#fff' : '#C0C0C0'} />
                    </View>
                    <Text
                        style={[
                            styles.text,
                            target === 'chapter' ? styles.activeColor : styles.nomalColor,
                        ]}
                    >
                        チャプター
                    </Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={[styles.iconButton, target === 'document' && styles.activeBgcolor]}
                    onPress={() => handleClickIcon('document')}
                >
                    <View style={styles.iconContainer}>
                        <Document fill={target === 'document' ? '#fff' : '#C0C0C0'} />
                    </View>
                    <Text
                        style={[
                            styles.text,
                            target === 'document' ? styles.activeColor : styles.nomalColor,
                        ]}
                    >
                        講義資料
                    </Text>
                </Pressable>
            </View>
            <View>
                <Pressable
                    style={[styles.iconButton, target === 'code' && styles.activeBgcolor]}
                    onPress={() => handleClickIcon('code')}
                >
                    <View style={styles.iconContainer}>
                        <Code fill={target === 'code' ? '#fff' : '#C0C0C0'} />
                    </View>
                    <Text
                        style={[
                            styles.text,
                            target === 'code' ? styles.activeColor : styles.nomalColor,
                        ]}
                    >
                        コード
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default VideoMenu;
