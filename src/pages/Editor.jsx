import React from 'react';
import {HtmlEditor, Image, Inject, Link,QuickToolbar, RichTextEditorComponent, Toolbar} from '@syncfusion/ej2-react-richtexteditor'
import {EditoeData} from '../data/dummy';
import {Header} from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Editor = () => {
  const {currentMode}= useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="App" title="Editor"/>
      <RichTextEditorComponent background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[HtmlEditor,Toolbar,Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor