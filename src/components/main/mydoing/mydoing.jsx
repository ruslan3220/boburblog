import iconimg from "../../../assets/image/right.svg"
import facebook from "../../../assets/image/facebook.png"
import github from "../../../assets/image/github.png"
import twitter from "../../../assets/image/twitter.png"
import linkedin from "../../../assets/image/linkedin.png"

export const Mydoing = ()=>{
    return(
        <div className="col-4">
                <h3 style={{color: '#474747', fontWeight: '400', fontSize: '24px'}}>What I do!</h3>
 
                <p style={{marginTop: '36px', width: '250px', fontWeight: '300', lineHeight: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                <p style={{marginTop: '28px', fontWeight: '400', fontSize: '12px'}} className="d-flex align-items-center gap-2 h5">Explore Me <img style={{width: '18px', background: '#fff'}} className="card p-1 bg-light" src={iconimg} alt="search icon"/> </p>
                <div style={{marginTop: '53px'}} className="d-flex gap-3">
                    <img src={facebook} alt="facebook" />
                    <img src={github} alt="github" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
        </div>
    )
}