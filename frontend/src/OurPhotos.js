import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from "reactstrap";
import photo1 from './assets/Images/witow_2017.jpeg'
import photo2 from './assets/Images/pola_mokotowskie.jpg'
import photo3 from './assets/Images/Kuligow_kwiecien_2020.jpeg'
import photo4 from './assets/Images/siwa_przelecz.jpeg'
import photo5 from './assets/Images/chocholowska1.jpeg'
import photo6 from './assets/Images/chocholowska2.jpeg'
import photo7 from './assets/Images/lamy.jpg'
import photo8 from './assets/Images/sanki.jpeg'
import photo9 from './assets/Images/oswiadczyny.jpg'
import photo10 from './assets/Images/jaworzyna.jpg'
import photo11 from './assets/Images/malolaczniak1.jpg'
import photo12 from './assets/Images/malolaczniak2.jpg'
import photo13 from './assets/Images/malolaczniak3.jpg'
import photo14 from './assets/Images/sesja_narzeczenska.png'

const OurPhotos = () => (
	<div className="OurPhotos">
		<Container>
			<div className='Carousel-container'>
				<Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} useKeyboardArrows={true}>
					<div>
						<img src={photo1} />
					</div>
					<div>
						<img src={photo2} />
					</div>
					<div>
						<img src={photo3} />
					</div>
					<div>
						<img src={photo4} />
					</div>
					<div>
						<img src={photo5} />
					</div>
					<div>
						<img src={photo6} />
					</div>
					<div>
						<img src={photo7} />
					</div>
					<div>
						<img src={photo8} />
					</div>
					<div>
						<img src={photo9} />
					</div>
					<div>
						<img src={photo10} />
					</div>
					<div>
						<img src={photo11} />
					</div>
					<div>
						<img src={photo12} />
					</div>
					<div>
						<img src={photo13} />
					</div>
					<div>
						<img src={photo14} />
					</div>
				</Carousel>
			</div>
		</Container>
	</div>
)

export default OurPhotos;