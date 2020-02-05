import { Platform } from 'react-native';

export function getPlatformType(): 'I' | 'A' {
  return Platform.OS.substr(0, 1).toUpperCase() as 'I' | 'A';
}
