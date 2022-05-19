import React from 'react'
import profilePic from '../../assets/images/profilepic.jpg';
import DefaultImage from '../../assets/images/DefaultImage.jpg';
import NumberFormat from 'react-number-format';

const BracketMatchBox = (props) => {
    return (
    <div className={`bracket_match_box${props.match} d-flex flex-column m-0 p-0 pr-2 pl-2`}>
        <div className="bracket_match_header d-flex justify-content-between align-items-center mr-0 ml-0 mb-0 p-0">
            <div className="bracket_match_index">
                # 1
            </div>
            <div className="bracket_match_court_date">
                Court 04 | 12:34 PM
            </div>
        </div>

        <div className="bracket_match_team_1 row m-0 p-0">
            <div className="bracket_match_team_no col-2 m-0 p-0 d-flex justify-content-center align-items-center">
                1
            </div>
            <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center">
                <img src={profilePic} className="bracket_match_player_1_img" alt=""/>
                <img src={DefaultImage} className="bracket_match_player_2_img" alt=""/>
            </div>
            <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="row m-0 p-0">
                    <div className="bracket_match_player_1 m-auto">
                        Taylor C.
                    </div>
                    <div className="bracket_match_player_2 m-auto">
                        Mike G.
                    </div>
                </div>
            </div>
            <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="row m-0 p-0">
                        <input
                        type='text'
                        className="col-3 m-0 bracket_score form-control pl-1 pr-1"
                        autoComplete="off"
                        value=""
                        placeholder="00"
                        />
                        <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
                        <input
                        type='text'
                        className="col-3 m-0 bracket_score form-control pl-1 pr-1"
                        autoComplete="off"
                        value=""
                        placeholder="00"
                        />
                        <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
                        <input
                        type='text'
                        className="col-4 m-0 bracket_score form-control pl-1 pr-1"
                        autoComplete="off"
                        value=""
                        placeholder="00"
                        />
                </div>
            </div>
        </div>
        
        <div className="bracket_match_team_2 row ml-0 mr-0 mb-0 p-0">
            <div className="bracket_match_team_no_2 col-2 m-0 p-0 d-flex justify-content-center align-items-center">
                2
            </div>
            <div className="bracket_match_team_icons col-3 m-0 p-0 d-flex justify-content-start pl-1 align-items-center">
                <img src={profilePic} className="bracket_match_player_1_img" alt=""/>
                <img src={DefaultImage} className="bracket_match_player_2_img" alt=""/>
            </div>
            <div className="bracket_match_team_names col-3 m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="row m-0 p-0">
                    <div className="bracket_match_player_1 m-auto">
                        Taylor C.
                    </div>
                    <div className="bracket_match_player_2 m-auto">
                        Mike G.
                    </div>
                </div>
            </div>
            <div className="bracket_match_team_score col-4 m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="row m-0 p-0">
                        <input
                        type='text'
                        className="col-3 m-0 bracket_score form-control pl-1 pr-1"
                        autoComplete="off"
                        value=""
                        placeholder="00"
                        />
                        <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
                        <input
                        type='text'
                        className="col-3 m-0 bracket_score form-control pl-1 pr-1"
                        autoComplete="off"
                        value=""
                        placeholder="00"
                        />
                        <div className="col-1 m-0 p-0 d-flex justify-content-center align-items-center">-</div>
                        <input
                        type='text'
                        className="col-4 m-0 bracket_score form-control pl-1 pr-1"
                        autoComplete="off"
                        value=""
                        placeholder="00"
                        />
                </div>
            </div>
        </div>
    </div>
    )
}

export default BracketMatchBox
