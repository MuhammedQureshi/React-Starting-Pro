import TabButton from './TabButton';
import { EXAMPLES } from '../data'; 
import { useState } from 'react';

export default function Example() {
  
    const [selectedTopic, setSelectedTopic  ] = useState();
 
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedButton);
  }
    
  return (
    <section id='examples'>
        <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'} 
            onSelect={() => handleSelect('components')}
            >
                Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'} 
            onSelect={() => handleSelect('jsx')}
            >
                JSX
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'} 
            onSelect={() => handleSelect('props')}
            >
                Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'} 
            onSelect={() => handleSelect('state')}
            >
                State
            </TabButton>
        </menu>
        {selectedTopic ? (
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
            </div>
        ) : <p>Please select a topic.</p>}
    </section>
  )
}
