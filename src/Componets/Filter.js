import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/Filter.css'
import { Slider, Typography } from '@mui/material'




const Filter = ({ products, setFilteredProducts }) => {

	const [filterCriteria, setFilterCriteria] = useState({
		category: '',
		priceRange: { min: 0, max: 1000 },
		rating: 0
	});
	const [value, setValue] = useState([0,1000]);
	const handleCategoryChange = (event) => {
		setFilterCriteria({ ...filterCriteria, category: event.target.value });
	};

	const handlePriceRangeChange = (event,value) => {

		setFilterCriteria({ ...filterCriteria, priceRange:{min:value[0],max:value[1]} });
		setValue(event.target.value)
	};

	const handleRatingChange = (event) => {
		setFilterCriteria({ ...filterCriteria, rating: event.target.value });
	};
	
	const applyFilters = () => {
		const filteredProducts = products.filter((product) => {
			let passCategory = true;
			let passPriceRange = true;
			let passBrand = true;

			if (filterCriteria.category) {
				passCategory = product.category === filterCriteria.category;
			}

			
			if (filterCriteria.priceRange) {
				
				passPriceRange = product.price >= parseInt(filterCriteria.priceRange.min) && product.price <= parseInt(filterCriteria.priceRange.max);
			  }
		

			if (filterCriteria.rating) {
				
				passBrand = product.rating.rate >= parseInt(filterCriteria.rating);
			}

			return passCategory && passPriceRange && passBrand;
		});
		
		setFilteredProducts(filteredProducts);
	};
	function ressetFilters() {
		setFilterCriteria({
			category: '',
			priceRange: { min: 0, max: 1000 },
			rating: 0
		})
		setValue([0, 1000])
		setFilteredProducts(products)
	}
		const [categories, setcategories] = useState([""]);
	useEffect(() => {
		const fetchdata = async () => {
			const data = await axios.get('https://fakestoreapi.com/products/categories')
				.then(res => res.data)
			setcategories(data);
		}
		fetchdata();
	}, [])
	

	return (
		<>
			<div className="container">
				<div className="row" id="filter">
					<form>
						<div className="form-group col-12">
							<select data-filter="model" value={filterCriteria.category} className="filter-model filter form-control"  onChange={handleCategoryChange}>
								<option value="">Categories</option>
								{
									categories && categories.map((item,index) => (
										<option key={index} value={item}>{item}</option>
									))
								}
							</select>
						</div>
						<div className="form-group col-12">
						<select data-filter="model" value={filterCriteria.rating} className="filter-model filter form-control"  onChange={handleRatingChange}>	
								<option value="">Rating</option>
								{[1,2,3,4].map((item, i) =>(
									<option value={item} key={i}>{item} or Above</option>
								))
								}
							</select>
						</div>
						<div className="form-group col-12 slide">
							<Typography>Price Range</Typography>
							<Slider
								min={0}
								max={1000}
								defaultValue={80}
								value={value}
								step={10}
								valueLabelDisplay="on" onChange={handlePriceRangeChange}
							/>

						</div>
						
					</form>
					<div className="form-group col-12">
					<button onClick={applyFilters}>Apply Filters</button>
					</div>
					<div className="form-group col-12">
					<button onClick={ressetFilters}>Reset Filters</button>
					</div>
					
				</div>
			</div>


		</>
	)
}

export default Filter