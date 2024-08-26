function Iphone(props) {
    return (
        <div className={props.className}>
            <svg width="439" height="893" viewBox="0 0 439 893" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_296_86)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M90.3598 0H348.64C408.64 0 436.821 33.2971 436.821 88.2034V283.603C438.091 284.052 439 285.263 439 286.687V388.133C439 389.556 438.091 390.767 436.821 391.216V813.797C436.821 863.703 408.534 893 358.64 893H80.3598C30.4659 893 2.17866 864.703 2.17866 813.797V390.382C0.909381 389.933 0 388.722 0 387.299V326.993C0 325.569 0.909381 324.359 2.17866 323.91V303.923C0.909381 303.474 0 302.263 0 300.84V239.534C0 238.11 0.909381 236.899 2.17866 236.45V205.925C0.909381 205.476 0 204.266 0 202.842V175.599C0 174.176 0.909381 172.965 2.17866 172.516V88.2034C2.17866 33.3 30.3598 0 90.3598 0Z" fill="black"/>
                    <mask id="mask0_296_86" maskUnits="userSpaceOnUse" x="23" y="19" width="393" height="852">
                        <path fillRule="evenodd" clipRule="evenodd" d="M416 806V84C416 45 400.5 19 352 19H87C38.5 19 23 45 23 84V806C23 845 38.5 871 87 871H352C400.5 871 416 845 416 806ZM175.5 30C165.283 30 157 38.2827 157 48.5C157 58.7173 165.283 67 175.5 67H263.5C273.717 67 282 58.7173 282 48.5C282 38.2827 273.717 30 263.5 30H175.5Z" fill="#FFFFFF"/>
                    </mask>
                    <g mask="url(#mask0_296_86)">
                        <image href={props.href} x="23" y="19" width="393" height="852" />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_296_86">
                        <rect width="439" height="893" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default Iphone;
