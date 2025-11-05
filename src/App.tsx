import React, { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput/TextInput'
import StatsDisplay, { type TextStats } from './components/StatsDisplay/StatsDisplay'


function App() {
  const [info, setInfo] = useState<TextStats>(
    {
      characterCount: 0,
      wordCount: 0,
      readingTime: 0
    }
  );
  const [wordCountColor, setWordCountColor] = useState('ffffff')
  const [totalReadingTime, setTotalReadingTime] = useState('0:00')

  const wordsPerSecond: number = 3

  function runCalculations(input: string): void {
    setInfo(prev => ({ ...prev, characterCount: input.length }))
    if (input.length > 0) {
      setInfo(prev => ({ ...prev, wordCount: input.trim().split(/\s+/).length }))
    }
    else {
      setInfo(prev => ({ ...prev, wordCount: 0 }))
    }
    if (info.wordCount >= 25) {
      if (info.wordCount <= 100) {
        setWordCountColor('#22ab00')
      }
      else {
        setWordCountColor('#9c0300')
      }
    }
    else {
      setWordCountColor('#9c0300')
    }
    const inMinutes: number = Math.floor(info.wordCount / (wordsPerSecond * 60))
    const inSeconds: number =  Math.floor((info.wordCount / wordsPerSecond) % 60)
    const inMinutesAndSeconds: string =  inSeconds >= 10 ? `${inMinutes}:${inSeconds}` : `${inMinutes}:0${inSeconds}`
    setTotalReadingTime(inMinutesAndSeconds)
  }

  return (
    <>
      <TextInput onTextChange={(e) => runCalculations(e)} placeholder='Start typing your content here ⬇' />
      <StatsDisplay stats={info} showReadingTime={true} wordCountColor={wordCountColor} readingTime={totalReadingTime} />
    </>
  )
}

export default App
