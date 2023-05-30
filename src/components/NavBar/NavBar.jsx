import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

export default function NavBar({setUser, user}) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }
    return (
      <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;&nbsp;<span>Welcome, {user.name}</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    );
  }