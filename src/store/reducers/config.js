import { createStore } from 'redux'
import userReducer from './userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'user',
    storage,
    // whitelist: ['isLoggedIn', 'userInfo']
}
// const persistCommonConfig = {
//     storage: storage,
//     stateReconciler: autoMergeLevel2,
// };

// const userPersistConfig = {
//     ...persistCommonConfig,
//     key: 'user',
//     whitelist: ['isLoggedIn', 'userInfo']
// };
const persistedReducer = persistReducer(persistConfig, userReducer)

export default () => {
    let reduxStore = createStore(persistedReducer)
    let persistor = persistStore(reduxStore)

    return { reduxStore, persistor }
}
//export default store
// export default { reduxStore, persistor }
// const reduxStore = () => {
//     let reduxStore = createStore(persistedReducer)
//     return reduxStore
// }
// const persistor = (reduxStore) => {
//     let persistor = persistStore(reduxStore)
//     return persistor
// }
// export default {reduxStore, persistor}