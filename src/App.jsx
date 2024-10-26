import Header from "./components/Header/Header"
import TeachingSection from "./components/teachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"




export default function App() {
  const [tab, setTab] = useState('effect')


  return (
    <>
      <Header />
        <main>
          <IntroSection />
          <TabsSection active={tab} onChange={(current) => setTab(current)}/>

          {tab === 'main' ? (
            <>
              <TeachingSection />
              <DifferencesSection />
            </>
          ): null}

          {tab === 'feedback' ? <FeedbackSection></FeedbackSection>: null}
        </main>
    </>
  )
}