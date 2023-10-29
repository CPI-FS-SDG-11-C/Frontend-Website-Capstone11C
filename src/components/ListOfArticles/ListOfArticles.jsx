import './style.css';

export default function ListArticles() {
    return(
        <div>
            <div className="title-container">
                <h1>News and Article</h1>
            </div>

            <div className="content-container">
                <ul>
                    <li className="card-wrapper">
                        
                        <div className="card">
                            <img id="thumbnail" src={image}/>
                            <div className="article-title">
                                <h3>Judul Artikel</h3>
                                <p>Deskripsi Singkat Isi Artikel</p>
                            </div>
                        </div>

                        <div className="card">
                            <img id="thumbnail" src={image}/>
                            <div className="article-title">
                                <h3>Judul Artikel</h3>
                                <p>Deskripsi Singkat Isi Artikel</p>
                            </div>
                        </div>

                        <div className="card">
                            <img id="thumbnail" src={image}/>
                            <div className="article-title">
                                <h3>Judul Artikel</h3>
                                <p>Deskripsi Singkat Isi Artikel</p>
                            </div>
                        </div>

                        <div className="card">
                            <img id="thumbnail" src={image}/>
                            <div className="article-title">
                                <h3>Judul Artikel</h3>
                                <p>Deskripsi Singkat Isi Artikel</p>
                            </div>
                        </div>

                        <div className="card">
                            <img id="thumbnail" src={image}/>
                            <div className="article-title">
                                <h3>Judul Artikel</h3>
                                <p>Deskripsi Singkat Isi Artikel</p>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}