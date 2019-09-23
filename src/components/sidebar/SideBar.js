import React from 'react'
// import { Route, BrowserRouter, Switch} from 'react-router-dom'
import '../../style/SideBar.css';
// import ManLink from './ManLink'
// import WomenLink from './WomenLink'
// import Fashion2019Link from './Fashion2019Link'
// import KidsLink from './KidsLink'
// import JeansLink from './JeansLink'
// import TshirtLink from './TshirtLink'
// import TopFasionLink from './TopFasionLink'
// import SummberCollectionLink from './SummberCollectionLink'
// import SpecialOfferLink from './SpecialOfferLink'
import deliveringImg from '../../img/delivering.png'
import CommentsLink from './CommentsLink'
import {NavLink} from 'react-router-dom'

//img imports
import vericalBarIcon from  '../../icon/verical-bar-icon.png'

const SideBar = () => {
    return (
        
        <div className="right-gride">
            <div className="products-menu">

                <div className="name-menue">
                    <p>Products Menu</p>
                </div>

                <nav className="categorie-items">
                    <NavLink to='/Man' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Man</NavLink>
                    <NavLink to='/Women' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Women</NavLink>
                    <NavLink to='/Fashion2019' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Fashion 2019</NavLink>
                    <NavLink to='/Kids' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Kids</NavLink>
                    <NavLink to='/Jeans' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Jeans</NavLink>
                    <NavLink to='/Tshirt' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Tshirt</NavLink>
                    <NavLink to='/TopFasion' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Top Fasion</NavLink>
                    <NavLink to='/SummberCollection' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Summber Collection</NavLink>
                    <NavLink to='/SpecialOffer' className="categorie-item categorie-item1"><img src={vericalBarIcon} alt="ico-side-bar"/>Special Offer</NavLink>
                </nav>
            
            </div>

            <div className="delivering">
                <img src={deliveringImg} className="delivering-img" alt="delivering-img"/>
            </div>

            <CommentsLink />
        </div>
        
    )
}

export default SideBar;



{/* <Switch>
    <Route path="/Man" component={ManLink} />
    <Route path="/Women" component={WomenLink} />
    <Route path="/Fashion2019" component={Fashion2019Link} />
    <Route path="/Kids" component={KidsLink} />
    <Route path="/Jeans" component={JeansLink} />
    <Route path="/Tshirt" component={TshirtLink} />
    <Route path="/TopFashion" component={TopFasionLink} />
    <Route path="/SummberCollection" component={SummberCollectionLink} />
    <Route path="/SpecialOfferLink" component={SpecialOfferLink} />
</Switch> */}

{/* <ManLink />
<WomenLink />
<Fashion2019Link />
<KidsLink />
<JeansLink />
<TshirtLink />
<TopFasionLink />
<SummberCollectionLink />
<SpecialOfferLink /> */}