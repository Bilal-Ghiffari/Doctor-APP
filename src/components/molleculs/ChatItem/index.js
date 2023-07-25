import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IsMe from './isMe';
import Other from './Other';

export default function ChatItems({isMe, text, date, photo}) {
  if (isMe) {
    return <IsMe title={text} date={date} />;
  }
  return <Other title={text} date={date} photo={photo} />;
}
