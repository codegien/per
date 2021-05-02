import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

//ES7 react snipset to do 'rfce'
function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card src="https://q-xx.bstatic.com/images/hotel/max1024x768/111/111085073.jpg?"
                title="Online Experiences"
                description="Unique activities we can do togother, led by a world of hosts."
                />

                <Card
                src="https://q-xx.bstatic.com/images/hotel/max1024x768/682/68204054.jpg?"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
                />

                <Card
                    src="https://q-xx.bstatic.com/images/hotel/max1024x768/733/73389394.jpg?"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
                />

                <Card
                    src="https://q-xx.bstatic.com/images/hotel/max1024x768/733/73389394.jpg?"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
                />
            </div>

            <div className='home__section'>
                <Card
                    src="https://q-xx.bstatic.com/images/hotel/max1024x768/111/111085073.jpg?"
                    title="Penthouse in Lagos"
                    description="Comfortable private places, with room for friends or family."
                    price= "N120 000/year"
                />
            <Card
                    src="https://q-xx.bstatic.com/images/hotel/max1024x768/111/111082776.jpg"
                    title="Studio Appartment"
                    description="Comfortable private places, with room for friends or family."
                    price= "N120 000/year"
                />
            <Card
                src="https://q-xx.bstatic.com/images/hotel/max1024x768/111/111082776.jpg"
                title="Self-contain"
                description="Comfortable private places, with room for friends or family."
                price= "N120 000/year"
            />
            <Card
                    src="https://q-xx.bstatic.com/images/hotel/max1024x768/111/111085073.jpg?"
                    title="Penthouse in Lagos"
                    description="Comfortable private places, with room for friends or family."
                    price= "N120 000/year"
                />
            </div>

        </div>
    )
}

export default Home
