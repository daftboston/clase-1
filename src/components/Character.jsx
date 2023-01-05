const Character = ({data}) =>{

return (
    <div className="character-card">
        
        <h2>{data.name}</h2>
        <img src={data.image} alt="" />
        <h3><span>{data.specie}</span></h3>
    
    </div>
)
}

export default Character