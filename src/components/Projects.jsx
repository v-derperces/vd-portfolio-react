import React from 'react';

import Card from "./Card.jsx";

function Projects() {

    const cardsData = [
        {
            name: "Portfolio",
            description: "Integration project completed as part of an OpenClassrooms course, recreating a fictional portfolio in HTML5 and CSS3 to practice basic web development skills",
            imageSrc: "/assets/images/portfolio.png",
            link: "https://github.com/v-derperces/portfolio-RobieWilliams.git",
            stack: ["Html", "Css", "Javascript"]
        },
        {
            name: "GesCom",
            description: "Customer and prospect management application developed in Java with Swing, enabling CRUD operations through a graphical interface connected to a MySQL database.",
            imageSrc: "/assets/images/gescom.png",
            link: "https://github.com/v-derperces/CRM-Swing.git",
            stack: ["Java", "Swing", "MySql"]
        },
        {
            name: "Ecommerce API",
            description: "A SpringBoot API that manages the core functionalities of an e-commerce application.  \n" +
                "It allows managing users, their roles, products, categories and orders",
            imageSrc: "/assets/images/devices_640.jpg",
            link: "",
            stack: ["Springboot", "Java", "Mysql", "Maven"]
        },
        {
            name: "Bois & Palettes",
            description: "Symfony collaborative internship project linking a reseller with clients and suppliers on a secure platform. It works like a marketplace with a pallet catalog.",
            imageSrc: "/assets/images/bois-et-palettes.png",
            link: "https://github.com/acoubidou/projet_palette.git",
            stack: ["Symfony", "PHP", "Mysql", "Maven", "TWIG"]
        },
        {
            name: "POS Order Tabs",
            description: "A custom Odoo 16 POS extension that lets users pin and quickly switch between multiple orders through a dedicated “Order Tabs” interface, boosting efficiency in busy retail environments.",
            imageSrc: "/assets/images/select-orders-lg.png",
            link: "https://github.com/v-derperces/odoo_pos_ordertabs.git",
            stack: ["Odoo 16", "Postgresql", "Python", "Javascript", "Linux"]
        }
    ];

    return (
        <div className="cards-container m-0 d-grid row-gap-3 gap-md-5">
            {cardsData.map((data, index) => (
                <Card key={index} data={data}/>
            ))}
        </div>
    );
}

export default Projects;
