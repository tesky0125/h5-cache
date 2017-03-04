class CommonUtils {
  /**
   * 判断是否是隐私模式
   * @author yanjj
   * @return {Boolean}
   */
  static isPrivateModel() {
    const testKey = 'TEST_PRIVATE_MODEL';
    const storage = window.localStorage;

    try {
      storage.setItem(testKey, 1);
      storage.removeItem(testKey);
    } catch (e) {
      console.warn('Error CommonUtils.isPrivateModel:', e);
      return true;
    }
    return false;
  }

  static isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
  }

}

export default CommonUtils;