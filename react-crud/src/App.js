import React, {Component} from 'react';
import './App.css';
import ProductItem from "./productItem";
import AddItem from "./AddItem";

const products=[
    {
        name:'iPad',
        price:200
    },
    {
        name:'iPhone',
        price:650
    },
];
localStorage.setItem("products",JSON.stringify((products)));
class App extends Component {
constructor(props){
    super(props);
    this.state={
        products: JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete=this.onDelete.bind(this);
    this.onAdd=this.onAdd.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
}
    componentWillMount() {
       const products =this.getProduct();
        this.setState({products});
    }
    getProduct(){
        return this.state.products;
        // console.log(products);
    }
    onAdd(name, price){
        const products=this.getProduct();
        products.push({
            name,
            price
        });
        this.setState({products});
    }
    onDelete(name){
        const products =this.getProduct();
        const filterProduct=products.filter(product=>{
            return product.name !==name;
        });
        this.setState({products:filterProduct});
        console.log(filterProduct);
    }
    onEditSubmit(name , price, originalName){
        let products =this.getProduct();
         products=products.map(product=>{
            if(product.name===originalName){
                product.name=name;
                product.price=price;
            }
            return product;
        });
        this.setState({products});
    }

    render() {
        return (
            <div className="App">
                <h1>Product Maanager</h1>
                <AddItem
                    onAdd={this.onAdd}
                />
                {
                    this.state.products.map(product=>{
                        return(

                           <ProductItem
                           key={product.name}
                           {...product}
                               onDelete={this.onDelete}
                           onEditSubmit={this.onEditSubmit}
                           />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;


// import React, {Component} from 'react';
// import './App.css';
// import MyComponent from "./MyComponent";
//
// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             title:"App Title"
//         }
//         this.onClick=this.onClick.bind(this);
//     }
//     onClick(){
//         this.setState({title:'New Title'});
//     }
//
//     render() {
//         return (
//             <div className='App'>
//                 <h1>{this.state.title}</h1>
//                 <div  onClick={this.onClick}>Click</div>
//                 <MyComponent
//                     title={2}
//                     // name="Shaikot"
//                     onClick={this.onClick}
//                 />
//
//             </div>
//         );
//     }
// }
//
// export default App;

