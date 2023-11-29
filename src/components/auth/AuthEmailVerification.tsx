'use client';
import { useAuthContext } from '@/contexts/authContext';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@/components/common/Button/Button';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';

type Props = {
    oobCode: string;
};

export default function AuthEmailVerification({ oobCode }: Props) {
    const { verificationEmail } = useAuthContext();
    const { windowDimensions } = useWindowDimensionsContext();

    const authEmailVerificationSubmit = async () => {
        await verificationEmail(oobCode);
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
            <Text style={styles.title}>メール認証</Text>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>下記ボタンをクリックして認証を行ってください。</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button handleSubmit={authEmailVerificationSubmit} text="認証する" />
            </View>
        </View>
    );
}
