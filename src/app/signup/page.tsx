'use client';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button/Button';
import Checkbox from '@/components/common/Checkbox/Checkbox';
import Input from '@/components/common/Input/Input';
import { Step } from '@/components/common/Step/Step';
import { useUser } from '@/contexts/signupContext';
import { useWindowDimensionsContext } from '@/contexts/windowDimensionsContext';
// TODO: バリデーション処理を実装中
// import {
//     isNameValid,
//     isEmailValid,
//     isPasswordValid,
//     isPasswordConfirmValid,
// } from '@/utils/validations';

export default function SignUp() {
    const router = useRouter();

    const { user, setUser } = useUser();
    const { windowDimensions } = useWindowDimensionsContext();
    // TODO: バリデーション処理を実装中
    const [isValidated, setIsValidated] = useState(false);

    const initErrorMessage = {
        name: '',
        name_kana: '',
        email: '',
        password: '',
        passwordConfirm: '',
    };

    const [errorMessage, setErrorMessage] = useState(initErrorMessage);

    // TODO: バリデーション処理を実装中
    // useEffect(() => {
    //     if (
    //         errorMessage.name === '' &&
    //         errorMessage.name_kana === '' &&
    //         errorMessage.email === '' &&
    //         errorMessage.password === '' &&
    //         errorMessage.passwordConfirm === ''
    //     ) {
    //         console.log('バリデーションOK');
    //         setIsValidated(false);
    //     } else {
    //         console.log('バリデーションNG');
    //         setIsValidated(true);
    //     }
    // }, [errorMessage]);

    const handleChange = (name: string, value: string | boolean | number) => {
        // TODO: バリデーション処理を実装中
        // let msg: string = '';

        // switch (name) {
        //     case 'name':
        //         msg = isNameValid(value as string) ? '' : '名前は必須です。';
        //         break;
        //     case 'email':
        //         msg = isEmailValid(value as string) ? '' : 'メールアドレスは必須です。';
        //         break;
        //     case 'password':
        //         msg = isPasswordValid(value as string) ? '' : 'パスワードは必須です。';
        //         break;
        //     case 'passwordConfirm':
        //         msg = isPasswordConfirmValid(user.password, value as string)
        //             ? ''
        //             : '入力されたパスワードと同じ値を入れてください。';
        //         break;
        //     default:
        //         break;
        // }

        // // エラーメッセージを更新
        // setErrorMessage({
        //     ...errorMessage,
        //     [name]: msg,
        // });

        // 入力値を更新
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleLinkClick = (link: string) => {
        router.push(link);
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
        inputContainer: {
            marginBottom: 20,
            width: '100%',
        },
        checkboxContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 40,
            width: '100%',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.breadcrumbContainer}>
                <Text style={styles.breadcrumbText}>TOP {'>'} 新規会員登録</Text>
            </View>
            <Text style={styles.title}>新規会員登録</Text>
            <View style={styles.stepContainer}>
                <Step windowDimensionWidth={windowDimensions.width} step={1} />
                <Text style={styles.stepText}>
                    {`ご入力内容に間違いがなければ、${
                        windowDimensions.width <= 768 ? '\n' : ''
                    }ページ最下部の確認ボタンを押して下さい。`}
                </Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        label="お名前"
                        onChange={(text) => handleChange('name', text)}
                        placeholder="出板太郎"
                        value={user.name}
                        isNeed={true}
                        errorMessage={errorMessage.name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label="フリガナ"
                        onChange={(text) => handleChange('name_kana', text)}
                        placeholder="デイタタロウ"
                        value={user.name_kana}
                        isNeed={true}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label="メールアドレス"
                        onChange={(text) => handleChange('email', text)}
                        type="email"
                        placeholder="xxxxxxxxxxx@xxxxx.xxx"
                        value={user.email}
                        isNeed={true}
                        errorMessage={errorMessage.email}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label="パスワード"
                        onChange={(text) => handleChange('password', text)}
                        placeholder="**********"
                        value={user.password}
                        isPassword={true}
                        isNeed={true}
                        errorMessage={errorMessage.password}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label="パスワード（確認）"
                        onChange={(text) => handleChange('passwordConfirm', text)}
                        placeholder="**********"
                        value={user.passwordConfirm}
                        isPassword={true}
                        isNeed={true}
                        errorMessage={errorMessage.passwordConfirm}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        isChecked={user.isChecked}
                        text={`個人情報取扱いについてにご同意の上、${
                            windowDimensions.width <= 768 ? '\n' : ''
                        }確認画面へお進みください。`}
                        linkText="個人情報取扱いについて"
                        link={process.env.NEXT_PUBLIC_PERSONAL_INFORMATION}
                        handleSubmit={() => handleChange('isChecked', !user.isChecked)}
                    />
                </View>
                <Button
                    isNext
                    isDisabled={!user.isChecked || isValidated}
                    handleSubmit={() => handleLinkClick('/signup/confirm')}
                    text="入力内容を確認する"
                />
            </View>
        </View>
    );
}

