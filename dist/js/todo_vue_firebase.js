const database = {
    set(key, value) {
        write(value, key)
        // value = JSON.stringify(value);
        // localStorage.setItem(key, value);
    },
    async get(key, def) {
        let value = await read(key);
        if (value) {
            return value;
        }
        return def;
        // localStorage.getItem(key);
        // let value = localStorage.getItem(key);
        // if (value) {
        //     value = JSON.parse(value);
        //     return value;
        // }
        // return def;
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
            this.update();
        },
        doRemove(index) {
            console.log(index)
        },
        toDone(index) {
            // 把代辦項目搬移到已完成資料內
            // 刪除目前代辦項目
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);
            this.update();
        },
        toPending(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
            this.update();
        },
        update() {
            database.set('todo-pending', this.pending);
            database.set('todo-done', this.done);
        },
        doSaveCloud() {
            Swal.fire({
                title: '儲存到雲端',
                text: '請輸入 UID',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: '儲存',
                cancelButtonText: '先不要'
            }).then(response => {
                if(response.value) {
                    let api = 'https://book.niceinfos.com/frontend/api/';

                    // 使用表單物件
                    // let form = new FormData;
                    // form.append('action', 'todo');
                    // form.append('uid', response.value);
                    // form.append('data', {
                    //     pending: this.pending,
                    //     done: this.done
                    // });

                    let params = {
                        action: 'todo',
                        uid: response.value,
                        data: {
                            pending: this.pending,
                            done: this.done
                        }
                    }
                    fetch(api, {
                        method: 'POST',
                        body: JSON.stringify(params)
                    }).then(response => {
                        return response.text();
                    }).then(text => {
                        setTimeout(() => {
                            let data = JSON.parse(text);
                            console.log(data);
                            Swal.fire({
                                title: '儲存完畢',
                                text: '資料已儲存',
                                icon: 'success'
                            })
                        }, 2000);
                    })

                    Swal.fire({
                        title: '資料儲存中',
                        text: '請勿關閉或重新整理視窗',
                        showCancelButton:false
                    })
                }
            })
        },
        async doLoadCloud() {
            let response = await Swal.fire({
                title: '載入雲端資料',
                text: '請輸入 UID',
                input: 'text'
            });

            if (response.value) {
                let api = 'https://book.niceinfos.com/frontend/api/';
                fetch(`${api}?action=todo&uid=${response.value}`).then(response => {
                    return response.text();
                }).then(text => {
                    let response = JSON.parse(text);
                    if (response.data.pending) {
                        this.pending = response.data.pending;
                    }
                    
                    if (response.data.done) {
                        this.done = response.data.done;
                    }

                    this.update();
                })
            }
        }
    },
    async mounted() {
        this.pending = await database.get('todo-pending', []);
        this.done = await database.get('todo-done', []);
        listen('todo-pending', (value) => {
            this.pending = value || [];
        })
        
        listen('todo-done', (value) => {
            this.done = value || [];
        })
    },

}).mount('#app');