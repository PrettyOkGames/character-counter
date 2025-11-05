export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  wordCountColor: string
}

function StatsDisplay({stats, showReadingTime, wordCountColor}: StatsDisplayProps) {
  return <section>
    <div className="flex justify-center p-[5px]">
      <div className="mx-[50px]">
        <p>Characters</p>
        <p>{stats.characterCount}</p>
      </div>
      <div className="mx-[50px]">
        <p>Words</p>
        <p style={{color: `${wordCountColor}`}}>{stats.wordCount}</p>
        <p className="text-[12px]">Min: 25 | Max: 100</p>
      </div>
      <div style={{display : showReadingTime ? 'block' : 'none'}} className="mx-[50px]">
        <p>Reading Time</p>
        <p className="text-[12px]">(Assuming 200 WPM)</p>
        <p>{stats.readingTime}</p>
      </div>
    </div>
  </section>
}

export default StatsDisplay