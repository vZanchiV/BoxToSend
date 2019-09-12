import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {readAllPost , deletedPost} from "../actions/index";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PostListItem from '../components/post-list-item';
import {Link} from 'react-router';



class PostList extends Component {
    constructor(props) {
        super(props)
        this.state= {displayOnlyMines : false}
    }
    componentWillMount() {
        this.props.readAllPost();
    }

    renderPost(){
        const {posts} = this.props; 
        let arrayPosts ;  
        if(posts) {
            console.log(this.state.displayOnlyMines,'??')
            if(this.state.displayOnlyMines) {
               arrayPosts =  this.filterMyPost(posts)
            } else {
                arrayPosts  = posts
            }

            return  arrayPosts.map( (post)=>{
                return  <PostListItem key={post.id} post={post} deletePostCallBack={(post)=> this.deletePostCallBack(post)}/>
            })
         
        }
    }
    deletePostCallBack(post) {
        this.props.deletedPost(post.id);
    }

    filterMyPost (postsList) {
        return postsList.filter((post) => {
            if(post.author === 'moi') {
                return true
            } else {
                return false
            }
        })
    }

    render() {
        return (
            <div>
               <h1>liste des posts</h1> 
               <input type="checkbox" onChange={(e)=> this.setState({displayOnlyMines: e.target.checked}) } />Afficher mes poste
               <div className="button_add">
                   <Link to={'create-post'}>
                       <button className="btn btn-primary btn-circle">+</button>
                   </Link>
               </div>
               <table className="table table-hover">
                   <thead>
                       <tr>
                           <th>Titre</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <CSSTransitionGroup
                   component="tbody"
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
                       {this.renderPost()}
                   </CSSTransitionGroup >
               </table>
            </div>
        )
    }
}

// call a chaque fois que le state change .. tout est mis dans les propos
function mapStateToProps(state){
    return {
        posts : state.posts
    }
}


// met l'action dans les props -- cette function ne retourn pas l action  mais dispatch l action dans redux
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllPost,deletedPost},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(PostList)