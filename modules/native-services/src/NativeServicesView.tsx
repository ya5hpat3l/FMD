import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NativeServicesViewProps } from './NativeServices.types';

const NativeView: React.ComponentType<NativeServicesViewProps> =
  requireNativeViewManager('NativeServices');

export default function NativeServicesView(props: NativeServicesViewProps) {
  return <NativeView {...props} />;
}
