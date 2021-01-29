import React, { Fragment, Component} from "react";
import Carusel from "../components/Carusel";
import Categories from "../components/Categories";
import CategoryItems from "../components/CategoryItems";

const initialState = {
  "Originals": [
    {
      "id": 2,
      "slug": "tvshow-2",
      "title": "In the Dark",
      "type": "Scripted",
      "language": "English",
      "year": 2009,
      "contentRating": "16+",
      "duration": 164,
      "cover": "http://dummyimage.com/800x600.png/99118E/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 3,
      "slug": "tvshow-3",
      "title": "Instinct",
      "type": "Adventure",
      "language": "English",
      "year": 2002,
      "contentRating": "16+",
      "duration": 137,
      "cover": "http://dummyimage.com/800x600.png/302140/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 4,
      "slug": "tvshow-4",
      "title": "Grand Hotel",
      "type": "Comedy",
      "language": "English",
      "year": 2014,
      "contentRating": "16+",
      "duration": 163,
      "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 5,
      "slug": "tvshow-5",
      "title": "Stargate Atlantis",
      "type": "Scripted",
      "language": "English",
      "year": 2014,
      "contentRating": "16+",
      "duration": 194,
      "cover": "http://dummyimage.com/800x600.png/B36F20/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 6,
      "slug": "tvshow-6",
      "title": "Final Space",
      "type": "Scripted",
      "language": "English",
      "year": 2017,
      "contentRating": "16+",
      "duration": 124,
      "cover": "http://dummyimage.com/800x600.png/CCC539/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 7,
      "slug": "tvshow-7",
      "title": "The InBetween",
      "type": "Drama",
      "language": "English",
      "year": 2011,
      "contentRating": "16+",
      "duration": 179,
      "cover": "http://dummyimage.com/800x600.png/FF7A90/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    }
  ],
  "recomended": [
    {
      "id": 8,
      "slug": "tvshow-8",
      "title": "Stargate Atlantis",
      "type": "Action",
      "language": "English",
      "year": 2012,
      "contentRating": "16+",
      "duration": 148,
      "cover": "http://dummyimage.com/800x600.png/306880/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 9,
      "slug": "tvshow-9",
      "title": "Alien Highway",
      "type": "Action",
      "language": "English",
      "year": 2019,
      "contentRating": "16+",
      "duration": 128,
      "cover": "http://dummyimage.com/800x600.png/604180/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 10,
      "slug": "tvshow-10",
      "title": "Elementary",
      "type": "Animation",
      "language": "English",
      "year": 2011,
      "contentRating": "16+",
      "duration": 346,
      "cover": "http://dummyimage.com/800x600.png/FF91BA/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 11,
      "slug": "tvshow-11",
      "title": "Strange Angel",
      "type": "War",
      "language": "English",
      "year": 2015,
      "contentRating": "16+",
      "duration": 226,
      "cover": "http://dummyimage.com/800x600.png/45807C/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 12,
      "slug": "tvshow-12",
      "title": "Private Eyes",
      "type": "Comedy",
      "language": "English",
      "year": 2018,
      "contentRating": "16+",
      "duration": 190,
      "cover": "http://dummyimage.com/800x600.png/577380/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    },
    {
      "id": 13,
      "slug": "tvshow-13",
      "title": "NCIS: Los Angeles",
      "type": "Drama",
      "language": "English",
      "year": 2010,
      "contentRating": "16+",
      "duration": 160,
      "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
    }
  ]
}

export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        loading:true,
        error: null,
        data: initialState,
    }
}
  render() {
    return (
      <div className="lg:col-span-10 col-span-12 backgound-secundary">
      <div className=" flex flex-col">
        <Carusel />
        <Categories title="Amazon Originals and Exclusives">
          {this.state.data.Originals.map(originals=>
            <Fragment key={originals.id}>
            <CategoryItems {...originals}/>
          </Fragment>
          )}
        </Categories>
      </div>
    </div>
    )
  }
}

export default Home

