import React from 'react';
import BottomBarEntry from './BottomBarEntry.jsx'

const BottomBar = (props) => (




      <div className="bottomBar">
        {props.imageList.map((image) => <BottomBarEntry
          image={image}
          changeMainImage={props.changeMainImage}
          imageList={props.imageList}/>
      )}</div>


)

export default BottomBar;