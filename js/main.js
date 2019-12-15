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

Vue.component('product', {
    props: ['data'],
    methods: {
        delete_product() {
            this.$emit('delete_product');
        }
    },
    template: `
    <div class="product">
      <div>
        <input type="text" v-model="data.title" class="product__title">
        <span class="product__description">{{"Количество " + data.description}}</span>
      </div>
      <button @click="delete_product()" class="product__delete">❌</button>
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
        new_product: {
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
        ],
        products: [
            {
                title: 'Молоко',
                description: '2 литра'
            },
            {
                title: 'Сыр',
                description: '1 кг.'
            }
        ]
    },
    methods: {
        delete_employee(id) {
            this.employees.splice(id,1);
        },
        delete_product(id) {
            this.products.splice(id,1);
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
        },
        add_product() {
            if(this.new_product.title != '' && this.new_product.description != ''){
                this.products.push({
                    title: this.new_product.title,
                    description: this.new_product.description
                });
                this.new_product.title='';
                this.new_product.description='';
            }
            else {
                alert("Введите количество продукта");
            }
        }
    }
});