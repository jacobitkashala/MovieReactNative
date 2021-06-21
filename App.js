import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seaech from './component/Search';
import Film from './component/FilmItem';
import data from './Data/DataPersonne';

export default function App() {
  return (
    <>
      <Seaech />
      <Film data={data} />
    </>
  )
}


