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

	const [showWork, setShowWork] = useState([]);

	const [selectedWorkID,setSelectWorkID] = useState({
		workID: 0
	})

	const handleClickWork = () =>{
		// showWork.work_post_id
		props.userWorkSelectID(selectedWorkID)
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
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image: Item.image_work_post_freelance,
					srcwork: "images/design.jpeg",
					path: "/WorkFreelance"
				}
			})
			setShowWork(work)
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
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image: Item.image_work_post_freelance,
					srcwork: "images/market.png",
					path: "/WorkFreelance"
				}
			})
			setShowWork(work)
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
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image: Item.image_work_post_freelance,
					srcwork: "images/programming.jpeg",
					path: "/WorkFreelance"
				}
			})
			setShowWork(work)
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
					image: Item.image_work_post_company,
					srcwork: selectedMenu.workType === 1 ? "images/design.jpeg"
						: selectedMenu.workType === 2 ? "images/market.png"
							: selectedMenu.workType === 3 ? "images/programming.jpeg" : null,
					path: "/WorkCompany"
				}
			})
			setShowWork(work)
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
					typeWorkName: Item.type_work_name,
					nameWork: Item.name_work,
					pricePostWork: Item.price_post_work,
					image: Item.image_work_post_freelance,
					srcwork: selectedMenu.workType === 1 ? "images/design.jpeg"
						: selectedMenu.workType === 2 ? "images/market.png"
							: selectedMenu.workType === 3 ? "images/programming.jpeg" : null,
					path: "/WorkFreelance"
				}
			})
			setShowWork(work)
			console.log(work);
		});

	};

	let showContent = <></>
	if (selectedMenu.selectedId === 1
		|| selectedMenu.workType === 1
		|| selectedMenu.workType === 2
		|| selectedMenu.workType === 3) {
		showContent = <div className="cards__wrapper">
			<ul className="cards__items">
				{showWork.map((Item, index) => {
					return (
						<>
							<li className="cards__item" key={index}>
								<Link
									className="cards__item__link"
									to={Item.path}
									onClick={() => setSelectWorkID(Item.work_post_id),handleClickWork}
								>
									<figure
										className="cards__item__pic-wrap"
										data-category={Item.firstName, Item.lastName}
									>
										<img
											className="cards__item__img"
											src={Item.srcwork}
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
										{Item.pricePostWork}
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
				{showWork.map((Item, index) => {
					return (
						<>
							<li className="cards__item" key={index}>
								<Link
									className="cards__item__link"
									to={Item.path}
									onClick={() => setSelectWorkID(Item.work_post_id),handleClickWork}
								>
									<figure
										className="cards__item__pic-wrap"
										data-category={Item.companyName}
									>
										<img
											className="cards__item__img"
											src={Item.srcwork}
											alt="Travel Image"
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
										{Item.pricePostWork}
									</h5>
								</Link>
							</li>
						</>
					);
				})}
			</ul>
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
			<div className="space_img_donate">
				<img
					className="img_for_danate"
					src="/images/Donate.png"
				/>
			</div>
			<div className="cards">
				<div className="cards__container">
					{showContent}
				</div>
			</div>
		</div>
	);
};

export default Contents;
