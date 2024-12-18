// import React,{Component} from "react";
// import { fetchData } from "../../../Controllers/ItemList";

// class Home extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//         data:null,
//         error:null,

//     }
//   }
//  async componentDidMount(){
  
//     try{
//   const data=await fetchData()
//   this.setState({data})
//     }
//     catch(error)
//     {
//   this.setState({error})
//     }
// }

//     render(){
// const{data,error}=this.state

//         return(
// <div>
// <h1>data</h1>
// {data && data.map((item, index) => (
//             <li key={index}>{item.name}</li> 
//           ))}
//           <button>previous</button>
//           <button>Next</button>
// </div>
//         )
//     }
// } 

// export default Home;