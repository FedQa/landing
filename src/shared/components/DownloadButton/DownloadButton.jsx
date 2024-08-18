import google from '../../assets/googleButton.svg'
import appStore from '../../assets/appStoreButton.svg'
import './DownloadButton.css'


function DownloadButton(props) {
    return(
        <button className="button">
            <img src={props?.type === "google" ? google : appStore} />
        </button>
    )
}


export default DownloadButton;