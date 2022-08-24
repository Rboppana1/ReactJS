import React, {Component} from 'react';
import './App.css';
import {useTable} from "react-table";


class App extends Component {

  constructor (props) {
    super (props);
     
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    }).then(reponse => reponse.json()).then(posts => {
      this.setState({posts : posts})
    })
  }

  deleteRow(id){
    const index=this.state.posts.find.findIndex(post => {
      return post.id === id
    })
    console.log("index" , index)
  }

  render(){
    const columns = [
      {
        Header: "User ID",
        accessor: "userId",
        style : {
          textAlign : "right"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "ID",
        accessor: "Id", 
        style : {
          textAlign : "right"
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Title",
        accessor: "title",
        sortable : false,
        filterable : false
      },
      {
        Header: "Content",
        accessor: "body",
        sortable : false,
        filterable : false
      },
      {
        Header: "Actions",
        Cell : props => {
          return (
            <button style={{backgroundColor : "red",color : "#fefefe"}}
            onClick={() => {
              this.deleteRow(props.original.id);
            }}
            >Delete</button>
          )
        },
        sortable : false,
        filterable : false,
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    ]
    return(
      <useTable
      columns={columns}
      data={this.state.posts}
      filterable
      defaultPageSize={5}
      noDataText={"Please Wait..."}
      showPaginationTop
      >
      </useTable>
    );
  }
}

export default App;
