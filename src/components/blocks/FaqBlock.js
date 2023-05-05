export default function FaqBlock({attr}) {
    const data = attr.data;
    console.log(data);
    return (
        <>
        <div>
        {data.title && <h2>{data.title}</h2>}
        
        {data.text && <p>{data.text}</p>}
        </div>
        
        </>
        
    )
    
}