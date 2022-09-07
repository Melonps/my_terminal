import { createStore  } from 'vuex'

export default createStore({
    state: {
        count: 0,
        memos:[]
    },
    mutations: {
        save(state, newMemo) {
            newMemo.id = ++this.state.count
            state.memos.unshift(newMemo)
        }
    }
})