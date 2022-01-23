import React from 'react'
import SubCatgCard from './SubCatgCard'
import "./SubCategories.css"
import Title from '../title/Title'

function SubCategories() {
    return (
        <div className = "SubCategories-container" >
            <Title title = "Electronics"  name = "/categorie/Electronics"/>
            <div className = "SubCategories">
                <div class="a">
                    <SubCatgCard  text = "Smart TVs & Accessoirs" src = "https://cdnprod.mafretailproxy.com/sys-master-root/hfa/h75/15186540036126"  type = "a"/>
                </div>
                <div class="b">
                    <SubCatgCard   text = "LArge applience " src = "https://cdnprod.mafretailproxy.com/sys-master-root/hc5/h15/15172299915294" type = "b" />
                </div>
                <div class="c">
                    <SubCatgCard  text = "Small applience" src = "https://cdnprod.mafretailproxy.com/sys-master-root/h0a/h5e/15172298637342" type = "b" />
                </div>
                <div class="d">
                    <SubCatgCard   text = "Laptops & printers" src = "https://cdnprod.mafretailproxy.com/sys-master-root/h4e/h1d/15172300144670"  type = "b" />
                </div>
                <div class="e">
                    <SubCatgCard  text = "LArge applience" src = "https://cdnprod.mafretailproxy.com/sys-master-root/hc5/h15/15172299915294"  type = "b" />
                </div>
            </div>
        </div>
    )
}

export default SubCategories
