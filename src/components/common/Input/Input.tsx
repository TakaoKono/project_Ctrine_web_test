'use client';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export type InputModeOptions =
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';

type Props = {
    label: string;
    isNeed?: boolean;
    isWhite?: boolean;
    placeholder: string;
    value?: string;
    isPassword?: boolean;
    errorMessage?: string;
    type?: InputModeOptions;
    onChange: (text: string) => void;
};

const Input = ({
    label,
    isNeed = false,
    isWhite = false,
    placeholder,
    value = '',
    isPassword = false,
    errorMessage,
    type = 'text',
    onChange,
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisillity, setIsVisillity] = useState(isPassword);

    return (
        <View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                {isNeed && <Text style={styles.need}>必須</Text>}
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        isWhite ? styles.white : styles.nomal,
                        isFocused && styles.focusedInput,
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor="#C0C0C0"
                    secureTextEntry={isVisillity}
                    inputMode={type}
                    value={value}
                    onChangeText={onChange}
                    onFocus={() => setIsFocused(!isFocused)}
                    onBlur={() => setIsFocused(!isFocused)}
                />
                {isPassword && (
                    <Pressable
                        style={styles.visillityIconContainer}
                        onPress={() => setIsVisillity(!isVisillity)}
                    >
                        <Image
                            style={isVisillity ? styles.visillityOn : styles.visillityOff}
                            source={{ uri: `/visillity-${isVisillity ? 'on' : 'off'}.svg` }}
                            alt="visillity"
                        />
                    </Pressable>
                )}
                {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 8,
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'YuGothic',
        wordWrap: 'break-word',
    },
    need: {
        width: 48,
        height: 26,
        textAlign: 'center',
        lineHeight: 26,
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'YuGothic',
        wordWrap: 'break-word',
        backgroundColor: '#CD4949',
        borderRadius: 8,
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
    },
    input: {
        paddingVertical: 18,
        paddingHorizontal: 20,
        width: '100%',
        height: 60,
        borderRadius: 8,
    },
    white: {
        backgroundColor: '#fff',
        border: '1px #C0C0C0 solid',
    },
    nomal: {
        backgroundColor: '#F6F6F6',
        border: '1px #F6F6F6 solid',
    },
    focusedInput: {
        outlineColor: '#C0C0C0',
        borderColor: '#C0C0C0',
    },
    visillityIconContainer: {
        position: 'absolute',
        top: 21,
        right: 20,
        width: 26,
        height: 23,
    },
    visillityOff: {
        width: 26,
        height: 23,
    },
    visillityOn: {
        width: 26,
        height: 18,
    },
    errorMessage: {
        marginTop: 8,
        color: '#CD4949',
        fontSize: 12,
        fontFamily: 'YuGothic',
        fontWeight: '500',
        wordWrap: 'break-word',
    },
});

export default Input;
