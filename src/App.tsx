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

    const wordsPerMinute: number = 200

  function runCalculations(input: string): void {
    setInfo(prev => ({...prev, characterCount: input.length}))
    if (input.length > 0) {
      setInfo(prev => ({...prev, wordCount: input.trim().split(/\s+/).length}))
    }
    else{
      setInfo(prev => ({...prev, wordCount: 0}))
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
  }

  return (
    <>
      <TextInput onTextChange={(e) => runCalculations(e)} placeholder='Start typing your content here ⬇'/>
      <StatsDisplay stats={info} showReadingTime={true} wordCountColor={wordCountColor}/>
    </>
  )
}

export default App
