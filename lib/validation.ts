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
  }
}
