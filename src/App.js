import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      }).catch(err => {
        console.warn(err);
        alert('Error with userlist fetching!');
      });
  }, []);
    const onChangeSearchValue = (event) => {
      setSearchValue(event.target.value);
    };
    const onClickInvite = (id) => {
      if(invites.includes(id)) {
        setInvites(prev => prev.filter(_id => _id !== id));
      } else {
        setInvites(prev => [...prev, id]);
      }
    };
    const onClickSendInvites = () => {
      setSuccess(true);
    };
  return (
    <div className="App">
      {
        success ? <Success count={invites.length}/> : 
        <Users onChangeSearchValue={onChangeSearchValue}
             searchValue={searchValue}
             invites={invites}
             onClickInvite={onClickInvite}
             onClickSendInvites={onClickSendInvites}
             items={users}/>
             
      }
      
    </div>
  );
}

export default App;