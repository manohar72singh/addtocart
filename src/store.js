import { legacy_createStore as createStore} from 'redux'
import rootreducer from './Components/redux/reducers/main';


const store = createStore(
    rootreducer
);

export default store; 