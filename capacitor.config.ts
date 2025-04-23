
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.169ca5bb36d54a228b18e44a0764586f',
  appName: 'prgrss-mentor-connect',
  webDir: 'dist',
  server: {
    url: 'https://169ca5bb-36d5-4a22-8b18-e44a0764586f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic'
  },
  android: {
    backgroundColor: "#000000"
  }
};

export default config;
