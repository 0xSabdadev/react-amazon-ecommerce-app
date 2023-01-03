import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ArrowLeftOnRectangleIcon,
    UsersIcon,
    LinkIcon,
} from '@heroicons/react/24/outline'
const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt='footer-logo' />
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <MapPinIcon className={css.icon} />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href='tel:352-306-4415'>352-306-4415</a>
                        </span>
                        <span className={css.pngLine}>
                            <EnvelopeIcon className={css.icon} />
                            <a href='support@amazon.com'>support@amazon.com</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <ArrowLeftOnRectangleIcon className={css.icon} />
                            <a href='/login'>
                                <p>Sign In</p>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <a href='/about'>
                                <p>About Us</p>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright @2022 by Amazon, Inc.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
