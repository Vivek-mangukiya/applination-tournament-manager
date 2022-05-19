import React, {useContext, useState, useEffect} from 'react'
import Header from '../../components/header/Header';
import './StripeKeyPage.css';
import keyImg from '../../assets/images/key.svg';
import stripeLogo from '../../assets/images/stripe-seeklogo-com.svg';
import StripeContext from '../../context/stripe/stripeContext';

const StripeKeyPage = (props) => {
    
    const stripeContext = useContext(StripeContext);
    const {
        updateKeys,
        getKeys,
        privateKeyContext,
        secretKeyContext,
        addKeysMessage,
        addKeysError,
        getKeysError,
        clearErrorMessages,
    } = stripeContext;

    const [publishKey, setPublishKey] = useState(null);
    const [secretKey, setSecretKey] = useState(null);

    useEffect(() => {
        getKeys();
        setPublishKey(privateKeyContext);
        setSecretKey(secretKeyContext);
        console.log(privateKeyContext,secretKeyContext)
    }, [privateKeyContext,secretKeyContext])

    useEffect(() => {
        clearErrorMessages();
    }, [])

    useEffect(() => {
        console.log(addKeysError,addKeysMessage)
    }, )

    const onSave = async() => {
        // if(publishKey.length < 1){

        // }
        updateKeys({publish_key:publishKey,secret_key:secretKey});
    }

    return (
        <>
            <div>
                <Header/>
                <div className="main_page container p-0">
                    <div className="row">
                        <div className="stripe_logo_box col-12 text-left">
                            <img className="stripe_logo" src={stripeLogo} alt=""/>
                        </div>
                        <div className="col-5 m-auto text-center">
                            <div className="row">
                                <div className="col-12">
                                    {addKeysMessage!==null?(
                                    <>
                                        <div className="stripe_message">{addKeysMessage}</div>
                                    </>
                                    ):(
                                    <>
                                        <div className="stripe_error_message">{addKeysError}</div>
                                    </>
                                    )}
                                    <div className="payment_box pb-0 px-0">
                                        <div className="key_box">
                                            <img className="key_img" src={keyImg} alt=""/>
                                        </div>
                                        <div className="payment_key_text">Publishable key</div>
                                        <div className="payment_key_value row">
                                            <div className="col-10 d-flex justify-content-center">
                                                <input className={addKeysMessage!==null?"payment_key_value_text_orange":(addKeysError!==null?"payment_key_value_text_pink":"payment_key_value_text")} 
                                                    placeholder="Enter or paste here"
                                                    value={publishKey}
                                                    onChange={(e)=>setPublishKey(e.target.value)}
                                                    onBlur={secretKey && secretKey.length>0?()=>onSave():()=>{}}/>
                                            </div>
                                        </div>
                                        <div className="payment_key_text">Secret key</div>
                                        <div className="payment_key_value row">
                                            <div className="col-10 d-flex justify-content-center">
                                                <input className={addKeysMessage!==null?"payment_key_value_text_orange":(addKeysError!==null?"payment_key_value_text_pink":"payment_key_value_text")}
                                                    placeholder="Enter or paste here"
                                                    value={secretKey}
                                                    onChange={(e)=>setSecretKey(e.target.value)}
                                                    onBlur={()=>onSave()}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment_box_message">
                                        If you have any questions please contact AVP or Stripe directly 
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StripeKeyPage
