import React from "react"
import allBrands from "./BrandData";



class Brands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: allBrands,
            category: "💥  All"
        }
    }
    // filter the brands by category
    filterBrands = (category) => {
        this.setState({
            category: category
        })
    }
    // render the brands
    renderBrands = () => {
        let filteredBrands = this.state.brands.filter(brand => {
            return brand.category === this.state.category || this.state.category === "💥  All"
        } )
        return filteredBrands.map(brand => {
            return (
                <div className="text-gray-700 font-regular flex p-2 m-2 rounded-md shadow-sm transition flex-wrap: wrap border border-gray-50 hover:border-gray-200 hover:shadow-md " key={brand.name}>
                    <p>{brand.icon}</p>
                    <a className="w-full" href={brand.url} target="_blank" >
                    <h3 className="mx-8">{brand.name}</h3>
                    </a>
                </div>
            )
        } )
    }
    // render the categories
    renderCategories = () => {
        let categories = this.state.brands.map(brand => {           

            return brand.category
        } )
        let uniqueCategories = [...new Set(categories.concat("💥  All"))]
        return uniqueCategories.map(category => {
            return (
                <div key={category} className="categoryButtons text-gray-50 font-semibold hover:opacity-50 transition	bg-gray-100 m-2 inline-flex rounded-md shadow-sm ">           
                    <button className="rounded-md shadow-sm  p-2 focus:shadow-lg focus:opacity-50 flex justify-start" onClick={() => this.filterBrands(category)}>{category}</button>
                </div>
            )
        } )
    }

    render() {
        return (
            <div className="brands-section max-w-5xl mx-auto px-4 ">
                <div className=" mb-8 mt-4 max-w-5xl">
                    {this.renderCategories()}
                </div>
                <div className="max-w-5xl grid grid-cols-1 grid-flow-row sm:grid-cols-2 mb-48">                     
                    {this.renderBrands()} 
                </div>
            </div>
        )
    }


    
}

export default Brands;
