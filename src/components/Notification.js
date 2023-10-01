import infoSVG from '../images/info.svg'

const Notification = ({ isOpen, isNotChange }) => {
    return (
        <div style={{ display: isNotChange ? 'flex' : 'none' }} className={isOpen ? 'notification notification-open' : 'notification'}>
            <div className="notification__content">
                <img src={infoSVG} alt="Information" className="notification__icon" />
                <span className="notification__message">Данные изменены</span>
            </div>
        </div>
    );
}

export default Notification;