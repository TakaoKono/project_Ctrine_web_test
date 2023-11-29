'use client';
import { useRouter } from 'next/navigation';
import { View, Text, StyleSheet } from 'react-native';
import { toast } from 'react-toastify';

import Button from '@/components/common/Button/Button';
import { Step } from '@/components/common/Step/Step';
import { useAuthContext } from '@/contexts/authContext';
import { useUser } from '@/contexts/signupContext';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

export default function SignUp() {
    const router = useRouter();
    const { signupWithEmail } = useAuthContext();
    const { user } = useUser();
    const { windowDimensions } = useWindowDimensionsContext();

    // 会員登録実行
    const signupSubmit = async () => {
        await signupWithEmail({
            name: user.name,
            name_kana: user.name_kana,
            email: user.email,
            password: user.password,
        });
        // const res = await signupWithEmail({
        //     name: user.name,
        //     name_kana: user.name_kana,
        //     email: user.email,
        //     password: user.password,
        // });
        // if (res) {
        //     router.push('/signup/completed');
        //     return;
        // } else {
        //     toast.error('新規会員登録ができませんでした。');
        //     router.push('/'); // パスは後で変更
        //     return;
        // }
    };

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: windowDimensions.width > 1023 ? 80 : 60,
            marginHorizontal: 'auto',
            width: windowDimensions.width > 768 ? '75%' : '90%',
        },
        breadcrumbContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: 20,
            width: '100%',
        },
        breadcrumbText: {
            color: '#000',
            fontSize: 10,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
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
            marginBottom: 40,
        },
        stepText: {
            marginTop: 40,
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
            paddingVertical: 40,
            paddingHorizontal: windowDimensions.width > 768 ? '12.5%' : '5%',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 8,
        },
        confirmContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%',
        },
        confirmLabel: {
            marginBottom: 10,
            color: '#000',
            fontSize: 16,
            fontFamily: 'YuGothic',
            fontWeight: '700',
            wordWrap: 'break-word',
        },
        confirmValue: {
            marginBottom: 24,
            color: '#000',
            fontSize: 14,
            fontFamily: 'YuGothic',
            fontWeight: '500',
            wordWrap: 'break-word',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.breadcrumbContainer}>
                <Text style={styles.breadcrumbText}>TOP {'>'} 新規会員登録</Text>
            </View>
            <Text style={styles.title}>新規会員登録</Text>
            <View style={styles.stepContainer}>
                <Step windowDimensionWidth={windowDimensions.width} step={2} />
                <Text style={styles.stepText}>
                    {`内容に間違いがなければ、${
                        windowDimensions.width <= 768 ? '\n' : ''
                    }ページ最下部の登録ボタンを押して下さい。\nご入力いただいたメールアドレスに、${
                        windowDimensions.width <= 768 ? '\n' : ''
                    }ご登録の確認メールをお送りします。`}
                </Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.confirmContainer}>
                    <View>
                        <Text style={styles.confirmLabel}>名前</Text>
                        <Text style={styles.confirmValue}>{user.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.confirmLabel}>フリガナ</Text>
                        <Text style={styles.confirmValue}>{user.name_kana}</Text>
                    </View>
                    <View>
                        <Text style={styles.confirmLabel}>メールアドレス</Text>
                        <Text style={styles.confirmValue}>{user.email}</Text>
                    </View>
                </View>
                <Button isNext handleSubmit={() => signupSubmit()} text="入力内容を登録する" />
                <View style={{ marginBottom: 20 }}></View>
                <Button isBlue handleSubmit={() => router.push('/signup')} text="入力画面に戻る" />
            </View>
        </View>
    );
}

