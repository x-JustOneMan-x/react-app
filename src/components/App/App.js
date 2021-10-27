import './App.scss';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Profile from '../Profile/profile';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar/>
      <div className="main-content">
        <Profile/>
      </div>
    </div>
  );
};


export default App;
