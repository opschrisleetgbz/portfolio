import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// 这个文件是应用的入口。在聊天中向 AI 下达指令后，
// AI 会编辑这个文件 (和新文件) 来构建应用。
// 查看将在 GitHub Actions 构建完成后显示 (需要几分钟)。
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Palmagine!</Text>
      <Text style={styles.subtitle}>
        在聊天标签页告诉 AI 你想做的东西吧
      </Text>
      <Pressable style={styles.button} onPress={() => setCount((c) => c + 1)}>
        <Text style={styles.buttonText}>点击: {count}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#f6f7fb',
    padding: 24,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1f2430' },
  subtitle: { fontSize: 14, color: '#6b7280', textAlign: 'center' },
  button: {
    marginTop: 12,
    backgroundColor: '#4f46e5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
