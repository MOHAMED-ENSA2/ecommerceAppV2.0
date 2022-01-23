import React from 'react'

import CatgCard from './CatgCard'
import "./Categories.css"
import Title from '../title/Title'

function Categories() {
    return (
    
    <div class="categories-container">
        
            <Title title = "categories" name = "/products" />
            <div className = "Categories">
                <div class="catg-sec1">
                    <CatgCard name = "Fruits" src = "https://cdnprod.mafretailproxy.com/sys-master-root/h1e/h25/15184051568670"/>
                </div>
                <div class="catg-sec2">
                    <CatgCard  name = "Meat&Poutlry" src = "https://cdnprod.mafretailproxy.com/sys-master-root/hd3/hd7/15184575103006"/>
                </div>
                <div class="catg-sec3">
                    <CatgCard name = "Dairy" src = "https://cdnprod.mafretailproxy.com/sys-master-root/heb/h36/15184050978846"/>
                </div>
                <div class="catg-sec4">
                    <CatgCard name = "Oil&Ghee" src = "https://cdnprod.mafretailproxy.com/sys-master-root/h1f/h67/15183625519134"/>
                </div>
                <div class="catg-sec5">
                    <CatgCard name = "Herbs&Spices" src = "https://cdnprod.mafretailproxy.com/sys-master-root/hde/hc4/15183627550750"/>
                </div>
                <div class="catg-sec6">
                    <CatgCard name = "Vegetables" src = "https://cdnprod.mafretailproxy.com/sys-master-root/hf8/h1a/15184051273758"/>
                </div>
                <div class="catg-sec7">
                    <CatgCard name = "Oil&Ghee" src = "https://cdnprod.mafretailproxy.com/sys-master-root/h1f/h67/15183625519134"/>
                </div>
                <div class="catg-sec8">
                    <CatgCard name = "Fruits" src = "https://cdnprod.mafretailproxy.com/sys-master-root/h1e/h25/15184051568670"/>
                </div>
            </div>
    </div>
    )
}

export default Categories
