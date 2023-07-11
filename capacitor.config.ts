import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skyfort.app',
  appName: 'SkyFort',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    //Ip Local
    url: "http://localhost:3000",
    cleartext: true
  }
};

export default config;
