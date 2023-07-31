import { defineStore } from "pinia";

export const useQuestionStore = defineStore("questionStore",{
    state:()=>({
        questions : [
            {
                category_id:1,
                question: '1. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '2. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:2,
                question: '1. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:2,
                question: '2. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:3,
                question: '1. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:3,
                question: '2. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:4,
                question: '1. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:4,
                question: '2. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:5,
                question: '1. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:4,
                question: 'How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:5,
                question: '2. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '3. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:2,
                question: '3. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            }, 
            {
                category_id:3,
                question: '3. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '4. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '5. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '6. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '7. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '8. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '9. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '1. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '10. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '11. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '12. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '13. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '14. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '15. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '16. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '17. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '18. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
            {
                category_id:1,
                question: '19. How would you categorize your organizations issuance and return of assets?',
                options: [
                    { label: 'Optimized', value: 'Optimized' },
                    { label: 'Managed', value: 'Managed' },
                    { label: 'Adhoc', value: 'Adhoc' },
                    { label: 'Repeatable', value: 'Repeatable' },
                    { label: 'Dont know', value: 'Dont know' }
                ]
            },
        ]
    }),

actions: {
    addQuestion(question) {
        this.questions.push(question);
    },
    deleteQuestion(index) {
        this.questions.splice(index, 1);
    },
    modifyQuestion(index, newQuestion) {
        this.questions[index] = newQuestion;
    }
}
});

// import { useQuestionStore } from "../questionStore";

// const questionStore = useQuestionStore();
// const newQuestion = {
//     category_id: 1,
//     question: "5. How would you categorize your organizations issuance and return of assets?",
//     options: [
//         { label: "Optimized", value: "Optimized" },
//         { label: "Managed", value: "Managed" },
//         { label: "Adhoc", value: "Adhoc" },
//         { label: "Repeatable", value: "Repeatable" },
//         { label: "Dont know", value: "Dont know" }
//     ]
// };

// questionStore.addQuestion(newQuestion);

