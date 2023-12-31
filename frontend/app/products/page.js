"use client"

import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import CategoryProducts from '../components/CategoryProducts'
import "react-tabs/style/react-tabs.css"

export default function Page() {
  return (
    <div className='pt-[80px] min-h-screen'>
      <Tabs className={'z-20 border-0 w-full flex justify-center items-center flex-col bg-white max-h-[500px]'}>
        <TabList className={'border-0 flex'}>
          {
            ["shoes", "t-shirts", "jeans", "hoodies"].map(el => <Tab className={'border-b-2 cursor-pointer text-sm font-light rounded-0 p-2 outline-none transition'} key={el}>{el}</Tab>)
          }
        </TabList>
        {
          ["shoes", "t-shirt", "jeans", "hoodie"].map(el => <TabPanel key={el}><CategoryProducts cat={el} /></TabPanel>)
        }
      </Tabs>
    </div>
  )
}
