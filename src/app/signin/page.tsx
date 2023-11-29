'use client';
import React, { useState } from 'react';
import { ImageBackground, View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAuthContext } from '@/contexts/authContext';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

export default function SignIn() {
    const router = useRouter();
    const { loginWithEmail } = useAuthContext();
    const { windowDimensions } = useWindowDimensionsContext();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (name: string, value: string | number) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // ログイン処理実行
    const loginSubmit = async () => {
        await loginWithEmail({ email: formData.email, password: formData.password });
    };

    const styles = StyleSheet.create({
        bgi: {
            backgroundColor: 'rgba(0, 0, 0, 0.40)',
        },
        bgiCover: {
            backgroundColor: 'rgba(0, 0, 0, 0.40)',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            paddingVertical: windowDimensions.width > 768 ? 107 : 41,
            marginHorizontal: 'auto',
            width: windowDimensions.width > 768 ? 560 : 370,
        },
        title: {
            marginBottom: 40,
            color: '#000',
            fontSize: windowDimensions.width > 768 ? 32 : 28,
            fontFamily: 'YuGothic',
            fontWeight: '700',
            wordWrap: 'break-word',
        },
        formContainer: {
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 40,
            paddingHorizontal: windowDimensions.width > 768 ? '12.5%' : '5%',
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 8,
        },
        inputContainer: {
            marginBottom: 20,
            width: '100%',
        },
        passwordChangeContainer: {
            marginBottom: 20,
            width: '100%',
        },
        passwordChangeText: {
            display: 'flex',
            flexDirection: 'row-reverse',
            color: '#000',
            fontSize: 12,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
            textDecorationLine: 'underline',
        },
        line: {
            marginVertical: 20,
            width: windowDimensions.width > 768 ? 400 : 330,
            border: '1px #C0C0C0 solid',
        },
    });

    return (
        <ImageBackground style={styles.bgi} source={{ uri: '/login_bgi.png' }}>
            <View style={styles.bgiCover}>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>ログイン</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                label="メールアドレス"
                                onChange={(text) => handleChange('email', text)}
                                placeholder="xxxxxxxxxx@xxxxxx.xxx"
                                type="email"
                                value={formData.email}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="パスワード"
                                onChange={(text) => handleChange('password', text)}
                                placeholder="************"
                                value={formData.password}
                                isPassword={true}
                            />
                        </View>
                        <View style={styles.passwordChangeContainer}>
                            <Pressable onPress={() => router.push('/passwordreset')}>
                                <Text style={styles.passwordChangeText}>
                                    パスワードをお忘れですか？
                                </Text>
                            </Pressable>
                        </View>
                        <Button handleSubmit={loginSubmit} text="ログイン" />
                        <View style={styles.line}></View>
                        <Button
                            handleSubmit={() => router.push('/signup')}
                            isMono
                            text="新規会員登録はこちら"
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

