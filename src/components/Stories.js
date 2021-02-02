import React, { useEffect, useState } from 'react'

const Story = ({eyebrow, type, headline, hero}) => {
  return (
    <div className="Story">
      <div dangerouslySetInnerHTML={{__html: eyebrow}}></div>
      <div>{type}</div>
      <h3>{headline}</h3>
      <div><img src={hero}/></div>
    </div>
  )
}

const Stories = () => {
  const [page, setPage] = useState(1);
  const [stories, setStories] = useState([]);
  const [loader, setLoader] = useState(false);

  function updateStories(newStories){
    const allStories = stories.concat(newStories);
    setStories(allStories);
  }

  useEffect(() => {
    async function fetchStories(){
      const response = await fetch(`https://blog.google/api/v2/latest?paginate=7&cursor=${page}`);
      const data = await response.json();
      setLoader(false);
      updateStories(data.results);
    }
    setTimeout(() => {
      setLoader(true)
      fetchStories();
    }, 0);
  },[page])

  if(loader || stories.length === 0){
    return <div>Stories are being fetched.....</div>
  }

  return (
    <div className="Stories">
      <h1>All stories</h1>
      {
        stories.map( (eachStory, index) => <Story 
          key={index} 
          eyebrow={eachStory.eyebrow}
          type={eachStory.type}
          headline={eachStory.headline}
          hero={eachStory.hero}
        />)
      }
      <button onClick={() => setPage( page => page + 1)}>Load more stores</button>
    </div>
  )
}

export default Stories;
