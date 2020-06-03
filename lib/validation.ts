export default {
  required(m: string = '必須項目です') {
    return (v: string | number | null): string | boolean => {
      if (!v) {
        return m
      }
      return true
    }
  },
  email(m: string = 'メールアドレスの形式が正しくありません') {
    return (v: string): string | boolean => {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
        return m
      }
      return true
    }
  },
  password(m: string = '6文字以上入力してください') {
    return (v: string): string | boolean => {
      if (v.length < 6) {
        return m
      }
      return true
    }
  }
}
