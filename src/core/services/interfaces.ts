export interface IAsyncStorageManager {
  removeAllTokens: () => void,
  setValueByKey: (value: string, key: string) => void,
  getValueByKey: (key: string) =>  Promise<string | null | undefined>,
  removeValueByKey: (key: string) => Promise<void>,
  getAllKeys: () => Promise<readonly string[] | null>
}
