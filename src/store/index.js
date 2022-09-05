import { createStore  } from 'vuex'

export default createStore({
    state: {
        memos:[]
    },
    mutations: {
        save(state, newMemo) {
            state.memos.unshift(newMemo)
        }
    }
})