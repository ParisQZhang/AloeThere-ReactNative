import React, { useEffect } from 'react';
import { Input } from 'react-native-elements';

import { Keyboard } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const localNotification = { title: 'done', body: 'done!' };

const onSubmit = (text) => {
  Keyboard.dismiss();
  const schedulingOptions = {
    time: new Date().getTime() + Number(text),
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
};
const handleNotification = () => {
  console.warn('ok! got your notif');
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.');
};

const TimerNotification = () => {
  useEffect(() => {
    askNotification();
    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and
    // handle them in a callback
    const listener = Notifications.addListener(handleNotification);
    return () => listener.remove();
  }, []);

  return <Input onChangeText={onSubmit} label="time in ms" />;
};

export default TimerNotification;
