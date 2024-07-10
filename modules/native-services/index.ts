import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NativeServices.web.ts
// and on native platforms to NativeServices.ts
import NativeServicesModule from './src/NativeServicesModule';
import NativeServicesView from './src/NativeServicesView';
import { ChangeEventPayload, NativeServicesViewProps } from './src/NativeServices.types';

// Get the native constant value.
export const PI = NativeServicesModule.PI;

export function hello(): string {
  return NativeServicesModule.hello();
}

export async function setValueAsync(value: string) {
  return await NativeServicesModule.setValueAsync(value);
}

const emitter = new EventEmitter(NativeServicesModule ?? NativeModulesProxy.NativeServices);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NativeServicesView, NativeServicesViewProps, ChangeEventPayload };
