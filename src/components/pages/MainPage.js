import { useState } from 'react';
import { Helmet } from 'react-helmet';

import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import decoration from '../../resources/img/vision.png';
import CharSearchForm from '../charSearchForm/CharSearchForm';


const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
      setChar(id);
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel informational portal"
                />
                <title>Marvel informational portal</title>
                <link rel="icon" href="favicons/favicon.ico" />
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm/>
                    </ErrorBoundary>
                </div>
            </div>
            <img src={decoration} alt="vision" className="bg-decoration" />
        </>
    )
}

export default MainPage;