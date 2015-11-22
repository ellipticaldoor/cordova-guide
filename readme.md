Project preparation instructions

```
jxc install
cordova plugins add io.jxcore.node 
cordova plugin add cordova-plugin-httpd
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-console
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-chrome-apps-audiocaptur
cordova platform add android
cordova-icon
cordova-splash
cordova build android
cd $DIR/jxcore/
jx install --autoremove ".*,*.md,*.MD"
cordova run android --device
```