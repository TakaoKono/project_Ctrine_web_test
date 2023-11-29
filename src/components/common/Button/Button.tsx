'use client';
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import ArrowRight from '@/components/common/Icons/ArrowRight/ArrowRight';

type Props = {
    text: string;
    isMono?: boolean;
    isBlue?: boolean;
    isNext?: boolean;
    isDisabled?: boolean;
    handleSubmit: () => void;
};

const Button = ({
    text,
    isMono = false,
    isBlue = false,
    isNext = false,
    isDisabled = false,
    handleSubmit,
}: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Pressable
            style={[
                styles.container,
                isDisabled
                    ? styles.disabled
                    : isMono
                    ? styles.mono
                    : isBlue
                    ? styles.blue
                    : styles.nomal,
                isHovered && isBlue
                    ? styles.hoverBlue
                    : isHovered && isMono
                    ? styles.hoverMono
                    : isHovered
                    ? styles.hoverNomal
                    : null,
            ]}
            disabled={isDisabled}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            onPress={() => handleSubmit()}
        >
            <Text
                style={[
                    styles.text,
                    isMono ? styles.monoColor : isBlue ? styles.blueColor : styles.nomalColor,
                    isHovered && isBlue
                        ? styles.hoverBlueColor
                        : isHovered && isMono
                        ? styles.hoverMonoColor
                        : isHovered
                        ? styles.hoverNomalColor
                        : null,
                ]}
            >
                {text}
            </Text>
            {isNext && (
                <View style={styles.buttonIcon}>
                    <ArrowRight fill={isHovered ? '#0857C3' : '#fff'} />
                </View>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 400,
        minWidth: 330,
        width: '100%',
        height: 48,
        backgroundColor: '#0857C3',
        borderRadius: 8,
    },
    nomal: {
        backgroundColor: '#0857C3',
        border: '2px solid #0857C3',
    },
    hoverNomal: {
        backgroundColor: '#fff',
        border: '2px solid #0857C3',
    },
    nomalColor: {
        color: '#fff',
    },
    hoverNomalColor: {
        color: '#0857C3',
    },
    blue: {
        backgroundColor: '#fff',
        border: '2px solid #0857C3',
    },
    hoverBlue: {
        backgroundColor: '#fff',
        border: '2px solid rgba(8, 87, 195, 0.40)',
    },
    blueColor: {
        color: '#0857C3',
    },
    hoverBlueColor: {
        color: 'rgba(8, 87, 195, 0.40)',
    },
    mono: {
        backgroundColor: '#fff',
        border: '2px solid #000',
    },
    hoverMono: {
        backgroundColor: '#fff',
        border: '2px solid rgba(0, 0, 0, 0.40)',
    },
    monoColor: {
        color: '#000',
    },
    hoverMonoColor: {
        color: 'rgba(0, 0, 0, 0.40)',
    },
    disabled: {
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
    },
    text: {
        fontSize: 14,
        fontFamily: 'YuGothic',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    buttonIcon: {
        position: 'absolute',
        top: 16,
        right: 20,
    },
});

export default Button;
