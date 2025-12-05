
export default function UserPage() {

    return(
        <div className="userpage-wrap">
            <div className="user-info">
                <div className="img"></div>
                <div className="username"></div>
            </div>
            <div className="admin-login">
                <div className="input-area">
                    <input type="text" placeholder="admin id" />
                    <input type="text" placeholder="password"/>
                </div>
            </div>
        </div>
    )
}