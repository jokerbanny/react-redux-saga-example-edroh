import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsFetch } from './catState'
import './App.css'
const App = () => {
  const cats = useSelector((state) => state.cats.cats)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])
  console.log(cats)
  return (
    <div className='App'>
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different spies</p>
      <hr />
      <div className='Gallery'>
        {cats.map((cat) => (
          <div key={cat.id} className='row'>
            <div className='column column-left'>
              <img
                src={cat.image.url}
                alt={cat.name}
                width='200'
                height='200'
              />
            </div>
            <div className='column column-right'>
              <h2>{cat.name}</h2>
              <h5>Temperement: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button>VIEW MORE CATS</button>
    </div>
  )
}

export default App
