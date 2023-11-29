'use client';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAuthContext } from '@/contexts/authContext';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

export default function PasswordReset() {
    const router = useRouter();
    const { resetAuthPassword } = useAuthContext();
    const { windowDimensions } = useWindowDimensionsContext();

    const [step, setStep] = useState(1);
    const [stepText, setStepText] = useState(
        'ご登録いただいたメールアドレスをご入力ください。\nご登録のメールアドレスにパスワードの再設定画面のURLを記載したメールをお送りします。\n（パスワード再設定前にメールの受信設定のご確認をお願いします）'
    );
    const [email, setEmail] = useState('');

    const handleStep = (nextStep: 1 | 2) => {
        setStep(nextStep);
        switch (nextStep) {
            case 1:
                setStepText(
                    `ご登録いただいたメールアドレスをご入力ください。\nご登録のメールアドレスにパスワードの再設定画面の${
                        windowDimensions.width <= 768 ? '\n' : ''
                    }URLを記載したメールをお送りします。\n（パスワード再設定前にメールの受信設定のご確認をお願いします）`
                );
                break;
            case 2:
                setStepText(
                    'ご入力いただいたメールアドレス宛にメールを送信しました。\nメールに記載のURLから新しいパスワードの登録手続きを願いいたします。'
                );
                break;
            default:
                break;
        }
    };

    const handleChange = (value: string) => {
        setEmail(value);
    };

    // パスワードリセット
    const handleSubmit = async () => {
        await resetAuthPassword(email);
        handleStep(2);
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
            <Text style={styles.title}>パスワードのリセット</Text>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>{stepText}</Text>
            </View>
            {step === 1 && (
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Input
                            label="メールアドレス"
                            isWhite
                            onChange={(text) => handleChange(text)}
                            type="email"
                            placeholder="xxxxxxxxxxx@xxxxx.xxx"
                            value={email}
                        />
                    </View>
                    <Button handleSubmit={() => handleSubmit()} text="送信" />
                    <Pressable
                        style={styles.linkContainer}
                        onPress={() => handleLinkClick('/signin')}
                    >
                        <Text style={styles.linkText}>ログイン画面へ戻る</Text>
                    </Pressable>
                </View>
            )}
            {step === 2 && (
                <>
                    <Button handleSubmit={() => handleLinkClick('/')} text="TOPへ戻る" />
                </>
            )}
        </View>
    );
}

