import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return <h2>sidebar component</h2>;
};

export default Sidebar;
