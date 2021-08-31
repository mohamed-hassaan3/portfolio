const app = new Vue ({
    el: "#app",
    data: {
        fullName: "",
        email: "",
        subject: "",
        message: ""
    },
    computed: {
        validName: function () {
            if(this.fullName) {
                return {
                    "background-color": '#c0ceee',
                    "border-color": '#184e77'
                }
            }
            else {
               return {
                   "background-color": '#eee'
               }
            }
        },
        validMail: function () {
            if(this.email.includes('@')) {
                return {
                    "background-color": '#c0ceee',
                    "border-color": '#184e77'
                }
            }
            else {
               return {
                   "background-color": '#eee'
               }
            }
        },
        validForm: function () {
            return this.fullName && this.email.includes('@')
        },
        completeForm: function () {
            if(this.validForm) {
                return {
                    "background-color": '#cec5c5',
                    "border-color": '#000',
                    "cursor": 'pointer',
                }
            }
        },
        writeSomeName: function () {
            if (this.fullName) {
                return "thanks :)"
            }
            else {
                return "required"
            }
        },
        writeSomeMail: function () {
            if(this.email.includes('@')){
                return "thanks :)"
            }
            else {
                return "required (mail@mail.com)"
            }
        }
    }
})

