'use client';
import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Linking } from 'react-native';

type Props = {
    isChecked: boolean;
    text: string;
    linkText?: string;
    link?: string;
    handleSubmit: () => void;
};

const Checkbox = ({ isChecked, text, linkText, link, handleSubmit }: Props) => {
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    // チェックアイコンの切り替えとhandleSubmitを実行
    const onClick = () => {
        handleSubmit();
    };

    // リンククリック
    const handleLinkClick = () => {
        if (!link) return;
        Linking.openURL(link);
    };

    // リンクテキストを正規表現で検出し、リンク化する
    const parts = text.split(new RegExp(`(${linkText})`, 'g'));

    return (
        <View style={styles.container}>
            <Pressable style={styles.checkboxIcon} onPress={() => onClick()}>
                <Image
                    style={{ width: 24, height: 24 }}
                    source={{ uri: `/checkbox_${isChecked ? 'on' : 'off'}.svg` }}
                    alt="checkbox"
                />
            </Pressable>
            <Text style={styles.text}>
                {parts.map((part, index) =>
                    part === linkText ? (
                        <Pressable
                            key={index}
                            onHoverIn={() => setIsLinkHovered(true)}
                            onHoverOut={() => setIsLinkHovered(false)}
                            onPress={handleLinkClick}
                        >
                            <Text
                                key={index}
                                style={isLinkHovered ? styles.hoverLinkText : styles.linkText}
                            >
                                {part}
                            </Text>
                        </Pressable>
                    ) : (
                        <Text key={index}>{part}</Text>
                    )
                )}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 48,
    },
    checkboxIcon: {
        marginRight: 8,
        width: 24,
        height: 24,
    },
    text: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'YuGothic',
        fontWeight: '500',
        wordWrap: 'break-word',
    },
    linkText: {
        color: '#0857C3',
        textDecorationLine: 'underline',
    },
    hoverLinkText: {
        color: 'rgba(0, 0, 0, 0.40)',
        textDecorationLine: 'underline',
    },
});

export default Checkbox;
