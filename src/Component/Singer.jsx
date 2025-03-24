import './App.css';
export default function Singer({singer}){
    //  console.log(singer);
    return (
        <div className='school'>
            <p>hello : {singer.name}</p>
            <p>hello : {singer.age}</p>
        </div>
    );
}