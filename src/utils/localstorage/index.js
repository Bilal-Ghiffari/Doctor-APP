import AsyncStorage from '@react-native-async-storage/async-storage';

// menambahkan data setData()
export const setDataItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {}
};

// membaca data getData()
export const getDataItem = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {}
};
