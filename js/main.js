Vue.component('employee',{
    props: ['data'],
    methods: {
        delete_employee() {
            this.$emit('delete_employee');
        }
    },
    template: `
    <div class="employee">
      <div>
        <input type="text" v-model="data.title" class="employee__title">
        <span class="employee__description">{{"Сотрудник " + data.description}}</span>
      </div>
      <button @click="delete_employee()" class="employee__delete">❌</button>
    </div>
    `
});

const vue = new Vue ({
    el: '#app',
    data: {
        new_employee: {
            title: '',
            description: ''
        },
        employees: [
            {
                title: 'Иванов Иван Иванович',
                description: 'склада'
            },
            {
                title: 'Сидоров Сидор Сидорович',
                description: 'отдела продаж'
            }
        ]
    },
    methods: {
        delete_employee(id) {
            this.employees.splice(id,1);
        },
        add_employee() {
            if(this.new_employee.title != '' && this.new_employee.description != ''){
                this.employees.push({
                    title: this.new_employee.title,
                    description: this.new_employee.description
                });
                this.new_employee.title='';
                this.new_employee.description='';
            }
            else {
                alert("Введите должность сотрудинка");
            }
        }
    }
});