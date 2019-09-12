import React, { Component } from 'react';
import PostContent from '../components/post-content';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {readPost} from '../actions/index';
class Post extends Component {

    componentWillMount () {
        this.props.readPost(this.props.params.id)
    }

    render() {

        return (
            <div>
               Post numéro :{this.props.params.id}
               <PostContent post={this.props.post} />
            </div>
        )
    }

    
}

// call a chaque fois que le state change .. tout est mis dans les propos
function mapStateToProps(state){
    return {
        post : state.activePost
    }
}

// met l'action dans les props -- cette function ne retourn pas l action  mais dispatch l action dans redux
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readPost},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Post)

