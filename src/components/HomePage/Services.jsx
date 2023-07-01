import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <>
            <div id="services-container">
                <div className="services-blurb">
                    <h1>We help make change happen</h1>
                    <p>With our expertise in UX design and software engineering, we help socially-driven startups drive positive change and make a meaningful impact online. Discovery how we can work together today.</p>
                </div>
                
                <div className="services-list">
                    <h2>Design Research</h2>
                    <p>Uncover powerful insights that drive positive change</p>

                    <h2>Experience Design</h2>
                    <p>Craft inclusive and user centred digital experiences</p>

                    <h2>Front- & Back-End Development</h2>
                    <p>Create digital products to work seamlessly across all screens</p>

                    <h2>Brand Strategy</h2>
                    <p>Develop your brand with purpose and vision at the centre</p>
                </div>
                <svg id="service-shape" width="164" height="170" viewBox="0 0 164 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M14.1519 91.4746L5.3346 97.447C0.780021 100.533 -1.07193 105.906 0.614873 111.137C2.30064 116.369 6.94558 119.594 12.4464 119.504L23.3909 119.205C26.0571 119.174 28.4056 120.309 29.9459 122.434C31.4873 124.562 31.8612 127.197 30.9732 129.669L27.3202 139.82C25.4651 144.975 27.1249 150.4 31.5496 153.639C35.9713 156.876 41.6497 156.825 46.0142 153.502L54.981 146.679C57.0584 145.098 59.6727 144.651 62.1531 145.463C64.6345 146.272 66.4854 148.169 67.2301 150.667L70.4188 161.371C71.9799 166.613 76.5262 170 82 170C87.4738 170 92.0201 166.613 93.5812 161.371L96.7699 150.667C97.5146 148.169 99.3656 146.272 101.847 145.463C104.325 144.654 106.94 145.096 109.019 146.677L117.986 153.502C122.347 156.823 128.025 156.876 132.45 153.639C136.875 150.4 138.535 144.975 136.68 139.82L133.027 129.669C132.139 127.197 132.513 124.562 134.054 122.434C135.595 120.309 138.017 119.172 140.609 119.205L151.554 119.504C157.026 119.564 161.698 116.371 163.385 111.137C165.072 105.906 163.22 100.533 158.666 97.4491L149.848 91.4746C147.665 89.995 146.413 87.6355 146.413 85C146.413 82.3645 147.665 80.005 149.848 78.5254L158.665 72.553C163.22 69.4672 165.072 64.0945 163.385 58.8629C161.699 53.6313 157.062 50.4252 151.554 50.4957L140.609 50.7946C137.982 50.8527 135.595 49.6906 134.054 47.5656C132.513 45.4385 132.139 42.803 133.027 40.3314L136.68 30.1796C138.535 25.0248 136.875 19.6002 132.45 16.3608C128.026 13.1215 122.347 13.1754 117.986 16.4978L109.019 23.321C106.943 24.9003 104.326 25.3485 101.847 24.5371C99.3656 23.7278 97.5146 21.8311 96.7699 19.3325L93.5812 8.62866C92.0201 3.38672 87.4738 0 82 0C76.5262 0 71.9799 3.38672 70.4188 8.62866L67.2301 19.3325C66.4854 21.8311 64.6345 23.7278 62.1531 24.5371C59.6738 25.3464 57.0584 24.9003 54.981 23.3231L46.0142 16.4978C41.6528 13.1754 35.9733 13.1215 31.5496 16.3608C27.1249 19.6002 25.4651 25.0248 27.3202 30.1796L30.9732 40.3314C31.8612 42.803 31.4873 45.4385 29.9459 47.5656C28.4056 49.6906 26.0208 50.8506 23.3909 50.7946L12.4464 50.4957C6.90507 50.4148 2.30168 53.6293 0.614873 58.8629C-1.07193 64.0945 0.780021 69.4672 5.33356 72.5509L14.1519 78.5254C16.3352 80.005 17.5868 82.3645 17.5868 85C17.5868 87.6355 16.3352 89.995 14.1519 91.4746ZM21.8412 85C21.8412 80.9928 19.8594 77.2595 16.5408 75.01L7.72147 69.0334C4.14116 66.6096 3.79425 62.8618 4.66465 60.1661C5.51636 57.5223 7.90531 54.7416 12.0704 54.7416C12.1556 54.7416 12.2428 54.7416 12.3301 54.7457L23.2745 55.0446C27.2236 55.084 31.05 53.291 33.3922 50.0579C35.7355 46.8247 36.3275 42.6515 34.9762 38.8954L31.3232 28.7435C29.8649 24.6886 31.7823 21.4596 34.0643 19.7891C36.3462 18.1206 40.0055 17.2677 43.4362 19.8762L52.403 26.7036C55.5596 29.1067 59.6935 29.804 63.4722 28.5775C67.2457 27.349 70.1747 24.3462 71.3079 20.5444L74.4966 9.84058C75.7243 5.71924 79.1779 4.25 82 4.25C84.8221 4.25 88.2757 5.71924 89.5034 9.84058L92.6921 20.5444C93.8253 24.3462 96.7543 27.349 100.528 28.5775C104.304 29.8081 108.439 29.1088 111.597 26.7015L120.564 19.8762C123.996 17.2698 127.655 18.1206 129.936 19.7891C132.218 21.4596 134.135 24.6886 132.677 28.7435L129.024 38.8954C127.672 42.6515 128.265 46.8247 130.608 50.0579C132.95 53.291 136.728 55.1006 140.725 55.0446L151.67 54.7457C155.977 54.5735 158.466 57.4663 159.335 60.1661C160.206 62.8618 159.859 66.6096 156.278 69.0355L147.459 75.01C144.141 77.2595 142.159 80.9928 142.159 85C142.159 89.0072 144.141 92.7405 147.459 94.99L156.279 100.967C159.859 103.39 160.206 107.138 159.335 109.834C158.484 112.478 156.095 115.258 151.93 115.258C151.844 115.258 151.757 115.258 151.67 115.254L140.725 114.955C136.79 114.872 132.951 116.709 130.608 119.942C128.265 123.175 127.672 127.349 129.024 131.105L132.677 141.256C134.135 145.311 132.218 148.54 129.936 150.211C127.654 151.879 123.995 152.732 120.564 150.124L111.597 143.296C108.439 140.893 104.301 140.192 100.528 141.422C96.7543 142.651 93.8253 145.654 92.6921 149.456L89.5034 160.159C88.2757 164.281 84.8221 165.75 82 165.75C79.1779 165.75 75.7243 164.281 74.4966 160.159L71.3079 149.456C70.1747 145.654 67.2457 142.651 63.4722 141.422C62.2465 141.024 60.9835 140.827 59.7278 140.827C57.1155 140.827 54.5354 141.674 52.403 143.298L43.4362 150.124C40.0065 152.734 36.3483 151.881 34.0643 150.211C31.7823 148.54 29.8649 145.311 31.3232 141.256L34.9762 131.105C36.3275 127.349 35.7355 123.175 33.3922 119.942C31.049 116.711 27.2537 114.852 23.2745 114.955L12.3301 115.254C8.00191 115.462 5.53402 112.532 4.66465 109.834C3.79425 107.138 4.14116 103.39 7.7225 100.964L16.5408 94.99C19.8594 92.7405 21.8412 89.0072 21.8412 85Z" fill="#E4B864"/>
                </svg>
            </div>
        </>
    )
}

export default Services;