import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  const newarr = [1,2,3,4,5];
  return (
    <>
      <h1 className='text-2xl bg-blue-500  rounded-md'>Hey abhi</h1>
      <Card username="abhishek" post="manager" image='https://images.pexels.com/photos/19312410/pexels-photo-19312410.jpeg'/>
       <Card username="abhinav" post="developer" image='https://images.pexels.com/photos/34382080/pexels-photo-34382080.jpeg'/>
        <Card myarr={newarr}/>
    </>
  );
}

export default App;
