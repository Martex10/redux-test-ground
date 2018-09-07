import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return(
                <div>Select a book to get started.</div>
            );
        }
        return(
            <div>
                <h3>Details for :</h3>
                <div>{this.props.book.title}</div>
            </div> 
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

//Promote BookDetail from a component to a container 
//uses mapStateToProps and makes the state retrived from this function 
//into props on this component  
export default connect(mapStateToProps)(BookDetail);