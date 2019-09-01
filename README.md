# React Native workshop - Demo app using Marvel APIs

- To Run E2E detox tests
  - Install `detox-cli` first
  ```
  npm install -g detox-cli
  ```
  - Run tests
  ```
  detox test -c android.emu.debug
  ```
  Before running the above tests, make sure your emulator is running, `Nexus_5X_API_27_x86` 
  or change the device in the following configuration in `package.json`,
  ```
      ..."android.emu.debug": {
        "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
        "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
        "type": "android.emulator",
        "name": <"Nexus_5X_API_27_x86">
      }
  ```
