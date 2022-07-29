import {Link} from "react-router-dom"

export const FooterNav = ()=>{
    return(
        <div className="d-flex gap-5">
            <div className="d-inline-block">
                <h5 style={{ margin: '0', marginBottom: '14px', textDecoration: 'none', color: '#fff'}} >FIGHT WITH ME ON:</h5>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Twitter</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Instagram</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Telegram</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>You Tube</Link>
                <Link to="/" style={{textDecoration: 'none', color: '#fff', display: "block"}}>Figma</Link>
            </div>
            <div className="d-inline-block">
                <h5 style={{ margin: '0', marginBottom: '14px',textDecoration: 'none', color: '#fff'}} >WHAT I HAVE DONE:</h5>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Xalq kutubxonasi</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Websitee</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Website</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Play Market</Link>
                <Link to="/" style={{textDecoration: 'none', color: '#fff', display: "block"}}>App Store</Link>
            </div>
            <div className="d-inline-block">
                <p style={{ margin: '0', marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}} >Contact</p>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Blog</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>Dribbble</Link>
                <Link to="/" style={{ marginBottom: '15px',textDecoration: 'none', color: '#fff', display: "block"}}>You Tube</Link>
                <Link to="/" style={{ textDecoration: 'none', color: '#fff', display: "block"}}>Behance</Link>
            </div>
        </div>
    )
}