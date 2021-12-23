import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import "./Cardbar.css";
import CardItem from "./CardItem";
import axios from '../api/axios-work'
import {
	Nothing,
	GraphicFree,
	GraphicWork,
	MarketFree,
	MarketWork,
	ProgrammingFree,
	ProgrammingWork,
} from "./CardWorkandFreelance/Carddataset";

const Cards = () => {
	// const [clickGraphic, setClickGraphic] = useState(false);
	// const [clickMarket, setClickMarket] = useState(false);
	// const [clickProgramming, setClickProgramming] = useState(false);
	// const [clickFree, setClickFree] = useState(false);
	// const [clickWork, setClickWork] = useState(false);
	// const [dropdownWork, setDropdownWork] = useState(false);
	// const [selectedWorkType, setSelectedWorkType] = useState(1);
	// const [selectedId, setSelectedId] = useState(1);

	const [selectedMenu, setSelectedMenu] = useState({
		graphic: false,
		programming: false,
		market: false,
		workType: 0,
		selectedId: 0,
	});

	const pp = [
		[GraphicFree, GraphicWork],
		[MarketFree, MarketWork],
		[ProgrammingFree, ProgrammingWork],
	];

	const onClickGraphic = () => {
		setSelectedMenu({
			graphic: true,
			programming: false,
			market: false,
			workType: 1,
			selectedId: 0,
		});
		// setSelectedWorkType(1);
		// console.log(selectedWorkType);
		// setDropdownWork(true);
		// setClickGraphic(true);
		// setClickMarket(false);
		// setClickProgramming(false);
		// setClickFree(false);
		// setClickWork(false);
	};

	const onClickMarket = () => {
		setSelectedMenu({
			graphic: false,
			programming: false,
			market: true,
			workType: 2,
			selectedId: 0,
		});
		// setSelectedWorkType(2);
		// console.log(selectedWorkType);
		// setDropdownWork(true);
		// setClickMarket(true);
		// setClickGraphic(false);
		// setClickProgramming(false);
		// setClickFree(false);
		// setClickWork(false);
	};

	const onClickProgramming = () => {
		setSelectedMenu({
			graphic: false,
			programming: true,
			market: false,
			workType: 3,
			selectedId: 0,
		});
		// setSelectedWorkType(3);
		// console.log(selectedWorkType);
		// setDropdownWork(true);
		// setClickProgramming(true);
		// setClickGraphic(false);
		// setClickMarket(false);
		// setClickFree(false);
		// setClickWork(false);
	};


	const onClickWork = () => {
      setSelectedMenu({...selectedMenu, selectedId: 2})
		// setClickFree(false);
		// setClickWork(true);
		// setSelectedId(2);
		const job = {
			type_work_id: selectedMenu.workType,
			select_id: 2,
		};
    axios.post(`/getallwork`, { job }).then((res) => {
      console.log(job);
      console.log(res.data);
    });
	};
	const onClickFreelance = () => {
      setSelectedMenu({...selectedMenu, selectedId: 1})
		// setClickFree(true);
		// setClickWork(false);
		// setSelectedId(1);
		const job = {
			type_work_id: selectedMenu.workType,
			select_id: 1,
		};
			axios.post(`/getallwork`, { job }).then((res) => {
				console.log(job);
				console.log(res.data);
			});
	};

	const work = [{}];

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

			<div className="cards">
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							{GraphicFree.map((Item, index) => {
								return (
									<>
										<li className="cards__item" key={index}>
											<Link
												className="cards__item__link"
												to={Item.path}
											>
												<figure
													className="cards__item__pic-wrap"
													data-category={Item.label}
												>
													<img
														className="cards__item__img"
														src={Item.srcwork}
														alt="Travel Image"
													/>
												</figure>
												<div className="cards__item__info">
													<h5 className="cards__item__text">
														{Item.text}
													</h5>
													<h5 className="cards__item__text">
														{Item.text2}
													</h5>
												</div>
												<h5 className="cards__item__text_price">
													{Item.price}
												</h5>
											</Link>
										</li>
									</>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
