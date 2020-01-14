import React from 'react';


import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'suits',
                    imageUrl: 'https://i.ibb.co/0r3cdJ1/person-sitting-on-stairs-beside-sunglasses-1300550.jpg',
                    id: 2,
                    linkUrl: 'shop/suits'
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://i.ibb.co/F0CdzQ8/classic-clothes-commerce-fashion-298863.jpg',
                    id: 3,
                    linkUrl: 'shop/shoes'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/rkbk0Qb/averie-woodard-4nulm-JUYFo-unsplash.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/SxtQgLC/gregory-hayes-1-Cb-r-NMO10-Y-unsplash.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }


    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}


export default Directory;