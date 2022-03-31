import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
} from "@mui/icons-material";
import "./user.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://images.pexels.com/photos/1144232/pexels-photo-1144232.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-1144232.jpg&fm=jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Bell</span>
                            <span className="userShowUserTitle">
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                annabell99
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                07.12.1999
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                +84 938 858 944
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                annabell99@gmail.com
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                Vinh Long | VN
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    );
}
