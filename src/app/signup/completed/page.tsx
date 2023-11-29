'use client';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button/Button';
import { Step } from '@/components/common/Step/Step';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

export default function SignUpCompleted() {
    const router = useRouter();
    const { windowDimensions } = useWindowDimensionsContext();

    // ブラウザバック制御
    useEffect(() => {
        // ブラウザの遷移履歴に完了画面を追加
        history.pushState(null, '', location.href);
        // ブラウザバック時に完了画面へ
        window.onpopstate = function () {
            history.go(1);
        };

        // コンポーネントがアンマウントされたときにリセット
        return () => {
            window.onpopstate = null;
        };
    }, []);

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
        buttonContainer: {
            width: '90%',
            maxWidth: 400,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.breadcrumbContainer}>
                <Text style={styles.breadcrumbText}>TOP {'>'} 新規会員登録</Text>
            </View>
            <Text style={styles.title}>メール認証のお願い</Text>
            <View style={styles.stepContainer}>
                <Step windowDimensionWidth={windowDimensions.width} step={3} />
                <Text style={styles.stepText}>
                    {`登録されたメールアドレスに、${
                        windowDimensions.width <= 768 ? '\n' : ''
                    }登録を完了するための情報が記載された${
                        windowDimensions.width <= 768 ? '\n' : ''
                    }メールをお送りしました。\nメールの内容に従って認証手続きをお願いいたします。`}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button handleSubmit={() => router.push('/')} text="TOPへ戻る" />
            </View>
        </View>
    );
}

