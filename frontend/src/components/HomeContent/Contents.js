import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contents.css";
import "./contentbar.css";
import axios from '../../api/axios-work';


const Contents = (props) => {
	const [selectedMenu, setSelectedMenu] = useState({
		graphic: false,
		programming: false,
		market: false,
		workType: 0,
		selectedId: 0,
	});

	const [showWorkFreelance, setShowWorkFreelance] = useState([]);

	const [showWorkCompany, setShowWorkCompany] = useState([]);

	function handleClickWork(value) {
		// showWork.work_post_id
		let sentWorkID = {
			workID: value
		}
		props.userWorkSelectID(sentWorkID)
		console.log(value) //shows value
	}


	const onClickGraphic = () => {
		setSelectedMenu({
			graphic: true,
			programming: false,
			market: false,
			workType: 1,
			selectedId: 0,
		});
		const job = {
			type_work_id: 1,
			select_id: 1,
		};
		axios.post(`/getallwork`, job).then((res) => {
			console.log(job);
			console.log(res.data);
			let work = res.data.allwork.map(Item => {
				return {
					work_post_id: Item.work_post_id,
					firstName: Item.firstName,
					lastName: Item.lastName,
					fullName: Item.firstName + " " + Item.lastName,
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image:  "images/postfreelance/"+Item.image_work_post_freelance,
					srcwork: "images/postfreelance/design.jpeg",
					path: "/WorkFreelance"
				}
			})
			setShowWorkFreelance(work)
			console.log(work);
		});
	};

	const onClickMarket = () => {
		setSelectedMenu({
			graphic: false,
			programming: false,
			market: true,
			workType: 2,
			selectedId: 0,
		});
		const job = {
			type_work_id: 2,
			select_id: 1,
		};
		axios.post(`/getallwork`, job).then((res) => {
			console.log(job);
			console.log(res.data);
			let work = res.data.allwork.map(Item => {
				return {
					work_post_id: Item.work_post_id,
					firstName: Item.firstName,
					lastName: Item.lastName,
					fullName: Item.firstName + " " + Item.lastName,
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image:  "images/postfreelance/"+Item.image_work_post_freelance,
					srcwork: "images/postfreelance/market.png",
					path: "/WorkFreelance"
				}
			})
			setShowWorkFreelance(work)
			console.log(work);
		});
	};

	const onClickProgramming = () => {
		setSelectedMenu({
			graphic: false,
			programming: true,
			market: false,
			workType: 3,
			selectedId: 0,
		});
		const job = {
			type_work_id: 3,
			select_id: 1,
		};
		axios.post(`/getallwork`, job).then((res) => {
			console.log(job);
			console.log(res.data);
			let work = res.data.allwork.map(Item => {
				return {
					work_post_id: Item.work_post_id,
					firstName: Item.firstName,
					lastName: Item.lastName,
					fullName: Item.firstName + " " + Item.lastName,
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image:  "images/postfreelance/"+Item.image_work_post_freelance,
					srcwork: "images/postfreelance/programming.jpeg",
					path: "/WorkFreelance"
				}
			})
			setShowWorkFreelance(work)
			console.log(work);
		});
	};


	const onClickWork = () => {
		setSelectedMenu({ ...selectedMenu, selectedId: 2 })
		const job = {
			type_work_id: selectedMenu.workType,
			select_id: 2,
		};
		axios.post(`/getallwork`, job).then((res) => {
			console.log(job);
			console.log(res.data);
			let work = res.data.allwork.map(Item => {
				return {
					work_post_id: Item.work_post_id,
					companyName: Item.companyname,
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_work_min,
					image:  "images/postfreelance/"+Item.image_work_post_company,
					srcwork: selectedMenu.workType === 1 ? "images/postfreelance/design.jpeg"
						: selectedMenu.workType === 2 ? "images/postfreelance/market.png"
							: selectedMenu.workType === 3 ? "images/postfreelance/programming.jpeg" : null,
					path: "/WorkCompany"
				}
			})
			setShowWorkCompany(work)
			console.log(work);
		});

	};

	const onClickFreelance = () => {
		setSelectedMenu({ ...selectedMenu, selectedId: 1 })
		const job = {
			type_work_id: selectedMenu.workType,
			select_id: 1,
		};
		axios.post(`/getallwork`, job).then((res) => {
			console.log(job);
			console.log(res.data);
			let work = res.data.allwork.map(Item => {
				return {
					work_post_id: Item.work_post_id,
					firstName: Item.firstName,
					lastName: Item.lastName,
					fullName: Item.firstName + " " + Item.lastName,
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image:  "images/postfreelance/"+Item.image_work_post_freelance,
					srcwork: selectedMenu.workType === 1 ? "images/postfreelance/design.jpeg"
						: selectedMenu.workType === 2 ? "images/postfreelance/market.png"
							: selectedMenu.workType === 3 ? "images/postfreelance/programming.jpeg" : null,
					path: "/WorkFreelance"
				}
			})
			setShowWorkFreelance(work)
			console.log(work);
		});

	};

	let showContent = <></>
	if (selectedMenu.selectedId === 1 || selectedMenu.selectedId === 0) {
		showContent = 
		<div className="cards__wrapper">
			<ul className="cards__items">
				{showWorkFreelance.map((Item, index) => {
					return (
						<>
							<li className="cards__item" key={index}>
								<Link
									className="cards__item__link"
									to={Item.path}
									onClick={() => handleClickWork(Item.work_post_id)}
								>
									<figure
										className="cards__item__pic-wrap"
										data-category={Item.fullName}
									>
										<img
											className="cards__item__img"
											// src={Item.srcwork}	Default image job
											src={Item.image}
											alt={String(Item.work_post_id)}
										/>
									</figure>
									<div className="cards__item__info">
										<h5 className="cards__item__text">
											{Item.typeWorkName}
										</h5>
										<h5 className="cards__item__text">
											{Item.nameWork}
										</h5>
										{/* <button type="button" value={Item.work_post_id} onClick={() => handleClickWork(Item.work_post_id)}>
										</button> */}
									</div>
									<h5 className="cards__item__text_price">
										{"ราคา : "+Item.pricePostWork}
									</h5>
								</Link>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	} else if (selectedMenu.selectedId === 2) {
		showContent = <div className="cards__wrapper">
			<ul className="cards__items">
				{showWorkCompany.map((Item, index) => {
					return (
						<>
							<li className="cards__item" key={index}>
								<Link
									className="cards__item__link"
									to={Item.path}
									onClick={() => handleClickWork(Item.work_post_id)}
								>
									<figure
										className="cards__item__pic-wrap"
										data-category={Item.companyName}
									>
										<img
											className="cards__item__img"
											// src={Item.srcwork}	Default image job
											src={Item.image}
											alt={String(Item.work_post_id)}
										/>
									</figure>
									<div className="cards__item__info">
										<h5 className="cards__item__text">
											{Item.typeWorkName}
										</h5>
										<h5 className="cards__item__text">
											{Item.nameWork}
										</h5>
									</div>
									<h5 className="cards__item__text_price">
										{"เงินเดือนเริ่มต้น : "+Item.pricePostWork}
									</h5>
								</Link>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	}

	let donate = <></>
	if (selectedMenu.workType === 0) {
		donate =
		<div className="space_img_donate">
			<img
				className="img_for_danate"
				src="/images/Donate.png"
			/>
		</div>
	}

	return (
		<div>
			<div className="cardbar">
				<div className="cardbar-container">
					<div>
						<div className="btn-group ">
							<button
								className={
									selectedMenu.graphic
										? "HoldbuttonJob"
										: "buttonJob"
								}
								onClick={onClickGraphic}
							>
								<i class="fas fa-palette fa-3x" />
								<h3>Graphic & Design</h3>
							</button>

							<button
								className={
									selectedMenu.market
										? "HoldbuttonJob"
										: "buttonJob"
								}
								onClick={onClickMarket}
							>
								<i class="fas fa-chart-line fa-3x" />
								<h3>Market</h3>
							</button>

							<button
								className={
									selectedMenu.programming
										? "HoldbuttonJob"
										: "buttonJob"
								}
								onClick={onClickProgramming}
							>
								<i class="fas fa-laptop-code fa-3x" />
								<h3>Programming</h3>
							</button>
						</div>

						<div
							className={
								selectedMenu.workType > 0
									? "btn-group2"
									: "Clicked-CardbarJob"
							}
						>
							<button
								className={
									selectedMenu.selectedId === 1
										? "HoldbuttonFW redius-L"
										: "buttonFW redius-L"
								}
								onClick={onClickFreelance}
							>
								หาฟรีแลนซ์
							</button>
							<button
								className={
									selectedMenu.selectedId === 2
										? "HoldbuttonFW redius-R"
										: "buttonFW redius-R"
								}
								onClick={onClickWork}
							>
								หางาน
							</button>
						</div>
					</div>
				</div>
			</div>
			{donate}
			<div className="cards">
				<div className="cards__container">
					{showContent}
				</div>
			</div>
		</div>
	);
};

export default Contents;
