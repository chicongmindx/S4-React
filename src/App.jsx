import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import Tabs from "./components/Tabs.jsx";
import Section from "./components/Section.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Section title={"Core Concepts"} id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </Section>

        <Section title={"Examples"} id="examples">
          <Tabs
            // buttonsContainer="menu"
            buttons={
              <>
                <TabButton
                  isSelected={selectedTopic === "components"}
                  onSelect={() => handleSelect("components")}
                >
                  Components
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "jsx"}
                  onSelect={() => handleSelect("jsx")}
                >
                  JSX
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "props"}
                  onSelect={() => handleSelect("props")}
                >
                  Props
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "state"}
                  onSelect={() => handleSelect("state")}
                >
                  State
                </TabButton>
              </>
            }
          >
            {tabContent}
          </Tabs>
        </Section>
      </main>
    </>
  );
}

export default App;
