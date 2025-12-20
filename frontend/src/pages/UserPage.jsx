
export default function UserPage() {



    return(
        <div className="userpage-wrap">
            <div className="user-info">
                <div className="img"></div>
                <div className="username"></div>
            </div>
            <div className="login-area">
                <div className="input-area">
                    <form action="login">
                        <input type="text" placeholder="admin id" />
                        <input type="text" placeholder="password" />
                    </form>
                </div>
            </div>
        </div>
    )
}