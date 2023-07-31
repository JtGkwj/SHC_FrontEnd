import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categoryStore",{
    state:()=>({
        categories:[
            {
                id:1,
                name:"Cyber Security",
                description:"CyberSecurity is the state of being protected against the criminal or unauthorized use of electronic data or the measures taken to achieve this."
            },
            {
                id:2,
                name:"Corporate Security",
                description:"It identifies and implements all necessary legal measures.They exist to protect your enterprise from unlawful activity and provide support when incident occur."
            },
            {
                id:3,
                name:"Supply chain",
                description:"It is management of the flow of goods, data, and finances related to a product or service, from the procurement of raw materials to the delivery of the product at its final destination."
            },
            {
                id:4,
                name:"Interconnected Systems",
                description:"A direct connection between two or more systems in different authorization boundaries for the purpose of exchanging information and/or allowing access to information."
            },
            {
                id:5,
                name:"Automation Systems",
                description:"An automation system is an integration of sensors, controls, and actuators designed to perform a function with minimal or no human intervention."
            },
        ]
    })
})