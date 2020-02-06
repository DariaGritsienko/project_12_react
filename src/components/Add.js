import React from "react";
import PropTypes from "prop-types";

class Add extends React.Component {
    state = {
        name: '',
        text: '',
        bigText: '',
        checkbox: false,
    }

    onBtnClickHandler = (e) => {
        e.preventDefault()
        const {name, text, bigText} = this.state
        this.props.onAddNews({
            id: +new Date(),
            text,
            author: name,
            bigText,
        })
    }

    handleChange = (e) => {
        const { id } = e.currentTarget
        this.setState({ [id]: e.currentTarget.value })
    }
    handleCheckboxChange = (e) => {
        this.setState({checkbox: e.currentTarget.checked})
    }
    validate = () => {
        const { name, text, checkbox } = this.state
        if (name.trim() && text.trim() && checkbox) {
            return true

        }else return false
    }
    render(){
        const { name, text, bigText } = this.state
        return(
            <form className='add'>
                <input
                    id='name'
                    type='text'
                    onChange={this.handleChange}
                    className='add__author'
                    placeholder='Ваше имя'
                    value = {name}
                />
                <textarea
                    id='text'
                    onChange={this.handleChange}
                    className='add__text'
                    placeholder='Текст новости'
                    value={text}
                />
                <textarea
                    id = 'bigText'
                    onChange={this.handleChange}
                    className='add__text'
                    placeholder='Текст новости подробно'
                    value={bigText}
                />
                <label className='add__checkrule'>
                    <input type='checkbox' onChange={this.handleCheckboxChange}/>
                    Я согласен с правилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                >
                    Добавить новость
                </button>
            </form>
        )
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired,
}

export {Add}