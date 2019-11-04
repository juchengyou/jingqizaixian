import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Questionnaire from '@/components/Questionnaire'
import Collection from '@/components/Collection'
import Index from "@/components/index"
import Order from "@/components/Order"
import OderText from "@/components/OderText"
import CollectiveAppointment from "@/components/CollectiveAppointment"
import Biddingguide from "@/components/Biddingguide"
import Tips from "@/components/Tips"
import Query from "@/components/Query"
import QueryContent from "@/components/QueryContent"
import Information from "@/components/Information"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },{
      path: '/Order',
      name: 'Order',
      component: Order
    },{
        path: '/OderText',
        name: 'OderText',
        component: OderText
    },{
      path:"/CollectiveAppointment",
      name:"CollectiveAppointment",
      component:CollectiveAppointment
    },{
      path:"/Biddingguide",
      name:"Biddingguide",
      component:Biddingguide
    },{
      path:"/Tips",
      name:"Tips",
      component:Tips
    },{
      path:"/Query",
      name:"Query",
      component:Query
    },{
      path:"/QueryContent",
      name:"QueryContent",
      component:QueryContent
    },{
      path:"/Information",
      name:"Information",
      component:Information
    }

  ]
})
