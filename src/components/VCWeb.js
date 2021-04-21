import React from 'react';
import { WebView } from 'react-native-webview';

export function VCWeb({ uri }) {
  return (
    <WebView
      source={{ uri }}
      style={{ marginTop: 20 }}
    />
  );
}
