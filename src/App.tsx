import React, { useState } from 'react';
import './App.css';
import { OnOff } from "./componens/OnOff/OnOff";
import { Rating, RatingValueType } from "./componens/Rating/Rating";
import { UncontrolledRating } from "./componens/UncontrolledRating/UncontrolledRating";
import { Accordion } from "./componens/Accordion/Accordion";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className={"App"}>
      <OnOff on = {switchOn} onChange={setSwitchOn}/>
   {/*   <UncontrolledRating/>*/}

      <Accordion
        titleValue={"Menu"}
        collapsed={accordionCollapsed}
        onChange = {()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

      <Rating
        value={ratingValue}
        onClick={setRatingValue}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <div>{props.title}</div>
}

export default App;

