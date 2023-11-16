import './style.css';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { data } from 'autoprefixer';

export default function ListOfArticles() {
    
    //fetch data artikel
    const [article, setArticle] = useState([]);

    async function fetchData() {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await Axios.get(apiUrl + "articles");
            return response.data;
        } catch (error) {
            console.error(error);
            return[];
        }
    }
    useEffect(() => {
        async function loadData() {
            const data = await fetchData();
            setArticle(data.data);
        }
        loadData();
    }, [])

    const arrayData = article;

    const image = "https://via.placeholder.com/150";
    return(
        <div id="content">
            <div className="title-container">
                <h1>News and Article</h1>
            </div>

            <div className="content-container">
                <ul>
                    <li className="card-wrapper">
                        
                        {article.map((arr) => (
                        <div className="card" key={arr.judul} data={arr}>
                            <img id="thumbnail" src={arr.gambar} style={{ width: '100%' }} />
                            <div className="article-title">
                                <h4>{arr.judul}</h4>
                                <Link to={`/read-article/${arr.judul}`} className="link" key={data.judul}>Baca Selengkapnya</Link>
                            </div>
                        </div>
                        ))}

                    </li>
                </ul>
            </div>
        </div>
    )
}