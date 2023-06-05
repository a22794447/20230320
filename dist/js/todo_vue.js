const database = {
    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    },
    get(kry) {
        // localStorage.getItem(key);
        let value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(key);
        }
        return value;
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}

Vue.createApp({
    data() {
        return {
            pending: [],
            done: [],
            itemValue: '',
        }
    },
    methods: {
        doAddItem() {
            let value = this.itemValue
            if (!value) {
                Swal.fire({
                    title: '新增錯誤',
                    text: '請輸入項目名稱',
                    icon: 'error',
                }).then(() => {
                    setTimeout(() => {
                        this.$refs.itemValue.focus();
                    }, 500)
                })
                return;
            }
            this.pending.push(value);
            this.itemValue = '';
            this.$refs.itemValue.focus();
            database.set('todo-pending', this.pending);
        },
        toDone(index) {
            // 把代辦項目搬移到已完成資料內
            // 刪除目前代辦項目
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);

            // console.log(index, value)
        },
        toPending(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
        }
    }
}).mount('#app');