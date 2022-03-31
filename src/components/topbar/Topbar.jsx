import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">administrator</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img
                        src="https://images.pexels.com/photos/6465937/pexels-photo-6465937.jpeg?cs=srgb&dl=pexels-asep-syaeful-bahri-6465937.jpg&fm=jpg"
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
}
