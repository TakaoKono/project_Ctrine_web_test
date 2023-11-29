'use client';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useAuthContext } from '@/contexts/authContext';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type Props = {
    oobCode: string;
};

export default function AuthPasswordReset({ oobCode }: Props) {
    const { execConfirmPasswordReset } = useAuthContext();
    const router = useRouter();
    const { windowDimensions } = useWindowDimensionsContext();

    const [step, setStep] = useState(1);
    const [stepText, setStepText] = useState('新しいパスワードをご入力ください。');
    const [formData, setFormData] = useState({
        password: '',
        passwordConfirm: '',
    });

    const handleStep = (nextStep: 1 | 2) => {
        setStep(nextStep);
        switch (nextStep) {
            case 1:
                setStepText('新しいパスワードをご入力ください。');
                break;
            case 2:
                setStepText('パスワードの変更が完了しました。');
                break;
            default:
                break;
        }
    };

    const handleChange = (name: string, value: string | number) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const authPasswordResetSubmit = async () => {
        const res = await execConfirmPasswordReset({ oobCode, password: formData.password });

        if (res) {
            handleStep(2);
            return;
        } else {
            toast.error('パスワードの変更ができませんでした。');
            router.push('/passwordreset');
            return;
        }
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
        formContainer: {
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 40,
            paddingHorizontal: windowDimensions.width > 768 ? '12.5%' : '5%',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 8,
        },
        inputContainer: {
            marginBottom: 20,
            width: '100%',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>パスワードの変更</Text>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>{stepText}</Text>
            </View>
            {step === 1 && (
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Input
                            label="パスワード"
                            onChange={(text) => handleChange('password', text)}
                            placeholder="**********"
                            value={formData.password}
                            isPassword={true}
                            isNeed={true}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                            label="パスワード（確認）"
                            onChange={(text) => handleChange('passwordConfirm', text)}
                            placeholder="**********"
                            value={formData.passwordConfirm}
                            isPassword={true}
                            isNeed={true}
                        />
                    </View>
                    <Button
                        isNext
                        handleSubmit={() => authPasswordResetSubmit()}
                        text="パスワードを変更する"
                    />
                </View>
            )}
            {step === 2 && <Button handleSubmit={() => router.push('/')} text="TOPへ戻る" />}
        </View>
    );
}
