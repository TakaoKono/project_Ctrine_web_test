'use client'
import { useAuthContext } from '@/contexts/authContext'
import { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import NextLink from "next/link"

export default function CheckDestroy() {
    const { destroyUser } = useAuthContext();

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

    const handleSubmit = async () => {
        console.log(formData);
    };

    const destroySubmit = async () => {
        await destroyUser(formData.password);
    };

    return (
        <>
            <h1>テスト用退会ページ</h1>
            <br />
            <View>
                <TextInput
                    placeholder="パスワード"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                />
                <Button title="フォーム値確認" onPress={handleSubmit} />
            </View>
            <br />
            <button
                className="m-1 py-1 px-3 border-2 rounded-lg bg-red-500 text-white hover:opacity-50"
                onClick={destroySubmit}>
              退会ボタン
            </button>
            <br />
            <br />
            <button className="m-1 py-1 px-3 border-2 rounded-lg bg-slate-400 text-white hover:opacity-50">
                <NextLink href="/check/certification">状態確認ページを開く</NextLink>
            </button>
            <br />
            <br />
        </>
    )
};