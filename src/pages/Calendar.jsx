import React from 'react'
import {ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Agenda, Inject,Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule';
import {DataPickerComponent} from '@syncfusion/ej2-react-calendars';
import { scheduleData, ScheduleData } from '../data/dummy';
import {Header} from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Calendar = () => {
  const {currentMode}= useStateContext();
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category="App" title="Calender"/>
      <ScheduleComponent height="650px"
      eventSettings={{dataSource:scheduleData}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[Day,Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar