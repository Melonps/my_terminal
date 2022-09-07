import { createStore  } from 'vuex'

export default createStore({
    state: {
        //初期状態を定義
        //countには何個目のメモかが入っていて、最新のメモはid=count、最初のメモはid=0となる。ちなみにmemosの配列にあるindexとは真逆になる
        count: -1,
        memos:[]
    },
    mutations: {
        //セーブ関数。memosに新たなnewmemoをいれ、newmemoidにcountを入れる
        save(state, newMemo) {
            newMemo.id = ++this.state.count
            state.memos.unshift(newMemo)
        }
    },
    getters: {
        //stateの状態を返す関数を定義。
        getCount: (state) => {
            return state.memos.length
        },
        getMemoById: (state) => (id) => {
            return state.memos.findIndex(memo => memo.id === id)
        },
    }
})