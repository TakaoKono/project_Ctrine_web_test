'use client';
import { View, Image, Text, StyleSheet } from 'react-native';

type Props = {
    windowDimensionWidth: number;
    step: number;
};

export function Step({ windowDimensionWidth, step }: Props) {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        activeStepItem: {
            color: '#fff',
            backgroundColor: '#0857C3',
            borderRadius: 9999,
        },
        stepItem: {
            color: '#0857C3',
            border: '1px #0857C3 solid',
            backgroundColor: '#F6F6F6',
            borderRadius: 9999,
        },
        stepText: {
            width: windowDimensionWidth > 768 ? 72 : 56,
            height: windowDimensionWidth > 768 ? 72 : 56,
            textAlign: 'center',
            lineHeight: windowDimensionWidth > 768 ? 72 : 56,
            fontSize: windowDimensionWidth > 768 ? 14 : 12,
            fontFamily: 'YuGothic',
            fontWeight: '700',
            wordWrap: 'break-word',
        },
    });

    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={[styles.stepText, step === 1 ? styles.activeStepItem : styles.stepItem]}
                >
                    入力
                </Text>
            </View>
            <View>
                <Image
                    style={{ marginHorizontal: 40, width: 12, height: 21 }}
                    source={{ uri: '/arrow_right_blue.svg' }}
                    alt="arrow_right_blue"
                />
            </View>
            <View>
                <Text
                    style={[styles.stepText, step === 2 ? styles.activeStepItem : styles.stepItem]}
                >
                    確認
                </Text>
            </View>
            <View>
                <Image
                    style={{ marginHorizontal: 40, width: 12, height: 21 }}
                    source={{ uri: '/arrow_right_blue.svg' }}
                    alt="arrow_right_blue"
                />
            </View>
            <View>
                <Text
                    style={[styles.stepText, step === 3 ? styles.activeStepItem : styles.stepItem]}
                >
                    認証
                </Text>
            </View>
        </View>
    );
}
