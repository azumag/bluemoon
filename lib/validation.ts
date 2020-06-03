export default {
  required(m: string = '必須項目です') {
    return (v: string | number | null): string | boolean => {
      if (!v) {
        return m
      }
      return true
    }
  }
}
