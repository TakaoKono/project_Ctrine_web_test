'use client';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAuthContext } from '@/contexts/authContext';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

export default function EmailChange() {
    const router = useRouter();
    const { updateEmail } = useAuthContext();
    const { windowDimensions } = useWindowDimensionsContext();

    const [email, setEmail] = useState('');

    const handleChange = (value: string) => {
        setEmail(value);
    };

    // メールアドレス変更
    const handleSubmit = async () => {
        await updateEmail(email);
    };

    // 画面遷移
    const handleLinkClick = (link: string) => {
        router.push(link);
    };

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 40,
            paddingBottom: windowDimensions.width > 1023 ? 80 : 60,
            marginHorizontal: 'auto',
            width: windowDimensions.width > 768 ? '75%' : '90%',
        },
        title: {
            marginBottom: 20,
            color: '#000',
            fontSize: windowDimensions.width > 768 ? 32 : 28,
            fontFamily: 'YuGothic',
            fontWeight: '700',
            wordWrap: 'break-word',
        },
        stepContainer: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: windowDimensions.width > 768 ? 40 : 20,
        },
        stepText: {
            textAlign: 'center',
            color: '#000',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
        formContainer: {
            display: 'flex',
            alignItems: 'center',
            paddingHorizontal: windowDimensions.width > 768 ? '12.5%' : '5%',
            width: '100%',
        },
        inputContainer: {
            marginBottom: 20,
            maxWidth: 400,
            width: '100%',
        },
        linkContainer: {
            marginTop: 40,
            width: '100%',
        },
        linkText: {
            textAlign: 'center',
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
            <Text style={styles.title}>メールアドレスの変更</Text>
            <View style={styles.stepContainer}>
                <Text
                    style={styles.stepText}
                >{`登録するメールアドレスはこちらから変更できます。\nメールアドレス変更後は、ログイン画面より再度ログインする必要があります。`}</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        label="変更後のメールアドレス"
                        isWhite
                        onChange={(text) => handleChange(text)}
                        type="email"
                        placeholder="xxxxxxxxxxx@xxxxx.xxx"
                        value={email}
                    />
                </View>
                <Button handleSubmit={() => handleSubmit()} text="変更する" />
                <Pressable style={styles.linkContainer} onPress={() => handleLinkClick('/mypage')}>
                    <Text style={styles.linkText}>マイページへ戻る</Text>
                </Pressable>
            </View>
        </View>
    );
}

