import React from 'react';

import './homepage.styles.css';
import TextSection from '../components/text-section/text-section.component';

class HomePage extends React.Component {
  render() {
    return (
      <div className='resume-page'>
        <TextSection
          sectionHeader='Objective'
          sectionContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias dolor quidem in ab vitae aspernatur laborum, aliquam explicabo reiciendis. Ratione explicabo, aliquid dignissimos maiores repellendus nulla hic dolorem excepturi.'
        />
      </div>
    );
  }
}

export default HomePage;
