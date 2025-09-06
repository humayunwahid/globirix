'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import RentAccountantForm from './rentAccountantForm'
import RegistrationForm from './registerationForm'
export default function ToggleForms() {
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>

            <section className="s-our-saylo">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="s-sub-title mb-18 justify-center">
                                    <i className="icon-angles-right moveLeftToRight" />
                                       Explore Our Services

                                </p>
                                <p className="s-title text-center text-anime-wave">
                                    Smart Solutions to <span>Power Your Finances</span>
                                </p>
<p className="mb-70 text-center mt-2 mx-auto max-w-3xl">
  Whether you need a dedicated accountant or project-based delivery, our flexible engagement models give you access to skilled finance professionals — helping you save time, cut costs, and scale with confidence.
</p>
                   

                            
                        </div>
                        <div className="col-lg-12">
                            <div className="wg-tabs">
                                <ul className="overflow-x-auto menu-tab flex justify-center">
                                    <li className={`item ${isTab === 1 ? 'active' : ''}`} onClick={() => handleTab(1)}>
                                        <a>
                                            <span>
                                                Rent an Accountant
                                            </span>
                                        </a>
                                    </li>
                                    <li className={`item ${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)}>
                                        <a>
                                            <span>
                                                Delivery-Based Service
                                            </span>
                                        </a>
                                    </li>

                                </ul>
                                <div className="widget-content-tab">
                                    <div className={`widget-content-inner ${isTab === 1 ? 'active' : ''}`} style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
                                        <RentAccountantForm />
                                    </div>
                                    <div className={`widget-content-inner ${isTab === 2 ? 'active' : ''}`} style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
                                        <RegistrationForm />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
