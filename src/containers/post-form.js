import React, { Component } from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createPost} from '../actions/index';
import {browserHistory} from 'react-router'

const formConfig = {
    form:"createPostForm",
    fields:['title', 'content','author'],
    validate: validate,
    initialValues : {author:'moi'}
}

class PostForm extends Component {
    render() {
        const {fields: {title,content,author},handleSubmit,errors} = this.props;
        console.log(errors)
        return (
            <div>
                <form onSubmit={handleSubmit(this.createPost.bind(this))}>
                <h1>Nouveau Post</h1>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className={`form-control ${title.touched && title.touched ? 'has-danger' : '' }`} {...title} ></input>
                    <div>{title.touched && errors.title}</div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="textarea" className="form-control" {...content}></input>
                    <div>{content.touched && errors.content}</div>
                </div>
                <div className="form-group">
                    <label>Auteur</label>
                    <input type="text" className="form-control" {...author}></input>
                    <div>{author.touched && errors.author}</div>
                </div>
                <div>
                    <Link to={"/"} className="button_space">
                        <button  className="btn btn-danger">Retour</button>
                    </Link>
                    <button type="submit"disabled={this.props.invalid} className="btn btn-primary">Créer</button>
                </div>
                </form>
            </div>
        )
    }

    createPost(post) {
        console.log(this.props)
        this.props.createPost(post);
        browserHistory.push('/');
    }
}

function validate(value) {
    const errors = {};
    if(!value.title) {
        errors.title ="Veuillez remplir le titre"
    }
    if(!value.content) {
        errors.content ="Veuillez remplir la description"
    }
    if(!value.author) {
        errors.author ="Veuillez remplir l'autheur"
    }
    return errors;
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({createPost},dispatch)
})

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm))
