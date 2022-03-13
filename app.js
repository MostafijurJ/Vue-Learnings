const app = new Vue({
    el: '#app',
    data: {
        message: 'Type something here!',
        fruits: [],
        options: [
            { value: 'Apple', text: 'Apple' },
            { value: 'Banana', text: 'Banana' },
            { value: 'Mango', text: 'Mango' },
            { value: 'Orange', text: 'Orange' },
            { value: 'Pineapple', text: 'Pineapple' },
            { value: 'Strawberry', text: 'Strawberry' }
        ],
        vModelCheck: 'I know you are Learning <a href="https://www.google.com/search?q=vuejs" target="_blank">VueJS</a>',
        arrayManipulation: [5,6],
    arrayCheck: () => {
    console.log("hello from array check");
    return 'Hello From Array Check';
    }
}
})