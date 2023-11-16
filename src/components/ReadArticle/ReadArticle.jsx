import './style.css';
import {Link} from 'react-router-dom';

export default function ReadArticle(){

    //fetch data detail artikel
    const [dtlarticle, setDtlarticle] = useState([]);

    async function fetchData() {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await Axios.get(apiUrl + "articles/6521286b7452401756d29853");
            return response.data;
        } catch (error) {
            console.error(error);
            return[];
        }
    }
    useEffect(() => {
        async function loadData() {
            const data = await fetchData();
            setDtlarticle(data.data);
        }
        loadData();
    }, [])

    const arrayData = dtlarticle;

    return(
        <div className="box">
            <div className="main-content">
                <div className="content-container" key={data.judul}>
                    <h1>{data.judul}</h1>
                    <p>Pengarang: {data.pengarang}</p>
                    <img id="cover" src={data.gambar}/>
                    <p id="content">
                        {data.teks}
                    </p>
                </div>
            </div>
            
            <div className="related-content">
                <h2>Related Articles</h2><hr/>
                
                {article.map((arr) => (
                <div className="card" key={arr.judul} data={arr}>
                    <img id="thumbnail" src={arr.gambar} style={{ width: '100%' }} />
                    <div className="article-title">
                        <h4>{arr.judul}</h4>
                        <Link to="/read-article" className="link">Baca Selengkapnya</Link>
                    </div>
                </div>
                ))}

            </div>

        </div>
    )
}