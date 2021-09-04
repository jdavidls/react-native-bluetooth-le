import { NativeModules } from 'react-native';

type BluetoothLeType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BluetoothLe } = NativeModules;

export default BluetoothLe as BluetoothLeType;
