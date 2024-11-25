import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  const sidebarMenu = [
    { link: '#about', name: 'About' },
    { link: '#experience', name: 'Experience' },
    { link: '#project', name: 'Project' },
  ];

  return (
    <div className="fixed w-fit h-full flex flex-col justify-evenly">
      <div className="space-y-2 overflow-hidden">
        <h1 className="text-2xl font-bold">Muhammad Fauzan</h1>
        <h3>Software Engineer</h3>
        {/* <p className="w-3/4">
          Lorem ipsum dolor asdasdsadsadsasit, amet consectetur adipisicing
          elit. Quo, atque!
        </p> */}
      </div>

      <div className="">
        <ul>
          {sidebarMenu.map((menu) => (
            <li
              className="flex items-center gap-x-2 group w-fit text-gray-400 hover:text-white hover:font-bold"
              key={menu.link}
            >
              <hr className="w-6 border-[1.5px] border-gray-400 group-hover:border-white transition-all duration-500 group-hover:w-24" />
              <a href={menu.link} className="">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-6">
        <Link href="">
          <FaGithub
            size={25}
            className="text-gray-500 hover:text-white transition-all duration-300"
          />
        </Link>
        <Link href="">
          <FaLinkedin
            size={25}
            className="text-gray-500 hover:text-white transition-all duration-300"
          />
        </Link>
        <Link href="">
          <FaInstagram
            size={25}
            className="text-gray-500 hover:text-white transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
