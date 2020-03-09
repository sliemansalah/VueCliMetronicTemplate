import Dashboard from "../views/Dashboard";
import Index from "../views/customers/Index";
import Customers from "../views/customers/View";
import AddCustomer from "../views/customers/Add";

export default  [
    { path: '/', component: Dashboard },
    { path: '/customers', component: Index, children:[
        { path: '', component: Customers },
        { path: 'add', component: AddCustomer },
    ] },
]
