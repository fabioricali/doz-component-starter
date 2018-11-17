export default {

    props: {
        name: 'DOZ'
    },

    template(h) {
        return h`

            <style> 
                button {
                    font-size: 24px;
                    padding: 20px;
                }
            </style>
            
            <button 
                onclick="this.clickMe()">
                hello ${this.props.name}
            </button>
        `
    },

    clickMe() {
        alert('Ciao!');
    },

    onCreate() {

    },

    onMount() {

    },

    onUpdate() {

    },

    onDestroy() {

    }

};