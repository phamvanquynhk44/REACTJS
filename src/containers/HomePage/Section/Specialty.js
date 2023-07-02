import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import './yourJavaScriptFile.js';
//import { FormattedMessage } from 'react-intl';

class Specialty extends Component {

    changeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
    }

    render() {

        return (
            <div className='section-specialty'>
                <div className='specialty-content'>

                    


                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
