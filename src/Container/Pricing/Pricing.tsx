import React, { useState } from 'react'
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'
import './Price.css'
import { FaLeaf, FaPeopleCarry } from 'react-icons/fa'
import { TiSocialLastFm } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'
import {

    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button
} from '@chakra-ui/react';


const Pricing = () => {

    const [value, setValue] = useState([10, 30])
    const [toggle, setToggle] = useState(false)
    const [welcome, setWelcome] = useState(false)
    
    const reachingModal = (
        
        <Modal closeOnOverlayClick={false} size={'lg'} onClose={() => setToggle(false)} isOpen={toggle}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal2_text'>
                        <div className={'reaching_heading'}>
                            <AiOutlineClose style={{ cursor: 'pointer' }} onClick={() => setToggle(false)} />
                        </div>
                        <div className='reaching_container'>
                            <h3>Thanks for reaching to EI Dorado Eco Lodge!</h3>
                            <p>The accomodation will manage you within the next 24hours </p>
                            <p>You can find your conversation with the accomodation in your person box </p>
                            <div>
                                <button className="filled_color">Go to Inbox</button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    const WelcomeModal = (
        <Modal closeOnOverlayClick={false} size={'lg'} onClose={() => setWelcome(false)} isOpen={welcome}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal2_text'>
                        <div className={'reaching_heading'}>
                            <AiOutlineClose style={{ cursor: 'pointer' }} onClick={() => setWelcome(false)} />
                        </div>
                        <div className='welcome_container'>
                            <h3>Welcome to Ecomadic</h3>
                            <div>
                                <button className="filled_color">Continue</button>
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )




    return (
        <div className='form_container'>
            <h3>Price</h3>
            <div className="pricing_container">
                <RangeSlider min={5} max={50} onChange={(v: any) => setValue(v)} aria-label={['min', 'max']} defaultValue={[10, 50]}>
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>

                <div className="min_max_contaner">
                    <div className='price_container'>
                        <span>Min.Price</span>
                        <p>{`$${value[0]}`}</p>
                    </div>
                    <div className='price_container'>
                        <span>Max.Price</span>
                        <p>{`$${value[1]}`}</p>
                    </div>
                </div>
            </div>

            <h3>More Filters</h3>
            <div className="filters_container">
                <div className='accomodation'>
                    <h3>Accomodation Type</h3>
                    <div>
                        <input type="checkbox" />
                        <span>Entire place</span>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <span>Private bedroom</span>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <span>Shared bedroom</span>
                    </div>
                </div>
                <div>
                    <h3>Amenities</h3>
                    <div className="aminities_container">
                        <div>
                            <input type="checkbox" />
                            <span>Free WiFi</span>

                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>Business Lounge/Meeting Rooms</span>

                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>Breakfast Included</span>

                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Kitchenette</span>

                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>24-Hour Security</span>

                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Non-Smoking</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Restaurant</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Self check in</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Hair-Dryer</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Fireplace</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>TV</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sustainable_aminities'>
                <h3>Sustainable Amenities</h3>
                <div className="filters_container">
                    <div className="environment">
                        <div className='enviromental_leaft'>
                            <div className="inner_environment">
                                <div className='leaf'><FaLeaf /></div>
                                <span>Environmental</span>
                            </div>

                            <div className="Inner_social">
                                <div className='group'><FaPeopleCarry /></div>
                                <span>Social</span>
                            </div>
                        </div>
                    </div>

                    <div className='social_environmental'>
                        <div className='environmental' >
                            <div>
                                <input type="checkbox" />
                                <span>Environmentally Conscious</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Energy Efficient</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Water Efficient</span>
                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Water Management</span>
                            </div>


                            <div>
                                <input type="checkbox" />
                                <span>Responsible Sourcing</span>
                            </div>
                        </div>

                        <div className='social'>
                            <div>
                                <input type="checkbox" />
                                <span>Inclusive of Local People</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Embraces Culture & Heritage</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Local Ownership</span>
                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Local Hiring</span>
                            </div>


                            <div>
                                <input type="checkbox" />
                                <span>Supportive Work Environment & Culture</span>
                            </div>
                        </div>
                    </div>

                    <div className="environment" style={{ display: "flex" }}>
                        <div className='ecoIcon'><TiSocialLastFm /></div>
                        <span className='eco'>Economic</span>
                    </div>

                    <div className="economic">
                        <input type="checkbox" />
                        <span>Support the Local Economy</span>
                    </div>
                </div>
            </div>

            <div>
                {reachingModal}
                {WelcomeModal}
                <Button onClick={() => setToggle(true)}>Open Modal</Button>
                <Button onClick={() => setWelcome(true)}> Open Welcome Modal</Button>

            </div>


        </div >
    )
}

export default Pricing