import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort,Filte, Filter } from '@syncfusion/ej2-react-grids';
import {customersData,customersGrid} from '../data/dummy';
import {Header} from "../components";
import { useStateContext } from '../contexts/ContextProvider';


const Customers = () => {
  const {currentMode}= useStateContext();

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Page" title="Customers"/>
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{allowDeleting:true, allowEditing:true}}
        width="auto"
      >
        <ColumnsDirective background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
          {customersGrid.map((item, index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Selection,  Edit,Sort, Filter,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Customers