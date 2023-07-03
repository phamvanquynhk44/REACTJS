import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SpecialtyImg from '../../../assets/specialty/san-phu-khoa.jpg';

class Specialty extends Component {

    changeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };

        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <h2 className='specialty-title'>Chuyên khoa phổ biến</h2>
                        <button className='specialty-btn'>xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='img-customize'>
                                <img src={SpecialtyImg}/>
                                <p>Sản Phụ khoa</p>
                            </div>
                            <div className='img-customize'>
                                <img src={SpecialtyImg}/>
                                <p>Sản Phụ khoa</p>
                            </div>
                            <div className='img-customize'>
                                <img src={SpecialtyImg}/>
                                <p>Sản Phụ khoa</p>
                            </div>
                            <div className='img-customize'>
                                <img src={SpecialtyImg}/>
                                <p>Sản Phụ khoa</p>
                            </div>
                            <div className='img-customize'>
                                <img src={SpecialtyImg}/>
                                <p>Sản Phụ khoa</p>
                            </div>
                            <div className='img-customize'>
                                <img src={SpecialtyImg}/>
                                <p>Sản Phụ khoa</p>
                            </div>
                        </Slider>
                    </div>

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
