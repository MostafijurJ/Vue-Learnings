const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        fruits: [],
        options: [
            { value: 'Apple', text: 'Apple' },
            { value: 'Banana', text: 'Banana' },
            { value: 'Mango', text: 'Mango' },
            { value: 'Orange', text: 'Orange' },
            { value: 'Pineapple', text: 'Pineapple' },
            { value: 'Strawberry', text: 'Strawberry' }
        ],
        methods: {  },
        func: () => {
        console.log('Hello World');
        return "Hello From Func";
        },
    arrayCheck: () => {
    console.log("hello from array check");
    return 'Hello From Array Check';
    }
}
})