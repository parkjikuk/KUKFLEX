import { atom } from "recoil";

const listPageReLoading = atom({
    key: 'listPageReLoading',   //Unique한 key
    default: false,
})

const focusNav = atom({
    key: 'focusNav',
    default: "",
})

export {listPageReLoading, focusNav};