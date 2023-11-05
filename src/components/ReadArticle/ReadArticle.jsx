import './style.css';
import {Link} from 'react-router-dom';

export default function ReadArticle(){
    return(
        <div className="box">
            <div className="main-content">
                <div className="content-container">
                    <h1>Article Title</h1>
                    <p>The Writer</p>
                    <img id="cover" src=""/>
                    <p id="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            
            <div className="related-content">
                <h2>Related Articles</h2><hr/>
                <div className="card-rel">
                    <img id="thumbnail" src=""/>
                    <div className="article-title">
                        <h3>Judul Artikel</h3>
                        <p>Deskripsi Singkat Isi Artikel</p>
                        <Link to="/read-article" className="link">Baca Selengkapnya</Link>
                    </div>
                </div>
                <div className="card-rel">
                    <img id="thumbnail" src=""/>
                    <div className="article-title">
                        <h3>Judul Artikel</h3>
                        <p>Deskripsi Singkat Isi Artikel</p>
                        <Link to="/read-article" className="link">Baca Selengkapnya</Link>
                    </div>
                </div>
                <div className="card-rel">
                    <img id="thumbnail" src=""/>
                    <div className="article-title">
                        <h3>Judul Artikel</h3>
                        <p>Deskripsi Singkat Isi Artikel</p>
                        <Link to="/read-article" className="link">Baca Selengkapnya</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}